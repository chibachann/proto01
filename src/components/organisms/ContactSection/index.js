import * as React from "react"
import SectionTitle from "../../atoms/SectionTitle"
import Button from "../../atoms/Button"
import ContactItem from "../../atoms/ContactItem"
import * as styles from "./ContactSection.module.css"

const ContactSection = ({ 
  title = "お問い合わせ",
  subtitle = "お気軽にご相談ください",
  contactInfo = [],
  className = ""
}) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    const sectionRef = document.getElementById('contact-section')
    if (sectionRef) {
      observer.observe(sectionRef)
    }

    return () => observer.disconnect()
  }, [])

  const defaultContactInfo = [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>`,
      label: "電話番号",
      value: "03-1234-5678",
      subtext: "平日 9:00-18:00",
      iconType: "svg"
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>`,
      label: "メールアドレス",
      value: "contact@company.com",
      subtext: "24時間受付",
      iconType: "svg"
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>`,
      label: "オフィス",
      value: "東京都渋谷区xxx-x-x",
      subtext: "最寄り駅: 渋谷駅",
      iconType: "svg"
    }
  ]

  const contactInfoToRender = contactInfo.length > 0 ? contactInfo : defaultContactInfo

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // フォーム送信処理（実装は要件に応じて）
    console.log('Form submitted:', formData)
    alert('お問い合わせありがとうございます。担当者よりご連絡いたします。')
  }

  return (
    <section id="contact-section" className={`${styles.contactSection} ${className}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <SectionTitle 
            title={title}
            subtitle={subtitle}
            isVisible={isVisible}
            alignment="center"
          />
        </div>
        
        <div className={styles.content}>
          {/* お問い合わせフォーム */}
          <div className={`${styles.formArea} ${isVisible ? styles.formAreaVisible : ''}`}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="name">
                  お名前 <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">
                  メールアドレス <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="company">
                  会社名
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className={styles.input}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="message">
                  お問い合わせ内容 <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles.textarea}
                  rows="5"
                  required
                />
              </div>
              
              <div className={styles.submitWrapper}>
                <Button type="submit" variant="primary" size="large">
                  送信する
                </Button>
              </div>
            </form>
          </div>
          
          {/* 連絡先情報 */}
          <div className={`${styles.contactInfo} ${isVisible ? styles.contactInfoVisible : ''}`}>
            <h3 className={styles.contactInfoTitle}>その他のお問い合わせ方法</h3>
            <div className={styles.contactItems}>
              {contactInfoToRender.map((item, index) => (
                <ContactItem
                  key={index}
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                  subtext={item.subtext}
                  iconType={item.iconType || "text"}
                  className={styles.contactItem}
                />
              ))}
            </div>
            
            {/* 地図プレースホルダー */}
            <div className={styles.mapPlaceholder}>
              <img 
                src="/Hero01.jpg" 
                alt="オフィス地図（Googleマップまたは地図画像を配置予定）"
                className={styles.mapImage}
              />
              <div className={styles.mapOverlay}>
                <span>📍 オフィス所在地</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
