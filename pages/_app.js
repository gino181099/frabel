import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
  <>
    <meta charSet="utf-8" />
    <meta name="author" content="Trasnporte Fra-Bel Viajes S.R.L." />
    <Component {...pageProps} />
  </>  
);
}
