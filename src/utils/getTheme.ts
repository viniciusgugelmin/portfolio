import { ThemeTypes } from "../types/Theme/ThemeTypes";

function getTheme(): ThemeTypes.Theme {
  const userTheme =
    localStorage.getItem("theme") === "dark"
      ? "dark"
      : localStorage.getItem("theme") === "light"
      ? "light"
      : null;
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  return userTheme || systemTheme;
}

export { getTheme };
