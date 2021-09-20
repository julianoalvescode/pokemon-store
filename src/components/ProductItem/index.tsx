import { useEffect, useState } from "react";
import * as I from "./types";

import CatalogService from "infra/services/catalog";
import { Container, Heading, Stack, Image, Skeleton } from "@chakra-ui/react";
import { Button } from "components/Button";

import { useCart } from "hooks/useCart";
import { PokemonUnit } from "infra/services/catalog/types";

export const ProductItem = ({ name, url }: I.ProductItemProps) => {
  const [data, setData] = useState<PokemonUnit | undefined>({} as PokemonUnit);
  const [loading, setLoading] = useState(false);

  const { addItemCart } = useCart();

  useEffect(() => {
    async function getData() {
      try {
        const data = await CatalogService.loadDataPokemon(url);

        setData(data);
        setLoading(true);
      } catch (e) {
        setData(undefined);
        setLoading(true);
      }
    }

    getData();
  }, [url]);

  const handleAddCart = () => {
    addItemCart({ name: data?.name, price: 100 });
  };

  return (
    <>
      {loading ? (
        <>
          {data !== null && (
            <>
              <Container
                transition="all 0.2s ease-in-out"
                _hover={{ filter: "brightness(0.7)" }}
                cursor="pointer"
                maxWidth="100%"
              >
                <Stack
                  borderTopRadius="10"
                  backgroundColor="brand.500"
                  padding="3"
                >
                  <Image src={data?.sprites?.front_default} alt={name} />
                  <Heading
                    textAlign="center"
                    fontSize="16px"
                    textTransform="capitalize"
                  >
                    {data?.name}
                  </Heading>
                </Stack>
                <Button
                  borderTopRadius="0"
                  borderBottomRadius="114"
                  onClick={handleAddCart}
                  type="button"
                >
                  Adicionar
                </Button>
              </Container>
            </>
          )}
        </>
      ) : (
        <>
          <Stack>
            <Skeleton isLoaded={loading} height="70px" />
            <Skeleton isLoaded={loading} height="30px" />
          </Stack>
        </>
      )}
    </>
  );
};
