import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./Logo.module.css"
import * as typography from "../Typography/Typography.module.css"

const Logo = ({ to = "/", children }) => {
  return (
    <Link to={to} className={`${styles.logo} ${typography.fontBold}`}>
      {children}
    </Link>
  )
}

export default Logo
