import { studies } from "../../data/studies";
import { useLanguageContext } from "../../context/Language";
import { removeBlankSpace } from "../../utils/removeBlankSpace";
import { removeDiacritics } from "../../utils/removeDiacritics";
import { useThemeContext } from "../../context/Theme";

function EducationSection(): JSX.Element {
  const { language } = useLanguageContext();
  const { theme } = useThemeContext();
  const baseKey = "studies";

  return (
    <div className="flex justify-center gap-4">
      {studies()
        .reverse()
        .map(({ name, institution, from, to }, index) => {
          const nameCleaned = removeBlankSpace({
            text: removeDiacritics({ text: name[language] }),
            transformTo: "lowercase",
          });
          const key = `${baseKey}-${nameCleaned}-${index}`;

          return (
            <section
              key={key}
              data-mdb-ripple="true"
              data-mdb-ripple-radius="50"
              data-mdb-ripple-color={theme === "light" ? "blue" : "aqua"}
              className="flex flex-col items-center gap-2 p-4 border-2 border-accent-3-500 dark:border-accent-4-500 bg-accent-3-200 dark:bg-accent-4-200 rounded-lg min-h-min dark:sepia dark:hover:sepia-0 transition-all vkg-transition hover:scale-105 relative overflow-hidden before:absolute before:top-0 before:left-0 before:bg-accent-6-700 before:blur-sm before:w-full-100p before:h-3 before:rotate-45 before:translate-x-8 hover:before:-translate-x-full before:transition-all before:vkg-transition-lg"
            >
              <h1 className="text-lg font-bold">{name[language]}</h1>
              <h2 className="py-0.5 px-1.5 text-xs md:text-sm leading-none text-center whitespace-nowrap align-baseline font-bold bg-accent-3-500 dark:bg-accent-5-500 text-accent-6 rounded">
                {institution[language]}
              </h2>
              <h3 className="text-2xl text-sm font-bold text-accent-1-500 dark:text-accent-6-500">
                {from} - {to}
              </h3>
            </section>
          );
        })}
    </div>
  );
}

export { EducationSection };
