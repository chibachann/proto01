import * as React from "react"
import SectionTitle from "../atoms/SectionTitle"
import FooterLink from "../atoms/FooterLink"
import * as styles from "./FooterSection.module.css"

const FooterSection = ({ title, links, className = "" }) => {
  return (
    <div className={`${styles.footerSection} ${className}`}>
      <SectionTitle>{title}</SectionTitle>
      <ul className={styles.linkList}>
        {links.map((link, index) => (
          <li key={index} className={styles.linkItem}>
            <FooterLink to={link.path}>
              {link.label}
            </FooterLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterSection
