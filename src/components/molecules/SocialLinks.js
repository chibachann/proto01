import * as React from "react"
import SocialLink from "../atoms/SocialLink"
import * as styles from "./SocialLinks.module.css"

const SocialLinks = ({ socialData = [], className = "" }) => {
  if (!socialData || socialData.length === 0) {
    return null
  }

  return (
    <ul className={`${styles.socialLinks} ${className}`}>
      {socialData.map((social, index) => (
        <li key={index}>
          <SocialLink 
            href={social.url} 
            ariaLabel={social.ariaLabel}
          >
            {social.label}
          </SocialLink>
        </li>
      ))}
    </ul>
  )
}

export default SocialLinks
