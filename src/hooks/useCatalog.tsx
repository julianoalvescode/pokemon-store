import { useContext } from "react";

import { CatalogContext } from "contexts/catalog";

export function useCatalog() {
  const context = useContext(CatalogContext);

  return context;
}
