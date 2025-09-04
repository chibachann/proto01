import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./Button.module.css"
import * as typography from "./Typography.module.css"

const Button = ({ 
  to, 
  href, 
  onClick, 
  children, 
  variant = "primary", 
  size = "medium",
  block = false,
  type = "button"
}) => {
  const buttonClasses = [
    styles.button,
    styles[`button${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
    styles[`button${size.charAt(0).toUpperCase() + size.slice(1)}`],
    block ? styles.buttonBlock : '',
    typography.fontSemibold
  ].filter(Boolean).join(' ')

  // Gatsby Link
  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {children}
      </Link>
    )
  }

  // External Link
  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    )
  }

  // Button Element
  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
