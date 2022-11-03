import type { AppProps } from "next/app";
import { Analytics } from '@vercel/analytics/react';

import "../index.css";

const MyApp = function ({ Component, pageProps }: AppProps) {
  return <>
  <Analytics/>
   <Component {...pageProps} />;
  </>
};

export default MyApp;
