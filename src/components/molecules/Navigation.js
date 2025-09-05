import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./Navigation.module.css"
import * as typography from "../atoms/Typography.module.css"
import Button from "../atoms/Button"

const Navigation = ({ items = [], isOpen, onLinkClick, mobileCtaButton = null }) => {
  return (
    <>
      {/* Desktop Navigation */}
      <nav>
        <ul className={styles.nav}>
          {items.map((item) => (
            <li key={item.path} className={styles.navItem}>
              <Link 
                to={item.path} 
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
          {items.map((item) => (
            <li key={`mobile-${item.path}`} className={styles.mobileNavItem}>
              <Link 
                to={item.path} 
                className={styles.mobileNavLink}
                onClick={onLinkClick}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        
        {mobileCtaButton && (
          <Button 
            to={mobileCtaButton.path} 
            variant={mobileCtaButton.variant || "secondary"}
            size="large"
            onClick={onLinkClick}
          >
            {mobileCtaButton.label}
          </Button>
        )}
      </nav>
    </>
  )
}

export default Navigation
