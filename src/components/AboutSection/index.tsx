import { toHtml } from "../../libs/ToHtml";
import texts from "../../data/texts.json";
import { Shortly } from "../Shortly";
import { useLanguageContext } from "../../context/Language";
import { getAge } from "../../utils/getAge";
import { useState } from "react";
import { useWindowSizeContext } from "../../context/WindowSize";

function AboutSection(): JSX.Element {
  const { isSmall } = useWindowSizeContext();
  const [isStarted, setIsStarted] = useState(false);
  const [open, setOpen] = useState(false);
  const { language } = useLanguageContext();
  const hr = !isSmall && (
    <hr className="h-1 !p-0 w-full border-0 bg-accent-1-200 dark:bg-accent-6-500 my-auto rounded" />
  );

  return (
    <>
      <div className="flex mb-5 flex w-full gap-4">
        {hr}
        <h1 className="min-w-fit !p-0 font-bold text-2xl text-accent-3 dark:text-accent-5">
          {process.env.NEXT_PUBLIC_AUTHOR_NAME} {isSmall ? <br /> : "- "}
          {getAge({
            birthDate: new Date(
              process.env.NEXT_PUBLIC_AUTHOR_BIRTHDATE as string
            ),
          })}{" "}
          {texts["years"][language]}
        </h1>
        {hr}
      </div>
      <Shortly
        isStarted={isStarted}
        setIsStarted={setIsStarted}
        open={open}
        setOpen={setOpen}
      >
        {toHtml.handle({ text: texts["about"][language] })}
      </Shortly>
    </>
  );
}

export { AboutSection };
