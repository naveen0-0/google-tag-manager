import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { GoogleTagManager } from "@next/third-parties/google";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <NavBar />
      <Component {...pageProps} />
      {/* <GoogleTagManager gtmId="GTM-WQ3LNC5M" /> */}
    </ChakraProvider>
  );
}
