import React, { useState } from 'react';
import _ from 'lodash';
import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import { Cronos } from "@thirdweb-dev/chains";
import Head from "next/head";


const backgroundImageUrl = "https://liquor-token-cronos.com/____impro/1/onewebmedia/lionsstatic.gif?etag=W%2F%223e056b-65088ea0%22&sourceContentType=image%2Fgif&ignoreAspectRatio&resize=373%2B373";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        background: `url(${backgroundImageUrl}) no-repeat fixed center center`,
        backgroundSize: "cover",
      },
    },
  },
});

const activeChain = Cronos;



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={{
        chainId: 25,
        rpc: ["https://mainnet.cronoslabs.com/v1/55e37d8975113ae7a44603ef8ce460aa"],
        nativeCurrency: {
          decimals: 18,
          name: "Cronos",
          symbol: "CRO",
        },
        shortName: "CRO",
        slug: "Cronos",
        testnet: false,
        chain: "Cronos Mainnet",
        name: "Cronos Mainnet",
      }}
    >
      <Box as="header" textAlign="center" py="4" bg="white">
        <Head>
         <title>Liquor Token Cronos</title>
        </Head>
      </Box>
      <ChakraProvider theme={theme}>
        
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;