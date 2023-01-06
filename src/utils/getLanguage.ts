import { LanguageTypes } from "../types/Language/LanguageType";

function getLanguage(): LanguageTypes.Language {
  const userLanguage = localStorage.getItem(
    "language"
  ) as LanguageTypes.Language;

  return ["pt", "en"].includes(userLanguage)
    ? userLanguage
    : (process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE as LanguageTypes.Language);
}

export { getLanguage };
