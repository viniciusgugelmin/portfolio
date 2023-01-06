import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { LanguageTypes } from "../../types/Language/LanguageType";
import { getLanguage } from "../../utils/getLanguage";

const defaultContext = {
  language: process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE as LanguageTypes.Language,
  setLanguage: (
    language:
      | LanguageTypes.Language
      | ((currValue: LanguageTypes.Language) => LanguageTypes.Language)
  ): void => {
    console.log("setLanguage", language);
  },
};

const LanguageContext = createContext({ ...defaultContext });
const useLanguageContext = () => useContext(LanguageContext);

interface LanguageProviderProps extends PropsWithChildren {}

function LanguageContextProvider({
  children,
}: LanguageProviderProps): JSX.Element {
  const [language, setLanguage] = useState<LanguageTypes.Language>(
    defaultContext.language
  );
  const [languageLoaded, setLanguageLoaded] = useState<boolean>(false);

  const contextReturn = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language]
  );

  useEffect(() => {
    const _language = getLanguage();

    setLanguage(_language);
    setLanguageLoaded(true);
  }, []);

  useEffect(() => {
    if (!languageLoaded) return;

    localStorage.setItem("language", language);
  }, [language, languageLoaded]);

  return (
    <LanguageContext.Provider value={contextReturn}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageContextProvider, useLanguageContext };
