import { useEffect, useState } from "react";

function useType(
  textToType: string,
  _delay: number,
  allowToType: boolean
): {
  typedText: string;
  isFinished: boolean;
} {
  const [typedText, setTypedText] = useState("");
  const [delay, setDelay] = useState(_delay);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!allowToType) return;

    if (isFinished) {
      setTypedText(textToType);
      return;
    }

    if (typedText.length === textToType.length) {
      setIsFinished(true);
      return;
    }

    const timeout = setTimeout(() => {
      setTypedText(textToType.slice(0, typedText.length + 1));
      setDelay(150);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [textToType, typedText, allowToType]);

  return {
    typedText,
    isFinished,
  };
}

export { useType };
