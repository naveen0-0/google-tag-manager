import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <NavBar />
      <Component {...pageProps} />
      {/* <GoogleTagManager gtmId="GTM-MH47Z98G" /> */}

      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-98BGRYZ38C`}
      />

      <Script id="" strategy="lazyOnload">
        {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-98BGRYZ38C', {
                    page_path: window.location.pathname,
                    });
                    `}
      </Script>
    </ChakraProvider>
  );
}
