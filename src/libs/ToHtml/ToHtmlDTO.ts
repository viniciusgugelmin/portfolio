namespace ToHtmlDTO {
  export interface IToHtml {
    handle: ({ text }: HandleDTO) => JSX.Element;
  }

  export type HandleDTO = {
    text: string;
  };
}

export type { ToHtmlDTO };
