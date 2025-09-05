import * as React from "react"
import FooterSection from "../../molecules/FooterSection"
import ContactInfo from "../../molecules/ContactInfo"
import SocialLinks from "../../molecules/SocialLinks"
import * as styles from "./Footer.module.css"

const Footer = ({ 
  footerNavigation = {}, 
  contactInfo = {}, 
  socialMedia = [], 
  siteName = "Your Company",
  className = ""
}) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`${styles.footer} ${className}`}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {footerNavigation.companyInfo && (
            <FooterSection 
              title={footerNavigation.companyInfo.title} 
              links={footerNavigation.companyInfo.links} 
            />
          )}
          {footerNavigation.services && (
            <FooterSection 
              title={footerNavigation.services.title} 
              links={footerNavigation.services.links} 
            />
          )}
          {footerNavigation.support && (
            <FooterSection 
              title={footerNavigation.support.title} 
              links={footerNavigation.support.links} 
            />
          )}
          <ContactInfo contactData={contactInfo} />
        </div>
        
        <hr className={styles.divider} />
        
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            &copy; {currentYear} {siteName}. All rights reserved.
          </div>
          <SocialLinks socialData={socialMedia} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
