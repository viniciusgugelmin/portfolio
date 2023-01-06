import { removeDiacritics } from "../../utils/removeDiacritics";
import { removeBlankSpace } from "../../utils/removeBlankSpace";
import { useLanguageContext } from "../../context/Language";
import { scrollTo } from "../../utils/scrollTo";
import { useWindowSizeContext } from "../../context/WindowSize";
import { navOptions } from "../../data/navOptions";

function Nav(): JSX.Element {
  const { language } = useLanguageContext();
  const { isSmall } = useWindowSizeContext();
  const baseKey = "nav";

  return (
    <nav className="flex-1 self-center max-w-sml">
      <ul className="flex justify-between">
        {navOptions().map(([option, icon]) => {
          const key = `${baseKey}-li`;
          const optionText = (option as { pt: string; en: string })[language];
          const optionTextCleaned = removeBlankSpace({
            text: removeDiacritics({ text: optionText }),
            transformTo: "lowercase",
          });

          return (
            <li
              key={`${key}-${optionTextCleaned}`}
              id={`${optionTextCleaned}-nav`}
              className="font-bold vkg-link text-sm p-2.5 md:p-2 cursor-pointer"
            >
              <button
                onClick={() =>
                  scrollTo({
                    elementId: `${optionTextCleaned}-nav`,
                    targetId: `${optionTextCleaned}`,
                  })
                }
              >
                {isSmall ? (icon as JSX.Element) : optionText}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export { Nav };
