type RemoveBlankSpaceDTO = {
  text: string;
  replaceWith?: "_" | "-";
  transformTo?: "lowercase" | "uppercase" | "camelcase" | "pascalcase" | "";
};

function removeBlankSpace({
  text,
  replaceWith = "-",
  transformTo = "",
}: RemoveBlankSpaceDTO): string {
  return transformTo
    ? text
        .split(" ")
        .map((word) => {
          switch (transformTo) {
            case "lowercase":
              return word.toLowerCase();
            case "uppercase":
              return word.toUpperCase();
            case "camelcase":
              return word === text[0]
                ? word.toLowerCase()
                : word.charAt(0).toUpperCase() + word.slice(1);
            case "pascalcase":
              return word.charAt(0).toUpperCase() + word.slice(1);
            default:
              return word;
          }
        })
        .join(replaceWith)
    : text.replace(" ", replaceWith);
}

export { removeBlankSpace };
