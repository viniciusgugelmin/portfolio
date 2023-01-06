namespace ServerDTO {
  export interface IServer {
    get({ url }: GetServerDTO): Promise<any>;
  }

  export type GetServerDTO = {
    url: string;
  };
}

export type { ServerDTO };
