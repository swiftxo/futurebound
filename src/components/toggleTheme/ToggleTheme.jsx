"use client";

import Image from "next/image";
import styles from "./toggleTheme.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ToggleTheme = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { outline: "1px solid white" }
          : { outline: "1px solid #0f172a" }
      }
    >
      <Image src="/moon.svg" alt="" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "white" }
            : { right: 1, background: "#0f172a" }
        }
      ></div>
     <Image
        src="/sun.svg"
        alt="sun"
        width={14}
        height={14}
        className={theme === "dark" ? styles.sunDark : ""}
      />
    </div>
  );
};

export default ToggleTheme;
