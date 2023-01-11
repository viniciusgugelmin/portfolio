import texts from "./texts.json";

const jobs = () => [
  {
    company: "Seduc",
    role: texts["computing-instructor"],
    type: texts["internship"],
    from: "2018-02",
    to: "2018-08",
    description: texts["seduc-role-description"],
  },
  {
    company: "Post ED",
    role: texts["full-stack-developer-jr"],
    type: texts["internship"],
    from: "2019-06",
    to: "2019-12",
    description: texts["post-ed-role-description"],
  },
  {
    company: "Post ED",
    role: texts["full-stack-developer-jr"],
    type: texts["full-time"],
    from: "2020-01",
    to: "2021-12",
    description: texts["post-ed-role-2-description"],
  },
  {
    company: "Betabit",
    role: texts["full-stack-developer-jr"],
    type: texts["internship"],
    from: "2021-04",
    to: "2021-09",
    description: texts["betabit-role-description"],
  },
  {
    company: "Betabit",
    role: texts["qa-developer"],
    type: texts["part-time"],
    from: "2021-10",
    to: "2021-12",
    description: texts["betabit-role-2-description"],
  },
  {
    company: "Driven Education",
    role: texts["full-stack-development-tutor"],
    type: texts["full-time"],
    from: "2022-01",
    description: texts["driven-education-role-description"],
  },
];

export { jobs };
