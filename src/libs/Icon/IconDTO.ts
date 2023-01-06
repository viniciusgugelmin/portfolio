namespace IconDTO {
  export interface IIcon {
    show({ name, size, className, filled }: ShowDTO): JSX.Element;
  }

  export type ShowDTO = {
    name: string;
    size?: "small" | "medium" | "large" | "xlarge";
    className?: string;
    filled?: boolean;
  };
}

export type { IconDTO };
