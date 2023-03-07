import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Layout } from "@/components/layout";
import theme from "@/theme";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
