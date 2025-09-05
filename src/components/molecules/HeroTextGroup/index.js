import * as React from "react"
import HeroTitle from "../../atoms/HeroTitle"
import HeroSubtitle from "../../atoms/HeroSubtitle"
import HeroDescription from "../../atoms/HeroDescription"
import * as styles from "./HeroTextGroup.module.css"

const HeroTextGroup = ({ 
  title,
  subtitle,
  description,
  ctaButton = null,
  isVisible = false,
  className = ""
}) => {
  return (
    <div className={`${styles.heroTextGroup} ${className}`}>
      <HeroTitle isVisible={isVisible}>
        {title}
      </HeroTitle>
      <HeroSubtitle isVisible={isVisible}>
        {subtitle}
      </HeroSubtitle>
      <HeroDescription isVisible={isVisible}>
        {description}
      </HeroDescription>
      {ctaButton && (
        <div className={`${styles.ctaWrapper} ${isVisible ? styles.ctaVisible : ''}`}>
          {ctaButton}
        </div>
      )}
    </div>
  )
}

export default HeroTextGroup
