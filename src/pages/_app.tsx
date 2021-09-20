import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";

import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

import { CatalogProvider } from "contexts/catalog";
import { CartProvider } from "contexts/cart";

import { theme } from "styles/theme";
const queryClient = new QueryClient();

import { Layout } from "templates/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <CatalogProvider>
            <CartProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
              <ReactQueryDevtools initialIsOpen={false} />
            </CartProvider>
          </CatalogProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
}
export default MyApp;
