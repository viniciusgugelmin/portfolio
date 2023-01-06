import { useThemeContext } from "../../context/Theme";
import { icon } from "../../libs/Icon";

type ThemeSwitcherProps = {
  forAnimation?: boolean;
};

function ThemeSwitcher({
  forAnimation = false,
}: ThemeSwitcherProps): JSX.Element {
  const { theme, setTheme } = useThemeContext();
  const moonIcon = icon.show({
    name: "moon",
    className: "children:!stroke-accent-1 children:!fill-accent-1",
  });
  const sunIcon = icon.show({
    name: "sun",
    className: "children:!stroke-accent-6 children:!fill-accent-6",
  });
  const themeIcon = theme === "dark" ? moonIcon : sunIcon;

  function handleThemeChange() {
    if (forAnimation) return;

    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="flex items-center">
      <button
        className="vkg-button flex justify-end dark:justify-start gap-4 w-16 h-10 overflow-hidden"
        onClick={handleThemeChange}
        disabled={forAnimation}
      >
        {themeIcon}
      </button>
    </div>
  );
}

export { ThemeSwitcher };
