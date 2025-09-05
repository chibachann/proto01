import * as React from "react"
import * as styles from "./HeroSubtitle.module.css"

const HeroSubtitle = ({ 
  children, 
  isVisible = false, 
  className = "" 
}) => {
  return (
    <h2 className={`${styles.heroSubtitle} ${isVisible ? styles.heroSubtitleVisible : ''} ${className}`}>
      {children}
    </h2>
  )
}

export default HeroSubtitle
