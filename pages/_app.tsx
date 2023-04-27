import "@/styles/globals.css";
import "@/styles/variables.css";

import { Toaster } from "sonner";

import Layout from "@/components/Layout";

import type { AppProps } from 'next/app';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <>
        <Toaster position="bottom-center" />
        <Component {...pageProps} />
      </>
    </Layout>
  );
}
