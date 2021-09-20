import { createContext } from "react";

import CatalogService from "infra/services/catalog";
import * as I from "./types";
import { useQuery } from "react-query";
export const CatalogContext = createContext<I.CatalogContext>(
  {} as I.CatalogContext
);

export function CatalogProvider({ children }: I.Catalog) {
  const { data } = useQuery<I.Catalog | unknown>(
    "catalog",
    CatalogService.loadCatalog
  );

  return (
    <>
      <CatalogContext.Provider value={{ catalog: data }}>
        {children}
      </CatalogContext.Provider>
    </>
  );
}
