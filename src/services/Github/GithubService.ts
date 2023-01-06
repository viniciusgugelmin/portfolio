import { GithubServiceDTO } from "./GithubServiceDTO";
import { ServerDTO } from "../../libs/Server/ServerDTO";
import { GithubTypes } from "../../types/Github/GithubTypes";

class GithubService implements GithubServiceDTO.IGithubService {
  private readonly baseUrl = "https://api.github.com";

  constructor(private readonly server: ServerDTO.IServer) {}

  public async getUserRepositories({
    username,
  }: GithubServiceDTO.GetUserRepositoriesDTO): Promise<
    GithubTypes.Repository[]
  > {
    return await this.server.get({
      url: `${this.baseUrl}/users/${username}/repos?per_page=100`,
    });
  }
}

export { GithubService };
