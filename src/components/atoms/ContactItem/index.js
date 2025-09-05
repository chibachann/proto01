import * as React from "react"
import * as styles from "./ContactItem.module.css"

const ContactItem = ({ icon, children, className = "" }) => {
  return (
    <div className={`${styles.contactItem} ${className}`}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.content}>{children}</span>
    </div>
  )
}

export default ContactItem
