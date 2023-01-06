import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Head from "next/head";
import { Header } from "../layouts/Header";
import { ContextProvider } from "../components/ContextProvider";
import { ThemeContextProvider } from "../context/Theme";
import { useTailwind } from "../hooks/useTailwind";
import { Main } from "../layouts/Main";
import { LanguageContextProvider } from "../context/Language";
import { SplashScreen } from "../layouts/SplashScreen";
import { LoadingContextProvider } from "../context/Loading";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { WindowSizeContextProvider } from "../context/WindowSize";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    useTailwind();
  }, []);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_AUTHOR_NAME}</title>
      </Head>
      <ContextProvider
        providers={[
          ThemeContextProvider,
          LanguageContextProvider,
          LoadingContextProvider,
          WindowSizeContextProvider,
        ]}
      >
        <Header />
        <SplashScreen />
        <Main>
          <Component {...pageProps} />
        </Main>
      </ContextProvider>
    </>
  );
}

export default App;
