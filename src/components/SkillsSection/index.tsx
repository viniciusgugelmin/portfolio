import { useLanguageContext } from "../../context/Language";
import texts from "../../data/texts.json";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid } from "swiper";
import { useWindowSizeContext } from "../../context/WindowSize";
import { skills } from "../../data/skills";

function SkillsSection(): JSX.Element {
  const { language } = useLanguageContext();
  const { isMedium, isLarge } = useWindowSizeContext();
  const iconWidth = 20;
  const iconHeight = 20;
  const typesColors = {
    frontend: "#2965f1",
    backend: "#3c873a",
    database: "#f29111",
    testing: "#c63d14",
    other: "#6a737d",
  };

  return (
    <section className="relative">
      <div className="container mx-auto text-center">
        <div className="flex flex-col w-full mb-10">
          <div className="w-full mb-6">
            <hr className="h-1 border-0 w-1/3 bg-accent-1-200 dark:bg-accent-6-500 rounded" />
          </div>
          <p className="w-3/4 mx-auto leading-relaxed text-base">
            {texts["skills"][language]}
          </p>
          <div className="w-full mt-6 flex justify-end">
            <hr className="h-1 border-0 w-1/3 bg-accent-1-200 dark:bg-accent-6-500 rounded" />
          </div>
        </div>
        <Swiper
          slidesPerView={isLarge ? 4 : isMedium ? 3 : 2}
          grid={{ rows: isLarge ? 4 : 5, fill: "row" }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          simulateTouch={true}
          spaceBetween={20}
          modules={[Grid, Pagination]}
          className="mySwiper"
        >
          {skills({ iconWidth, iconHeight }).map((skill) => (
            <SwiperSlide key={skill.name}>
              <div className="h-full border-2 border-accent-3-200 dark:border-accent-4-200 rounded-lg overflow-hidden">
                <div className="p-4">
                  <div className="flex flex-col items-center justify-center gap-2">
                    {skill.icon ? (
                      skill.icon
                    ) : (
                      <Image
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.name.toLowerCase()}/${skill.name.toLowerCase()}-original.svg`}
                        alt={skill.name}
                        width={iconWidth}
                        height={iconHeight}
                      />
                    )}
                    <h2 className="tracking-widest text-xs title-font font-bold mb-1">
                      {skill.name}
                    </h2>
                  </div>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    <div className="relative pt-1">
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-accent-3-300 dark:bg-accent-4-100">
                        <div
                          style={{ width: `${skill.level * 10}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-accent-3-700 dark:bg-accent-4-500"
                        ></div>
                      </div>
                    </div>
                  </h1>
                  <span
                    className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold text-white rounded"
                    style={{
                      backgroundColor:
                        // @ts-ignore
                        typesColors[skill.type] || typesColors["other"],
                    }}
                  >
                    {skill.type}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export { SkillsSection };
