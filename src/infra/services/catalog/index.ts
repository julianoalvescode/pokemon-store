import { HttpClient } from "infra/HttpClient";

import * as I from "./types";

class CatalogService {
  async loadCatalog(): Promise<I.CatalogAll | unknown> {
    try {
      const { data } = await HttpClient.get("/type/fire");
      return data;
    } catch (e) {
      return null;
    }
  }

  async searchCatalog(
    name: string | undefined
  ): Promise<I.PokemonUnit | unknown> {
    try {
      const { data } = await HttpClient.get(`/pokemon/${name}`);

      return data;
    } catch (e) {
      return null;
    }
  }

  async loadDataPokemon(url: string): Promise<I.PokemonUnit | null> {
    try {
      const { data } = await HttpClient.get(`${url}`);

      return data;
    } catch (e) {
      return null;
    }
  }
}

export default new CatalogService();
