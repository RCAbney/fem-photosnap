import React from "react";
import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Photosnap</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
