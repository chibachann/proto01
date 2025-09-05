import * as React from "react"
import * as styles from "./SocialLink.module.css"

const SocialLink = ({ href, children, ariaLabel, className = "" }) => {
  return (
    <a 
      href={href}
      className={`${styles.socialLink} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  )
}

export default SocialLink
