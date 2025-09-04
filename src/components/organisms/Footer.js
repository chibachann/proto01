import * as React from "react"
import FooterSection from "../molecules/FooterSection"
import ContactInfo from "../molecules/ContactInfo"
import SocialLinks from "../molecules/SocialLinks"
import * as styles from "./Footer.module.css"

const Footer = () => {
  const companyLinks = [
    { to: "/about", label: "会社概要" },
    { to: "/history", label: "沿革" },
    { to: "/team", label: "チーム" },
    { to: "/careers", label: "採用情報" }
  ]

  const serviceLinks = [
    { to: "/services/web", label: "Webサイト制作" },
    { to: "/services/app", label: "アプリ開発" },
    { to: "/services/consulting", label: "コンサルティング" },
    { to: "/services/support", label: "サポート" }
  ]

  const supportLinks = [
    { to: "/contact", label: "お問い合わせ" },
    { to: "/faq", label: "よくある質問" },
    { to: "/privacy", label: "プライバシーポリシー" },
    { to: "/terms", label: "利用規約" }
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <FooterSection title="会社情報" links={companyLinks} />
          <FooterSection title="サービス" links={serviceLinks} />
          <FooterSection title="サポート" links={supportLinks} />
          <ContactInfo />
        </div>
        
        <hr className={styles.divider} />
        
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            &copy; 2025 Your Company. All rights reserved.
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}

export default Footer
