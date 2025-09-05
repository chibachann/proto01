import * as React from "react"
import * as styles from "./HeroDescription.module.css"

const HeroDescription = ({ 
  children, 
  isVisible = false, 
  className = "" 
}) => {
  return (
    <p className={`${styles.heroDescription} ${isVisible ? styles.heroDescriptionVisible : ''} ${className}`}>
      {children}
    </p>
  )
}

export default HeroDescription
