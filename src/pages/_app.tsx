import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from 'styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <meta name="description" content="React Avançado - Boilerplate" />
        <link rel="shorcut icon" href="https://github.com/flamarionfp.png" />
        <link rel="apple-touch-icon" href="https://github.com/flamarionfp.png" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}
