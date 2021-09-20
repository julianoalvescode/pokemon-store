import { useRouter } from "next/router";
import Head from "next/head";
import { ProductItem } from "components/ProductItem";
import { GetServerSideProps } from "next";
import { SimpleGrid } from "@chakra-ui/react";

export function SearchDesktopVersion() {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>Pokemon {query.name} | Pokemon Store</title>
      </Head>
      <SimpleGrid gridTemplateColumns="repeat(auto-fit, minmax(240px, 280px))">
        <ProductItem url={`/pokemon/${query.name}`} />
      </SimpleGrid>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx;

  return {
    props: {
      query: query.name || null,
    },
  };
};
