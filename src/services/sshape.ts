import { DataShape } from "../types/data";
import { dataPost } from "../mocks/datapost";

class Traer_Post {
  async get(): Promise<DataShape[]> {
    console.log("starting fetch...");
    const value: DataShape[] = await new Promise((resolve) => {
      setTimeout(() => resolve(dataPost), 3000);
    });
    return value;
  }
}

export default new Traer_Post();