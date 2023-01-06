import { useLanguageContext } from "../../context/Language";
import texts from "../../data/texts.json";

function CodingSection(): JSX.Element {
  const { language } = useLanguageContext();
  return (
    <h1 className="text-accent-1-500 font-bold dark:text-accent-6-500 text-4xl md:text-5xl">
      {texts["developing"][language]}...
    </h1>
  );
}

export { CodingSection };
