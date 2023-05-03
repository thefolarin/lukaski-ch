import { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta name='description' content='WC Live app' />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link
          href='https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <ColorModeScript initialColorMode='dark' />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
