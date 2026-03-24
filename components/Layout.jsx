import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Rohit Singh | Portfolio</title>
        <meta
          name="description"
          content="Rohit Singh is a Full-Stack Developer skilled in React, Node.js, Flutter, and AI/ML."
        />
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, js, flutter, python, ai, ml, portfolio, framer-motion, full-stack, android"
        />
        <meta name="author" content="Rohit Singh" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
