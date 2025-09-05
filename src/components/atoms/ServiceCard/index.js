import * as React from "react"
import * as styles from "./ServiceCard.module.css"

const ServiceCard = ({ 
  icon = "🔧",
  title = "Service Title",
  description = "Service description goes here.",
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
      className={`${styles.serviceCard} ${isVisible ? styles.serviceCardVisible : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={styles.iconWrapper}>
        {renderIcon()}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default ServiceCard
