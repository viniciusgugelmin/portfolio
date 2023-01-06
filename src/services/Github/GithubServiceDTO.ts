import { GithubTypes } from "../../types/Github/GithubTypes";

namespace GithubServiceDTO {
  export interface IGithubService {
    getUserRepositories({
      username,
    }: GetUserRepositoriesDTO): Promise<GithubTypes.Repository[]>;
  }

  export type GetUserRepositoriesDTO = {
    username: string;
  };
}

export type { GithubServiceDTO };
