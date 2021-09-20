/* eslint-disable */
import {
  Stack,
  Container,
  InputGroup,
  InputRightElement,
  Input,
  Flex,
  IconButton,
  Text,
  Heading,
} from "@chakra-ui/react";

import { AiOutlineSearch } from "react-icons/ai";
import { MdShoppingCart } from "react-icons/md";
import Link from "next/link";

import { Cart } from "components/Cart";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { useRouter } from "next/router";

export function HeaderDesktopVersion() {
  const [isCartOpen, setCartOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const handleSearch = (data: { search: string }) => {
    router.push(`/search?name=${data.search.toLowerCase()}`, undefined, {
      scroll: false,
    });
  };

  return (
    <>
      <Stack paddingY="5" backgroundColor="brand.900">
        <Container maxW="container.xl">
          <Flex justifyContent="space-between">
            <Flex alignItems="center" gridGap="5">
              <Link href="/" shallow={false}>
                <Heading color="white">Pokemon Electric</Heading>
              </Link>
              <form onSubmit={handleSubmit(handleSearch)}>
                <InputGroup maxW="400px">
                  <InputRightElement
                    pointerEvents="none"
                    type="submit"
                    children={<AiOutlineSearch color="gray.300" />}
                  />
                  <Input
                    {...register("search", { required: true })}
                    backgroundColor="#eee"
                    type="text"
                    placeholder="Pesquisar pokemon"
                  />
                </InputGroup>
              </form>
            </Flex>
            <IconButton
              onClick={() => setCartOpen(true)}
              _hover={{ backgroundColor: "transparent" }}
              background="transparent"
              colorScheme="blue"
              aria-label="Search database"
              icon={<MdShoppingCart color="white" size="26" />}
            />
          </Flex>
        </Container>
      </Stack>
      <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
