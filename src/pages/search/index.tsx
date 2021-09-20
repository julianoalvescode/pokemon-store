import { useRouter } from "next/router";
import Head from "next/head";
import { ProductItem } from "components/ProductItem";
import { GetServerSideProps } from "next";
import { SimpleGrid, useBreakpointValue } from "@chakra-ui/react";

import { SearchDesktopVersion } from "./Desktop";
import { SearchMobileVersion } from "./Mobile";

export default function Search() {
  const { query } = useRouter();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Head>
        <title>Pokemon {query.name} | Pokemon Store</title>
      </Head>
      {isWideVersion ? (
        <>
          <SearchDesktopVersion />
        </>
      ) : (
        <>
          <SearchMobileVersion />
        </>
      )}
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
