import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Head from 'next/head'

const Navbar = () => {

  return (
    <div className={styles.navbar}>
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      </Head>
      <div className={styles.navLogo}>
        <h1>📰NewsGround</h1>
      </div>
      <div className={styles.navList}>
        <Link href="/">Home</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/join">Join</Link>
      </div>
    </div>
  );
};

export default Navbar;
