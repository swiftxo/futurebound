import React from 'react'
import styles from "./navbar.module.css"
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className={styles.container}> 
      <div className = {styles.social}>
        <Image src = "/images/Youtube.svg" width = "30" height = "30" alt = "youtube"/>
        <Image src ="/images/LinkedIn.svg" width = "30" height = "30" alt = "linkedin"/>
        <Image src = "/images/Instagram.svg" width = "30" height = "30" alt = "instagram"/>
      </div>
      <div className = {styles.logo}></div>
      <div className = {styles.links}>
        <Link href ="#">Home</Link>
        <Link href ="#">Contact</Link>
        <Link href ="#">About</Link>
        <L

      </div>
    </div>
  )
}

export default Navbar;