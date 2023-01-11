type GetDateDTO = {
  dateString: string;
  language: "en" | "pt";
};

function getDate({ dateString, language }: GetDateDTO): string {
  const arrayOfString = dateString.split("-");

  if (arrayOfString.length !== 2) {
    return dateString;
  }

  let [year, month] = arrayOfString;
  month = month.replace(/^0+/, "");

  const months = {
    1: {
      en: "jan",
      pt: "jan",
    },
    2: {
      en: "feb",
      pt: "fev",
    },
    3: {
      en: "mar",
      pt: "mar",
    },
    4: {
      en: "apr",
      pt: "abr",
    },
    5: {
      en: "may",
      pt: "mai",
    },
    6: {
      en: "jun",
      pt: "jun",
    },
    7: {
      en: "jul",
      pt: "jul",
    },
    8: {
      en: "aug",
      pt: "ago",
    },
    9: {
      en: "sep",
      pt: "set",
    },
    10: {
      en: "oct",
      pt: "out",
    },
    11: {
      en: "nov",
      pt: "nov",
    },
    12: {
      en: "dec",
      pt: "dez",
    },
  };

  if (!Object.keys(months).includes(month)) {
    return dateString;
  }

  // @ts-ignore
  return `${months[month][language]}/${year}`;
}

export { getDate };
