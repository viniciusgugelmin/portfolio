import { ChangeEvent, FormEvent, useState } from "react";
import { LanguageTypes } from "../../types/Language/LanguageType";
import { useLanguageContext } from "../../context/Language";

type LanguageSwitcherProps = {
  className?: string;
};

function LanguageSwitcher({
  className = "",
}: LanguageSwitcherProps): JSX.Element {
  const baseKey = "language-switcher";
  const { language, setLanguage } = useLanguageContext();
  const languages = ["en", "pt"];

  function handleLanguageChange(value: string): void {
    setLanguage(value as LanguageTypes.Language);
  }

  return (
    <div
      className={`flex gap-1 self-center${className ? ` ${className}` : ""}`}
    >
      {languages.map((_language) => {
        const key = `${baseKey}-${_language}`;
        return (
          <div key={key}>
            <input
              className="hidden"
              type="radio"
              id={key}
              name="language"
              value={_language}
              checked={language === _language}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                handleLanguageChange(event.target.value);
              }}
            />
            <label
              className={`cursor-pointer vkg-link uppercase font-bold py-1 px-2.5 rounded-xl text-xs bg-accent-3-100 dark:bg-accent-5-100${
                language === _language
                  ? " bg-accent-3-400 dark:bg-accent-5-400"
                  : ""
              }`}
              htmlFor={key}
              onClick={() => handleLanguageChange(_language)}
            >
              {_language}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export { LanguageSwitcher };
