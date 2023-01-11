import { Timeline } from "../components/Timeline";
import { githubService } from "../services/Github";
import { GithubTypes } from "../types/Github/GithubTypes";
import { useLanguageContext } from "../context/Language";
import { Intro } from "../components/Intro";
import { useEffect, useState } from "react";
import { sections } from "../data/sections";

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

  useEffect(() => {
    setEvents(sections());
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
