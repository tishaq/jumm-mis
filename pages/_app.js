import App, { Container } from "next/app";
import Page from "../components/Page";

import "./style.css";
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    );
  }
}
