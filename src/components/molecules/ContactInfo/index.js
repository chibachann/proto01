import * as React from "react"
import SectionTitle from "../../atoms/SectionTitle"
import ContactItem from "../../atoms/ContactItem"
import * as styles from "./ContactInfo.module.css"

const ContactInfo = ({ contactData = {}, className = "" }) => {
  const { title = "お問い合わせ", phone, email, address, businessHours } = contactData

  const contactItems = [
    phone && { icon: "📞", content: phone },
    email && { icon: "✉️", content: email },
    address && { icon: "📍", content: address },
    businessHours && { icon: "🕒", content: businessHours }
  ].filter(Boolean)

  if (contactItems.length === 0) {
    return null
  }

  return (
    <div className={`${styles.contactInfo} ${className}`}>
      <SectionTitle>{title}</SectionTitle>
      <div className={styles.contactList}>
        {contactItems.map((item, index) => (
          <ContactItem key={index} icon={item.icon}>
            {item.content.split('\n').map((line, lineIndex) => (
              <React.Fragment key={lineIndex}>
                {line}
                {lineIndex < item.content.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </ContactItem>
        ))}
      </div>
    </div>
  )
}

export default ContactInfo
