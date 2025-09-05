
import * as React from "react"
import * as styles from "./Header.module.css"
import Logo from "../../atoms/Logo"
import Button from "../../atoms/Button"
import HamburgerMenu from "../../atoms/HamburgerMenu"
import Navigation from "../../molecules/Navigation"

const Header = ({ 
  navigation = [], 
  ctaButton = null, 
  siteName = "Your Company",
  className = ""
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className={`${styles.header} ${className}`}>
        <div className={styles.container}>
          <Logo>{siteName}</Logo>
          
          <Navigation 
            items={navigation}
            isOpen={isMobileMenuOpen} 
            onLinkClick={closeMobileMenu}
          />
          
          {ctaButton && (
            <div className={styles.ctaButton}>
              <Button 
                to={ctaButton.path} 
                variant={ctaButton.variant || "primary"}
              >
                {ctaButton.label}
              </Button>
            </div>
          )}
          
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
