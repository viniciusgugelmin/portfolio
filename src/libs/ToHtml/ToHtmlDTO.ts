namespace ToHtmlDTO {
  export interface IToHtml {
    handle: ({ text, className }: HandleDTO) => JSX.Element;
  }

  export type HandleDTO = {
    text: string;
    className?: string;
  };
}

export type { ToHtmlDTO };
