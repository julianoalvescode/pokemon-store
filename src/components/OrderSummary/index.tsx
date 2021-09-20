import {
  Heading,
  Text,
  List,
  ListItem,
  Container,
  Divider,
  Stack,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

import { Button } from "components/Button";
import { useCart } from "hooks/useCart";
import { useState } from "react";

import { currencyFormat } from "utils/currencyFormat";

import * as I from "./types";

export function OrderSummary({ ...rest }: I.OrderSummaryProps) {
  const { cart, getTotalCart, finishCart } = useCart();
  const [isModalOpen, setModal] = useState(false);

  const handleFinishCart = () => {
    finishCart();
    setModal(false);
  };

  return (
    <>
      <Container {...rest}>
        {cart.length > 0 ? (
          <>
            <Stack>
              <Heading fontSize="22px" textTransform="lowercase">
                Resumo do pedido
              </Heading>
              <List display="flex" flexDirection="column" gridGap="2">
                {cart?.map((item, index) => (
                  <>
                    <ListItem
                      key={item.name}
                      display="flex"
                      justifyContent="space-between"
                    >
                      <Text>{item.name}</Text>
                      <Text>{currencyFormat(item.price)}</Text>
                    </ListItem>
                    <Divider />
                  </>
                ))}
              </List>
              <List marginTop="3">
                <ListItem display="flex" justifyContent="space-between">
                  <Text>Total</Text>
                  <Text>{currencyFormat(getTotalCart())}</Text>
                </ListItem>
              </List>
            </Stack>
            <Button
              onClick={() => setModal(true)}
              marginTop="1.8rem"
              type="button"
            >
              Continuar
            </Button>
          </>
        ) : (
          <>
            <Text fontSize="16px">Sua cesta está vazia</Text>
          </>
        )}
      </Container>
      <Modal isCentered isOpen={isModalOpen} onClose={() => setModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirma</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Tem certeza?</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => setModal(false)}>
              Cancelar
            </Button>
            <Button onClick={handleFinishCart} variant="ghost">
              Sim
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
