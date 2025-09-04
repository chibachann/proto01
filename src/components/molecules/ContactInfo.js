import * as React from "react"
import SectionTitle from "../atoms/SectionTitle"
import ContactItem from "../atoms/ContactItem"
import * as styles from "./ContactInfo.module.css"

const ContactInfo = ({ className = "" }) => {
  const contactData = [
    { icon: "📞", content: "03-1234-5678" },
    { icon: "✉️", content: "info@yourcompany.com" },
    { icon: "📍", content: "東京都渋谷区〇〇1-2-3\n〇〇ビル 5F" },
    { icon: "🕒", content: "平日 9:00-18:00" }
  ]

  return (
    <div className={`${styles.contactInfo} ${className}`}>
      <SectionTitle>お問い合わせ</SectionTitle>
      <div className={styles.contactList}>
        {contactData.map((item, index) => (
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
