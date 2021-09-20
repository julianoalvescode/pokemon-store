import { Button as ButtonCustom } from "@chakra-ui/react";

import { ButtonProps } from "./types";

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <>
      <ButtonCustom
        _hover={{ backgroundColor: "brand.800" }}
        backgroundColor="brand.900"
        {...rest}
        width="100%"
        textTransform="lowercase"
        color="white"
      >
        {children}
      </ButtonCustom>
    </>
  );
}
