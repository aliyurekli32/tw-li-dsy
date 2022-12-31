import type { AppProps } from "next/app";
import Head from 'next/head'
import { styled } from '@linaria/react'
import { css } from '@linaria/core'
import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;