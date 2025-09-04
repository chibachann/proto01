
import * as React from "react"
import * as styles from "./Header.module.css"
import Logo from "../atoms/Logo"
import Button from "../atoms/Button"
import HamburgerMenu from "../atoms/HamburgerMenu"
import Navigation from "../molecules/Navigation"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Logo>Your Company</Logo>
          
          <Navigation 
            isOpen={isMobileMenuOpen} 
            onLinkClick={closeMobileMenu}
          />
          
          <div className={styles.ctaButton}>
            <Button to="/contact" variant="primary">
              お見積り依頼
            </Button>
          </div>
          
          <div className={styles.hamburger}>
            <HamburgerMenu 
              isOpen={isMobileMenuOpen} 
              onClick={toggleMobileMenu}
            />
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`${styles.mobileNavOverlay} ${isMobileMenuOpen ? styles.open : ''}`}
        onClick={closeMobileMenu}
      ></div>
    </>
  )
}

export default Header
