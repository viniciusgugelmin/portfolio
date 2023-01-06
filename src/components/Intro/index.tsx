import texts from "../../data/texts.json";
import { useLanguageContext } from "../../context/Language";
import { useType } from "../../hooks/useType";
import { useLoadingContext } from "../../context/Loading";

function Intro(): JSX.Element {
  const { language } = useLanguageContext();
  const { loading } = useLoadingContext();
  const { typedText } = useType(
    texts["intro-text-2"][language],
    1500,
    !loading
  );

  return (
    <section className="m-auto max-w-2xl  items-start">
      <small className="text-accent-3 dark:text-accent-5 text-lg mb-5 flex w-full gap-4">
        <span className="min-w-fit">{texts["intro"][language]}</span>
        <hr className="h-1 w-full border-0 bg-accent-1-200 dark:bg-accent-6-500 my-auto rounded" />
      </small>
      <h2 className="text-accent-1-500 font-bold dark:text-accent-6-500 text-5xl mb-1">
        {texts["intro-text"][language]}
      </h2>
      <h1 className="text-5xl font-bold mb-6 blinking-cursor">{typedText}</h1>
      <p className="leading-7 max-w-[420px]">
        {texts["intro-text-3"][language]}
      </p>
    </section>
  );
}

export { Intro };
