import {
  Stack,
  Container,
  InputGroup,
  InputRightElement,
  Input,
  Flex,
  IconButton,
  Heading,
} from "@chakra-ui/react";

import { AiOutlineSearch } from "react-icons/ai";
import { MdShoppingCart } from "react-icons/md";
import Link from "next/link";

import { Cart } from "components/Cart";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { useRouter } from "next/router";

import { useBreakpointValue } from "@chakra-ui/react";

import { HeaderDesktopVersion } from "./Desktop";
import { HeaderMobileVersion } from "./Mobile";

export function Header() {
  const [isCartOpen, setCartOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const handleSearch = (data: { search: string }) => {
    router.push(`/search?name=${data.search.toLowerCase()}`, undefined, {
      scroll: false,
    });
  };

  return (
    <>
      {isWideVersion ? (
        <>
          <HeaderDesktopVersion />
        </>
      ) : (
        <>
          <HeaderMobileVersion />
        </>
      )}
    </>
  );
}
