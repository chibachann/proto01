import * as React from "react"
import * as styles from "./SectionTitle.module.css"

const SectionTitle = ({ children, className = "" }) => {
  return (
    <h3 className={`${styles.sectionTitle} ${className}`}>
      {children}
    </h3>
  )
}

export default SectionTitle
