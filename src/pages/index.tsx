import type { NextPage } from "next";

import Head from "next/head";

import { Container } from "@chakra-ui/react";
import { ProductList } from "components/ProductList";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pokemon Store</title>
      </Head>
      <Container maxW="container.xl">
        <ProductList />
      </Container>
    </>
  );
};

export default Home;
