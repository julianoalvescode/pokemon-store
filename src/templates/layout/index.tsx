import { Container } from "@chakra-ui/react";

import * as I from "./types";

import { Header } from "components/Header";

export function Layout({ children }: I.LayoutProps) {
  return (
    <>
      <Header />
      <Container paddingY="20" maxWidth="container.xl">
        {children}
      </Container>
    </>
  );
}
