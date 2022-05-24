import React from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
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
  );
};

export default Navigation;
