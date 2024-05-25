import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'
const Featured = () => {
  return (
    <div>
      <h1 className={styles.title}><b>The future uncharted</b>, still far from the edge</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt ="" fill/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}> Welcome to the blog</h1>
          <p className={styles.postDesc}>
            Welcome to futurebound! This blog was done as both a personal and professional project. 
            I've always been the type to buy and not borrow, so why should i host this on another platform?
            I like being able to own my rights and have full control over my content. 
            I hope you enjoy the content and feel free to reach out to me if you have any questions or comments.
          </p>
          <button className={styles.button}>Read more</button>
        </div>

      </div>

    </div>
  )
}

export default Featured