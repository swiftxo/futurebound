"use client"
// components/Navbar.js
import React, { useContext } from 'react';
import styles from "./navbar.module.css";
import Link from 'next/link';
import Image from 'next/image';
import AuthLinks from '../authLinks/AuthLinks';
import ToggleTheme from '../toggleTheme/ToggleTheme';
import { ThemeContext } from '@/context/ThemeContext';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image
          src={theme === "light" ? "/insta_light.svg" : "/insta_dark.svg"}
          width="50"
          height="50"
          alt="instagram"
        />
        <Image
          src={theme === "light" ? "/git_light.svg" : "/git_dark.svg"}
          width="50"
          height="50"
          alt="github"
        />
        <Image
          src={theme === "light" ? "/linked_light.svg" : "/linked_dark.svg"}
          width="50"
          height="50"
          alt="linkedin"
        />
      </div>
      <Link href="/" className={styles.logo}>Futurebound</Link>
      <div className={styles.links}>
        <ToggleTheme />
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
