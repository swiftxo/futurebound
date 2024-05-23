import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.projects}`}
      >
        Projects
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.MMA}`}>
        MMA
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.school}`}>
        School
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.thoughts}`}>
        Thoughts
      </Link>
    </div>
  );
};

export default MenuCategories;