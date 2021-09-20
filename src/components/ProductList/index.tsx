import { SimpleGrid } from "@chakra-ui/react";

import { ProductItem } from "components/ProductItem";
import { useCatalog } from "hooks/useCatalog";

export function ProductList() {
  const { catalog } = useCatalog();

  return (
    <>
      <SimpleGrid
        alignItems="center"
        justifyContent="center"
        gridTemplateColumns="repeat(auto-fit, minmax(200px, 280px))"
        spacing="30"
      >
        {catalog?.pokemon?.map((item, index) => (
          <ProductItem {...item.pokemon} key={index} />
        ))}
      </SimpleGrid>
    </>
  );
}
