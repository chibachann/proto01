import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./FooterLink.module.css"

const FooterLink = ({ to, children, className = "" }) => {
  return (
    <Link to={to} className={`${styles.footerLink} ${className}`}>
      {children}
    </Link>
  )
}

export default FooterLink
