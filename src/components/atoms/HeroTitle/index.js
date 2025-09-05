import * as React from "react"
import * as styles from "./HeroTitle.module.css"

const HeroTitle = ({ 
  children, 
  isVisible = false, 
  className = "" 
}) => {
  return (
    <h1 className={`${styles.heroTitle} ${isVisible ? styles.heroTitleVisible : ''} ${className}`}>
      {children}
    </h1>
  )
}

export default HeroTitle
