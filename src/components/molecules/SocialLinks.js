import * as React from "react"
import SocialLink from "../atoms/SocialLink"
import * as styles from "./SocialLinks.module.css"

const SocialLinks = ({ className = "" }) => {
  const socialData = [
    { href: "https://twitter.com", label: "X", ariaLabel: "Twitter" },
    { href: "https://facebook.com", label: "FB", ariaLabel: "Facebook" },
    { href: "https://linkedin.com", label: "IN", ariaLabel: "LinkedIn" },
    { href: "https://instagram.com", label: "IG", ariaLabel: "Instagram" }
  ]

  return (
    <ul className={`${styles.socialLinks} ${className}`}>
      {socialData.map((social, index) => (
        <li key={index}>
          <SocialLink 
            href={social.href} 
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
