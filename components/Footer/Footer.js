import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftNavWrap}>
        <div className={styles.socialWrap}>
          <Link href="/">
            <a>Logo</a>
          </Link>
          <div>social icons</div>
        </div>
        <nav className={styles.navigation}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/stories">
            <a>Stories</a>
          </Link>
          <Link href="/features">
            <a>Features</a>
          </Link>
          <Link href="/pricing">
            <a>Pricing</a>
          </Link>
        </nav>
      </div>
      <div className={styles.rightNavWrap}>
        <Link href="/">
          <a>Get an Invite</a>
        </Link>
        <p className={styles.copyright}>Copyright 2019. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
