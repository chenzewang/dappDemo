import type { AppProps } from "next/app";

import "../index.css";

const MyApp = function ({ Component, pageProps }: AppProps) {
  console.log("🚀 ~ file: _app.tsx ~ line 8 ~ MyApp ~ pageProps", pageProps)
  return <Component {...pageProps} />;
};

export default MyApp;
