import * as React from "react"
import * as styles from "./TestimonialCard.module.css"

const TestimonialCard = ({ 
  quote = "This is a testimonial quote.",
  author = "Customer Name",
  position = "Position",
  company = "Company Name",
  avatar = "/Hero01.jpg", // ここには実際の顧客の写真やアバターを配置予定
  rating = 5,
  isVisible = false,
  delay = 0,
  className = ""
}) => {
  return (
    <div 
      className={`${styles.testimonialCard} ${isVisible ? styles.testimonialCardVisible : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={styles.quoteIcon}>
        <span>"</span>
      </div>
      
      <blockquote className={styles.quote}>
        {quote}
      </blockquote>
      
      <div className={styles.rating}>
        {[...Array(5)].map((_, index) => (
          <span 
            key={index}
            className={`${styles.star} ${index < rating ? styles.starFilled : ''}`}
          >
            ★
          </span>
        ))}
      </div>
      
      <div className={styles.authorInfo}>
        <div className={styles.avatarWrapper}>
          <img 
            src={avatar}
            alt={`${author}の写真`}
            className={styles.avatar}
          />
        </div>
        <div className={styles.authorDetails}>
          <div className={styles.authorName}>{author}</div>
          <div className={styles.authorMeta}>
            {position} at {company}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
