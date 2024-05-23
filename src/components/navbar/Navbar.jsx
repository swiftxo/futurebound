import React from 'react'
import styles from "./navbar.module.css"
import Link from 'next/link'
import Image from 'next/image'
import AuthLinks from '../authLinks/AuthLinks'
import ToggleTheme from '../toggleTheme/ToggleTheme'
const Navbar = () => {
  return (
    <div className={styles.container}> 
      <div className = {styles.social}>
        <Image src = "/Youtube.svg" width = "30" height = "30" alt = "youtube"/>
        <Image src ="/LinkedIn.svg" width = "30" height = "30" alt = "linkedin"/>
        <Image src = "/Instagram.svg" width = "30" height = "30" alt = "instagram"/>
      </div>
      <div className = {styles.logo}>Futurebound</div>
      <div className = {styles.links}>
        <ToggleTheme/>  
        <Link href ="#" className={styles.link}>Home</Link>
        <Link href ="#" className={styles.link}>Contact</Link>
        <Link href ="#" className={styles.link}> About</Link>
        <AuthLinks/>

      </div>
    </div>
  )
}

export default Navbar;