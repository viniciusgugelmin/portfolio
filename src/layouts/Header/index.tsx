import { Nav } from "../Nav";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";
import { LanguageSwitcher } from "../../components/LanguageSwitcher";
import { useEffect, useState } from "react";

function Header(): JSX.Element {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isStart, setIsStart] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [forceShow, setForceShow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setHasStarted(true);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    function handleScroll() {
      const position = window.pageYOffset;

      if (forceShow) {
        setIsScrollingUp(true);
        setIsScrollingDown(false);
        setIsStart(false);
        setScrollPosition(position);
        return;
      }

      setIsScrollingUp(position < scrollPosition);
      setIsScrollingDown(position > scrollPosition);
      setIsStart(position < 30);
      setScrollPosition(position);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition, hasStarted]);

  return (
    <>
      <header
        className={`min-w-full px-5 lg:px-12 py-8 flex z-20 sticky top-0 transition-all backdrop-blur-sm bg-accent-6-700 dark:bg-accent-1-700 vkg-transition${
          isScrollingDown && !isStart ? " -translate-y-full " : ""
        }${
          isScrollingUp && !isStart
            ? " shadow-md shadow-accent-2-100 dark:shadow-accent-2-400"
            : ""
        }`}
      >
        <ThemeSwitcher />
        <LanguageSwitcher className="grow ml-2.5 mr-1.5 md:ml-5" />
        <Nav setForceShowHeader={setForceShow} />
      </header>
    </>
  );
}

export { Header };
