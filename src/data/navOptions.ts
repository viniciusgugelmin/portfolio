import texts from "./texts.json";
import { icon } from "../libs/Icon";

const size = "small";
const className = "vkg-link scale-150";

const navOptions = () => [
  [texts["about-nav"], icon.show({ name: "about", size, className })],
  [texts["skills-nav"], icon.show({ name: "skills", size, className })],
  [texts["work-nav"], icon.show({ name: "work", size, className })],
  [texts["education-nav"], icon.show({ name: "education", size, className })],
  [texts["projects-nav"], icon.show({ name: "projects", size, className })],
  [texts["contact-nav"], icon.show({ name: "contact", size, className })],
];

export { navOptions };
