import * as React from "react"
import * as styles from "./ImagePlaceholder.module.css"

const ImagePlaceholder = ({ 
  backgroundColor = "#f0f4f8",
  text = "Image Area",
  alt = "Placeholder image",
  className = "",
  imageSrc = null
}) => {
  if (imageSrc) {
    return (
      <div className={`${styles.imagePlaceholder} ${className}`}>
        <img 
          src={imageSrc}
          alt={alt}
          className={styles.heroImage}
        />
      </div>
    )
  }

  return (
    <div 
      className={`${styles.imagePlaceholder} ${className}`}
      style={{ backgroundColor }}
      role="img"
      aria-label={alt}
    >
      <div className={styles.placeholderText}>
        {text}
      </div>
    </div>
  )
}

export default ImagePlaceholder
