import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ThemeTypes } from "../../types/Theme/ThemeTypes";
import { getTheme } from "../../utils/getTheme";

const defaultContext = {
  theme: process.env.NEXT_PUBLIC_DEFAULT_THEME as ThemeTypes.Theme,
  setTheme: (
    theme:
      | ThemeTypes.Theme
      | ((currValue: ThemeTypes.Theme) => ThemeTypes.Theme)
  ): void => {
    console.log("setTheme", theme);
  },
};

const ThemeContext = createContext({ ...defaultContext });
const useThemeContext = () => useContext(ThemeContext);

interface ThemeProviderProps extends PropsWithChildren {}

function ThemeContextProvider({ children }: ThemeProviderProps): JSX.Element {
  const [theme, setTheme] = useState<ThemeTypes.Theme>(defaultContext.theme);
  const [themeLoaded, setThemeLoaded] = useState<boolean>(false);

  const contextReturn = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  useEffect(() => {
    const _theme = getTheme();

    setTheme(_theme);
    setThemeLoaded(true);
  }, []);

  useEffect(() => {
    if (!themeLoaded) return;

    document.documentElement.classList[theme === "dark" ? "add" : "remove"](
      "dark"
    );
    localStorage.setItem("theme", theme);
  }, [theme, themeLoaded]);

  return (
    <ThemeContext.Provider value={contextReturn}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider, useThemeContext };
