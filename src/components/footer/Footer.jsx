"use client"
import React, { useContext } from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { ThemeContext } from '@/context/ThemeContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src={theme === "light" ? "/FUTUREBOUND_LIGHT_TRANSPARENT.png" : "/FUTUREBOUND_DARK_TRANSPARENT.png"}
            className="logo-light"
            alt="Futurebound"
            width={100}
            height={100}
          />
          <h1 className={styles.logoText}>Futurebound</h1>
        </div>
        <p className={styles.desc}>
          There are no bounds to our future, except those we place on ourselves.
        </p>
        <div className={styles.icons}>
        <Image
          src={theme === "light" ? "/insta_light.svg" : "/insta_dark.svg"}
          width="90"
          height="90"
          alt="instagram"
        />
        <Image
          src={theme === "light" ? "/git_light.svg" : "/git_dark.svg"}
          width="90"
          height="90"
          alt="github"
        />
        <Image
          src={theme === "light" ? "/linked_light.svg" : "/linked_dark.svg"}
          width="90"
          height="90"
          alt="linkedin"
        />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
