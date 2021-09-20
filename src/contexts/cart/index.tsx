import { createContext, useState } from "react";
import * as I from "./types";
import { useToast } from "@chakra-ui/react";

export const CartContext = createContext<I.CartContextProps>(
  {} as I.CartContextProps
);

export function CartProvider({ children }: I.CartProps) {
  const [cart, setCart] = useState<I.CartItem[]>([]);
  const toast = useToast();

  function addItemCart(item: I.CartItem): void {
    if (item.name) {
      setCart((oldState) => [...oldState, item]);
      toast({
        title: "Produto adicionado.",
        description: `Verifique ${item.name} no carrinho.`,
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: "Aconteceu algo.",
        description: `Tente novamento mais tarde.`,
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  }

  function getTotalCart(): number {
    const total = cart.reduce((acc, item) => {
      return (acc += item.price);
    }, 0);

    return total;
  }

  function finishCart(): void {
    setCart([]);
  }

  return (
    <>
      <CartContext.Provider
        value={{ cart, addItemCart, getTotalCart, finishCart }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}
