import Image from "next/image";

type SkillDTO = {
  iconWidth: number;
  iconHeight: number;
};

const skills = ({ iconWidth, iconHeight }: SkillDTO) => [
  {
    name: "HTML",
    level: 9,
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        alt="html"
        width={iconWidth}
        height={iconHeight}
      />
    ),
    type: "frontend",
  },
  {
    name: "CSS",
    level: 9,
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        alt="css"
        width={iconWidth}
        height={iconHeight}
      />
    ),
    type: "frontend",
  },
  {
    name: "SASS",
    level: 9,
    type: "frontend",
  },
  {
    name: "JavaScript",
    level: 8,
    type: "frontend",
  },
  {
    name: "React",
    level: 8,
    type: "frontend",
  },
  {
    name: "Vue",
    level: 7,
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
        alt="vue"
        width={iconWidth}
        height={iconHeight}
      />
    ),
    type: "frontend",
  },
  {
    name: "Angular",
    level: 6,
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
        alt="angular"
        width={iconWidth}
        height={iconHeight}
      />
    ),
    type: "frontend",
  },
  {
    name: "JQuery",
    level: 8,
    type: "frontend",
  },
  {
    name: "Next.js",
    level: 6,
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
        alt="nextjs"
        width={iconWidth}
        height={iconHeight}
      />
    ),
    type: "other",
  },
  {
    name: "TypeScript",
    level: 8,
    type: "other",
  },
  {
    name: "Node.js",
    level: 8,
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        alt="nodejs"
        width={iconWidth}
        height={iconHeight}
      />
    ),
    type: "backend",
  },
  {
    name: "Prisma",
    level: 8,
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg"
        alt="devicon"
        width={iconWidth}
        height={iconHeight}
      />
    ),
    type: "backend",
  },
  {
    name: "PHP",
    level: 7,
    type: "backend",
  },
  {
    name: "Laravel",
    level: 8,
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg"
        alt="laravel"
        width={iconWidth}
        height={iconHeight}
      />
    ),
    type: "backend",
  },
  {
    name: "C#",
    level: 4,
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
        alt="csharp"
        width={iconWidth}
        height={iconHeight}
      />
    ),
    type: "backend",
  },
  {
    name: "Java",
    level: 5,
    type: "backend",
  },
  {
    name: "Spring",
    level: 2,
    type: "backend",
  },
  {
    name: "Dart",
    level: 4,
    type: "other",
  },
  {
    name: "Flutter",
    level: 5,
    type: "other",
  },
  {
    name: "Python",
    level: 7,
    type: "backend",
  },
  {
    name: "MySQL",
    level: 7,
    type: "database",
  },
  {
    name: "PostgreSQL",
    level: 7,
    type: "database",
  },
  {
    name: "MongoDB",
    level: 8,
    type: "database",
  },
  {
    name: "Jest",
    level: 7,
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
        alt="jest"
        width={iconWidth}
        height={iconHeight}
      />
    ),
    type: "testing",
  },
  {
    name: "Cypress",
    level: 6,
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg"
        alt="devicon"
        width={iconWidth}
        height={iconHeight}
      />
    ),
    type: "testing",
  },
  {
    name: "Git",
    level: 9,
    type: "other",
  },
  {
    name: "Docker",
    level: 7,
    type: "other",
  },
  {
    name: "Github Actions",
    level: 6,
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        alt="github"
        width={iconWidth}
        height={iconHeight}
      />
    ),
    type: "other",
  },
  {
    name: "Digital Ocean",
    level: 5,
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg"
        alt="digitalocean"
        width={iconWidth}
        height={iconHeight}
      />
    ),
    type: "other",
  },
];

export { skills };
