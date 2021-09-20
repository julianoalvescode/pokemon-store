import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";

import { OrderSummary } from "components/OrderSummary";

import * as I from "./types";

export function Cart({ isOpen, onClose }: I.CartProps) {
  return (
    <>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Carrinho</DrawerHeader>
          <DrawerBody>
            <OrderSummary marginTop="4" />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
