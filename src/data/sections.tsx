import texts from "./texts.json";
import { icon } from "../libs/Icon";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { CodingSection } from "../components/CodingSection";
import { WorkSection } from "../components/WorkSection";

const iconClassName =
  "children:!stroke-accent-3 dark:children:!stroke-accent-4 scale-75 ml-1";

const sections = () => [
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
    content: <WorkSection />,
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
];

export { sections };
