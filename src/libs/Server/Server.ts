import { ServerDTO } from "./ServerDTO";

class Server implements ServerDTO.IServer {
  public async get({ url }: ServerDTO.GetServerDTO): Promise<any> {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.json();
  }
}

export { Server };
