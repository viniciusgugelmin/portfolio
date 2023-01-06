import { GithubService } from "./GithubService";
import { server } from "../../libs/Server";

const githubService = new GithubService(server);

export { githubService };
