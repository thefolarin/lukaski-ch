import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>WC Wallet</title>
    </Head>
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
    </>
  );
}
