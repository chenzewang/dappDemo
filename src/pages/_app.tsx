import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";

import "../index.css";

const MyApp = function ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics></Analytics>
      <Component {...pageProps} />;
    </>
  );
};

export default MyApp;
