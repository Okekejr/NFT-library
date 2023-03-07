import { extendTheme, ThemeConfig } from "@chakra-ui/react";

export const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  sizes: {
    container: {
      xl: "1448px",
    },
  },
});

export default theme;
