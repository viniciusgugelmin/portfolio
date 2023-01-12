import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination } from "swiper";
import { jobs } from "../../data/jobs";
import { removeBlankSpace } from "../../utils/removeBlankSpace";
import { removeDiacritics } from "../../utils/removeDiacritics";
import { useLanguageContext } from "../../context/Language";
import { getDate } from "../../utils/getDate";
import { toHtml } from "../../libs/ToHtml";
import { useWindowSizeContext } from "../../context/WindowSize";

function WorkSection(): JSX.Element {
  const { language } = useLanguageContext();
  const { isSmall } = useWindowSizeContext();
  const baseKey = "jobs";

  return (
    <>
      <Swiper
        navigation={!isSmall}
        simulateTouch={true}
        keyboard={true}
        watchSlidesProgress={true}
        pagination={{
          dynamicBullets: true,
        }}
        dir="rtl"
        modules={[Navigation, Keyboard, Pagination]}
        className="mySwiper no-fade no-bullets-md"
      >
        {jobs()
          .reverse()
          .map(({ company, role, type, from, to, description }, index) => {
            const _role = (role as { pt: string; en: string })[language];
            const _type = (type as { pt: string; en: string })[language];
            const _description = (description as { pt: string; en: string })[
              language
            ];

            const nameCleaned = removeBlankSpace({
              text: removeDiacritics({ text: role[language] }),
              transformTo: "lowercase",
            });
            const key = `${baseKey}-${nameCleaned}-${index}`;
            const date = `${getDate({ dateString: from, language })}${
              to ? ` - ${getDate({ dateString: to, language })}` : ""
            }`;

            const borderRight = index === 0 ? " rounded-r" : "";
            const borderLeft = index === jobs().length - 1 ? " rounded-l" : "";

            return (
              <SwiperSlide key={key}>
                <section className="flex flex-col justify-center items-center min-h-min">
                  <h1 className="text-2xl font-bold text-center">{company}</h1>
                  <h2 className="text-2xl text-xs md:text-sm font-bold text-center text-accent-1 dark:text-accent-6 mb-1">
                    {_role}
                    &nbsp;&nbsp;
                    <span className="py-0.5 px-1.5 text-xs md:text-sm leading-none text-center whitespace-nowrap align-baseline font-bold bg-accent-3-500 dark:bg-accent-5-500 text-accent-6 rounded">
                      {_type}
                    </span>
                  </h2>
                  <h3 className="text-2xl text-sm font-bold text-accent-1-500 dark:text-accent-6-500 pb-4 relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:border-t-accent-1 after:border-l-transparent after:border-r-transparent dark:after:border-t-accent-6 after:h-3 after:w-3 after:border-t-8 after:border-l-8 after:border-r-8">
                    {date}
                  </h3>
                  <hr
                    className={`h-1 mb-8 border-0 w-full bg-accent-1-200 dark:bg-accent-6-500${borderRight}${borderLeft}`}
                  />
                  {toHtml.handle({
                    text: _description,
                    className:
                      "text-left text-sm px-2 font-bold dark:border-accent-4-500 children:children:relative children:children:before:absolute children:children:before:h-0 children:children:before:w-0 md:children:children:before:h-1 md:children:children:before:w-1 children:children:before:bg-accent-2 dark:children:children:before:bg-accent-6 children:children:before:-left-3 children:children:before:top-1/4 children:children:before:translate-y-1/2 children:children:mb-2 children:children:border-b-2 children:children:pb-2 children:children:border-b-accent-3-200 dark:children:children:border-b-accent-4-200 children:children:before:rounded-full",
                  })}
                </section>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}

export { WorkSection };
