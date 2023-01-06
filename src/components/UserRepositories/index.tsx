import { GithubTypes } from "../../types/Github/GithubTypes";

type UserRepositoriesProps = {
  repositories: GithubTypes.Repository[];
};

function UserRepositories({
  repositories,
}: UserRepositoriesProps): JSX.Element {
  return <div>UserRepositories</div>;
}

export { UserRepositories };
