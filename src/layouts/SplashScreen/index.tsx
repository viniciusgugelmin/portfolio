import { useEffect, useState } from "react";
import { useThemeContext } from "../../context/Theme";
import { delay } from "../../utils/delay";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";
import { useLoadingContext } from "../../context/Loading";

function SplashScreen(): JSX.Element {
  const { theme, setTheme } = useThemeContext();
  const { setLoading } = useLoadingContext();
  const [loadedTheme, setLoadedTheme] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (loadedTheme) {
      loadAnimation();
      return;
    }

    delay({ ms: 300 }).then(() => {
      setLoadedTheme(true);
    });
  }, [loadedTheme]);

  function loadAnimation() {
    document.body.style.overflow = "hidden";
    const themeToLoad = theme;
    setTheme(themeToLoad === "dark" ? "light" : "dark");

    delay({ ms: 300 })
      .then(() => {
        setLoadedTheme(true);
      })
      .then(() => {
        delay({ ms: 1500 })
          .then(() => {
            setTheme(themeToLoad);
          })
          .then(() => {
            delay({ ms: 1000 }).then(() => {
              setIsMounted(true);
              document.body.style.overflow = "auto";
              setLoading(false);
            });
          });
      });
  }

  return (
    <>
      {!isMounted && (
        <div
          className={`fixed bg-accent-6 transition-colors duration-500 ease-in-out top-0 left-0 w-screen h-screen z-50 flex justify-center align-center${
            loadedTheme ? " dark:bg-accent-1" : ""
          }`}
        >
          {loadedTheme && <ThemeSwitcher forAnimation={true} />}
        </div>
      )}
      <></>
    </>
  );
}

export { SplashScreen };
