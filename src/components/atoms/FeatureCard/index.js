import * as React from "react"
import * as styles from "./FeatureCard.module.css"

const FeatureCard = ({ 
  icon = "⭐",
  title = "Feature Title",
  description = "Feature description goes here.",
  isVisible = false,
  delay = 0,
  iconType = "text", // "text", "svg", "image"
  className = ""
}) => {
  const renderIcon = () => {
    if (iconType === "svg") {
      return <div className={styles.svgIcon} dangerouslySetInnerHTML={{ __html: icon }} />
    } else if (iconType === "image") {
      return <img src={icon} alt="" className={styles.iconImage} />
    } else {
      return <span className={styles.icon}>{icon}</span>
    }
  }

  return (
    <div 
      className={`${styles.featureCard} ${isVisible ? styles.featureCardVisible : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={styles.iconContainer}>
        {renderIcon()}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

export default FeatureCard
