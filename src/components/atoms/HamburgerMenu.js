import * as React from "react"
import * as styles from "./HamburgerMenu.module.css"

const HamburgerMenu = ({ isOpen, onClick }) => {
  return (
    <button 
      className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
      onClick={onClick}
      aria-label="メニューを開く"
    >
      <span className={styles.hamburgerLine}></span>
      <span className={styles.hamburgerLine}></span>
      <span className={styles.hamburgerLine}></span>
    </button>
  )
}

export default HamburgerMenu
