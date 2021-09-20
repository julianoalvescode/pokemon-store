import { HttpClient } from "infra/HttpClient";

import * as I from "./types";

class CatalogService {
  async loadCatalog(): Promise<I.CatalogAll | undefined> {
    try {
      const { data } = await HttpClient.get("/type/fire");
      return data;
    } catch (e) {
      return undefined;
    }
  }

  async searchCatalog(
    name: string | undefined
  ): Promise<I.PokemonUnit | undefined> {
    try {
      const { data } = await HttpClient.get(`/pokemon/${name}`);

      return data;
    } catch (e) {
      return undefined;
    }
  }

  async loadDataPokemon(url: string): Promise<I.PokemonUnit | undefined> {
    try {
      const { data } = await HttpClient.get(`${url}`);

      return data;
    } catch (e) {
      return undefined;
    }
  }
}

export default new CatalogService();
