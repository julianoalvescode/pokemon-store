import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  colors: {
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2",
    },
    brand: {
      "900": "rgb(255, 167, 86)",
      "800": "rgb(255, 167, 86, 0.8)",
      "500": "rgb(255, 167, 86, 0.5)",
    },
    grey: "rgba(247, 249, 252, 1)",
    textColor: "rgba(0, 0, 0, 1)",
    textGray: "rgba(131, 131, 131, 1)",
    mainBg: "#06092B",
    lightBg: "#F2F2F2",
    white: "#FAFAFA",
    black: "#030517",
    lightGray: "#EAEAEA",
    darkGray: "#2E2F42",
  },
  fonts: {
    heading: "Helvetica, Arial, sans-serif",
    body: "Helvetica, Arial, sans-serif",
    sizes: {
      hugesmall: "0.75rem",
      xxsmall: "0.9rem",
      xsmall: "1rem",
      small: "1.4rem",
      medium: "1.5rem",
      large: "1.8rem",
      xlarge: "2.0rem",
      xxlarge: "2.8rem",
      huge: "5.2rem",
    },
  },
  spacings: {
    xxsmall: "0.8rem",
    xsmall: "1.6rem",
    small: "2.4rem",
    medium: "3.2rem",
    large: "4.0rem",
    xlarge: "4.8rem",
    xxlarge: "5.6rem",
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "gray.60",
      },
    },
  },
});
