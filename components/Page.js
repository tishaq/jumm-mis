import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../src/aws-exports";
Amplify.configure(awsconfig);
class Page extends Component {
  render() {
    return (
      <>
        <Meta />
        <main className="content">
          <Header />

          {this.props.children}
          <Footer />
        </main>
      </>
    );
  }
}
export default Page;
