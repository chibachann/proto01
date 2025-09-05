import * as React from "react"
import Header from "../organisms/Header"
import Footer from "../organisms/Footer"
import { siteConfig } from "../../config/siteConfig"
import * as styles from "./Layout.module.css"

const Layout = ({ 
  children, 
  pageTitle = "", 
  pageDescription = "",
  navigationConfig = siteConfig.mainNavigation,
  headerConfig = {},
  footerConfig = {},
  className = ""
}) => {
  const fullTitle = pageTitle 
    ? `${pageTitle} | ${siteConfig.siteName}`
    : siteConfig.siteName

  return (
    <div className={`${styles.layout} ${className}`}>
      
      <Header 
        navigation={navigationConfig}
        ctaButton={siteConfig.ctaButton}
        siteName={siteConfig.siteName}
        {...headerConfig}
      />
      
      <main className={styles.main}>
        {children}
      </main>
      
      <Footer 
        footerNavigation={siteConfig.footerNavigation}
        contactInfo={siteConfig.contactInfo}
        socialMedia={siteConfig.socialMedia}
        siteName={siteConfig.siteName}
        {...footerConfig}
      />
    </div>
  )
}

export default Layout
