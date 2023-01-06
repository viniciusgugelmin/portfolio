import { Timeline } from "../components/Timeline";
import { githubService } from "../services/Github";
import { GithubTypes } from "../types/Github/GithubTypes";
import texts from "../data/texts.json";
import { useLanguageContext } from "../context/Language";
import { Intro } from "../components/Intro";
import { useEffect, useState } from "react";
import { icon } from "../libs/Icon";
import { AboutSection } from "../components/AboutSection";
import { CodingSection } from "../components/CodingSection";
import { SkillsSection } from "../components/SkillsSection";

type HomeProps = {
  repositories: GithubTypes.Repository[];
};

export default function Home({ repositories }: HomeProps) {
  const { language } = useLanguageContext();
  const [events, setEvents] = useState<
    {
      title: { pt: string; en: string };
      icon: JSX.Element;
      content: JSX.Element;
    }[]
  >([]);
  const iconClassName =
    "children:!stroke-accent-3 dark:children:!stroke-accent-4 scale-75 ml-1";

  useEffect(() => {
    setEvents([
      {
        title: texts["about-nav"],
        icon: icon.show({
          name: "about",
          className: iconClassName,
        }),
        content: <AboutSection />,
      },
      {
        title: texts["skills-nav"],
        icon: icon.show({
          name: "skills",
          className: iconClassName,
        }),
        content: <SkillsSection />,
      },
      {
        title: texts["work-nav"],
        icon: icon.show({
          name: "work",
          className: iconClassName,
        }),
        content: <CodingSection />,
      },
      {
        title: texts["education-nav"],
        icon: icon.show({
          name: "education",
          className: iconClassName,
        }),
        content: <CodingSection />,
      },
      {
        title: texts["projects-nav"],
        icon: icon.show({
          name: "projects",
          className: iconClassName,
        }),
        content: <CodingSection />,
      },
      {
        title: texts["contact-nav"],
        icon: icon.show({
          name: "contact",
          className: iconClassName,
        }),
        content: <CodingSection />,
      },
    ]);
  }, []);

  return (
    <>
      <Intro />
      <Timeline events={events} />
    </>
  );
}

export async function getStaticProps() {
  const repositories = await githubService.getUserRepositories({
    username: process.env.NEXT_PUBLIC_AUTHOR_GITHUB as string,
  });

  return {
    props: {
      repositories,
    },
    revalidate: 60 * 60 * 24,
  };
}
