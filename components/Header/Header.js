import React from "react";
import Link from "next/link";
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Button";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>Logo</a>
      </Link>
      <Navigation />
      <Button text="Get an Invite" />
    </header>
  );
};

export default Header;
