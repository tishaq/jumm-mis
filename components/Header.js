import React, { Component } from "react";
import Link from "next/link";
import NProgress from "nprogress";
import Router from "next/router";
Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};
class Header extends Component {
  render() {
    return (
      <div className="title">
        <Link href="/">
          <a className="logo">AJISAQ Ticketing Platform JUMM MIS</a>
        </Link>
        <nav>
          <ul className="nav__items">
            <li>
              <Link href="/">
                <a className="active">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/facility" prefetch>
                <a>Facility</a>
              </Link>
            </li>
            <li>
              <Link href="/gate">
                <a>Gate</a>
              </Link>
            </li>
            <li>
              <Link href="/remit">
                <a>Remit</a>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mobile__nav">
          <input id="toggle" type="checkbox" />
          <label className="hamburger" htmlFor="toggle">
            <div className="hamburger__top"></div>
            <div className="hamburger__meat"></div>
            <div className="hamburger__bottom"></div>
          </label>
          <div className="hamburger__nav">
            <div className="hamburger__nav--wrapper">
              <nav className="hamburger__nav--items">
                <Link href="/">
                  <a className="active">Home</a>
                </Link>
                <Link href="/facility">
                  <a>Facility</a>
                </Link>
                <Link href="/gate">
                  <a>Gate</a>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
