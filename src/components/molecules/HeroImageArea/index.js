import * as React from "react"
import ImagePlaceholder from "../../atoms/ImagePlaceholder"
import * as styles from "./HeroImageArea.module.css"

const HeroImageArea = ({ 
  backgroundColor = "#f0f4f8",
  imageAlt = "Hero image",
  placeholderText = "Image Area",
  isVisible = false,
  className = "",
  imageSrc = null
}) => {
  return (
    <div className={`${styles.heroImageArea} ${isVisible ? styles.heroImageAreaVisible : ''} ${className}`}>
      <ImagePlaceholder 
        backgroundColor={backgroundColor}
        alt={imageAlt}
        text={placeholderText}
        imageSrc={imageSrc}
      />
    </div>
  )
}

export default HeroImageArea
