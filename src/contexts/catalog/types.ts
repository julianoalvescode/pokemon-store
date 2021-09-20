import { CatalogAll } from "infra/services/catalog/types";
import React from "react";

export type Catalog = {
  children: React.ReactNode;
};

export type CatalogContext = {
  catalog: CatalogAll;
};
