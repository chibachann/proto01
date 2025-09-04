import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./Navigation.module.css"
import * as typography from "../atoms/Typography.module.css"
import Button from "../atoms/Button"

const Navigation = ({ isOpen, onLinkClick }) => {
  const navItems = [
    { to: "/", label: "ホーム" },
    { to: "/about", label: "会社概要" },
    { to: "/services", label: "サービス" },
    { to: "/contact", label: "お問い合わせ" },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav>
        <ul className={styles.nav}>
          {navItems.map((item) => (
            <li key={item.to} className={styles.navItem}>
              <Link 
                to={item.to} 
                className={`${styles.navLink} ${typography.linkLight}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className={`${styles.mobileNav} ${isOpen ? styles.open : ''}`}>
        <ul className={styles.mobileNavList}>
          {navItems.map((item) => (
            <li key={`mobile-${item.to}`} className={styles.mobileNavItem}>
              <Link 
                to={item.to} 
                className={styles.mobileNavLink}
                onClick={onLinkClick}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        
        <Button 
          to="/contact" 
          variant="secondary"
          size="large"
          onClick={onLinkClick}
        >
          お見積り依頼
        </Button>
      </nav>
    </>
  )
}

export default Navigation
