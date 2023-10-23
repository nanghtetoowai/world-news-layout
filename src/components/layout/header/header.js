import React from "react";
import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.grid}>
      <div style={{ color: "red" }} className={styles.logo}>
        logo
      </div>
      <div className={styles.routes}>
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/">
          Discovery
        </Link>
        <Link className={styles.link} href="/">
          Photos
        </Link>
        <Link className={styles.link} href="/">
          Contact
        </Link>
      </div>
    </div>
  );
}
