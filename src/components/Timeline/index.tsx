import { removeBlankSpace } from "../../utils/removeBlankSpace";
import { removeDiacritics } from "../../utils/removeDiacritics";
import { useLanguageContext } from "../../context/Language";
import { PropsWithChildren } from "react";

type TimelineProps = {
  events: {
    title: { pt: string; en: string };
    icon: JSX.Element;
    content: JSX.Element;
  }[];
};

function Timeline({ events }: TimelineProps): JSX.Element {
  return (
    <ol className="border-l border-accent-3 dark:border-accent-4 mt-2">
      {events.map(({ title, icon, content }, index) => {
        return (
          <TimelineWrapper key={index} title={title} icon={icon}>
            {content}
          </TimelineWrapper>
        );
      })}
    </ol>
  );
}

interface TimelineWrapperProps extends PropsWithChildren {
  title: { pt: string; en: string };
  icon: JSX.Element;
}

function TimelineWrapper({
  title,
  icon,
  children,
}: TimelineWrapperProps): JSX.Element {
  const { language } = useLanguageContext();
  const titleText = title[language];
  const titleCleaned = removeBlankSpace({
    text: removeDiacritics({ text: titleText }),
    transformTo: "lowercase",
  });

  return (
    <section id={`${titleCleaned}`}>
      <div className="flex flex-start items-center pt-3 mb-4">
        <div className="bg-accent-3 dark:bg-accent-4 w-2 h-2 rounded-full -ml-1 mr-3"></div>
        <h1 className="text-accent-3 dark:text-accent-4 text-sm font-bold flex items-end">
          {titleText} {icon}
        </h1>
      </div>
      <div className="mt-0.5 mb-6 m-auto max-w-2xl leading-7 children:children:pb-4 pl-4 md:pl-8 lg:pl-0">
        {children}
      </div>
    </section>
  );
}

export { Timeline };
