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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Heading,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

import { Button } from "components/Button";

import { AiOutlineSearch } from "react-icons/ai";
import { MdShoppingCart } from "react-icons/md";
import Link from "next/link";

import { Cart } from "components/Cart";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { useRouter } from "next/router";

export function HeaderMobileVersion() {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isOpenModalInput, setModalInput] = useState(false);
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const handleSearch = (data: { search: string }) => {
    setModalInput(false);
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
                <Heading color="white">Pokemon Fire</Heading>
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Stack>
      <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
      <Stack
        width="100%"
        zIndex="999"
        position="fixed"
        bottom="0"
        height="80px"
        backgroundColor="brand.900"
      >
        <Flex height="100%" alignItems="center" justifyContent="space-around">
          <IconButton
            onClick={() => setModalInput(true)}
            _hover={{ backgroundColor: "transparent" }}
            background="transparent"
            colorScheme="blue"
            aria-label="Search database"
            icon={<AiOutlineSearch size="28" />}
          />

          <IconButton
            onClick={() => setCartOpen(true)}
            _hover={{ backgroundColor: "transparent" }}
            background="transparent"
            colorScheme="blue"
            aria-label="Search database"
            icon={<MdShoppingCart size="26" />}
          />
        </Flex>
      </Stack>
      <Modal
        isCentered
        isOpen={isOpenModalInput}
        onClose={() => setModalInput(false)}
        size="small"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pesquisar</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(handleSearch)}>
            <ModalBody>
              <InputGroup>
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
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => setModalInput(false)}
              >
                Fechar
              </Button>
              <Button type="submit" variant="ghost">
                Continuar
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
