import { useCallback, useEffect, useState } from "react";

declare global {
  interface WindowEventMap {
    "local-storage": CustomEvent;
  }
}

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => T] {
  function parseJSON(value: string | null): T {
    try {
      return JSON.parse(value ?? "");
    } catch {
      console.log("parsing error on", { value });
      return initialValue;
    }
  }

  const readValue = useCallback((): T => {
    try {
      const item = localStorage.getItem(key);
      return item && typeof parseJSON(item) === typeof initialValue
        ? parseJSON(item)
        : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error);
      return initialValue;
    }
  }, [initialValue, key]);

  const [storedValue, setStoredValue] = useState<T>(readValue);

  function setValue(value: T): T {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);

      window.dispatchEvent(new Event("local-storage"));
      return value;
    } catch (error) {
      console.warn(`Error setting localStorage key “${key}”:`, error);
      return initialValue;
    }
  }

  const handleStorageChange = useCallback(
    (event: StorageEvent | CustomEvent) => {
      if ((event as StorageEvent)?.key && (event as StorageEvent).key !== key) {
        return;
      }

      if (
        !(event as StorageEvent)?.newValue &&
        storedValue &&
        event.type === "storage"
      ) {
        switch (typeof initialValue) {
          case "string":
            // @ts-ignore
            setValue("");
            break;
          case "number":
            // @ts-ignore
            setValue(0);
            break;
          case "boolean":
            // @ts-ignore
            setValue(false);
            break;
          case "object":
            // @ts-ignore
            setValue({});
            break;
        }
        return;
      }

      setStoredValue(readValue());
    },
    [key, readValue]
  );

  useEffect(() => {
    setValue(readValue());

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("local-storage", handleStorageChange);
  }, []);

  return [storedValue, setValue];
}

export { useLocalStorage };
