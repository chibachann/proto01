import React from "react"
import { Link } from "gatsby"
import Layout from "../components/templates/Layout"
import SectionTitle from "../components/atoms/SectionTitle"
import Button from "../components/atoms/Button"
import * as styles from "./about.module.css"

const companyInfo = {
  name: "Your Company",
  established: "2020年4月",
  capital: "1,000万円",
  employees: "25名",
  address: "東京都渋谷区〇〇1-2-3\n〇〇ビル 5F",
  phone: "03-1234-5678",
  email: "info@yourcompany.com",
  business: [
    "Webサイト制作・開発",
    "モバイルアプリケーション開発",
    "DXコンサルティング",
    "システム保守・運用サポート",
    "技術コンサルティング"
  ]
}

const values = [
  {
    title: "革新性",
    description: "最新技術を活用し、常に革新的なソリューションを提供します。",
    icon: "💡"
  },
  {
    title: "品質",
    description: "高品質なサービスとプロダクトの提供にこだわり続けます。",
    icon: "⭐"
  },
  {
    title: "信頼性",
    description: "お客様との信頼関係を大切にし、約束を必ず守ります。",
    icon: "🤝"
  },
  {
    title: "成長",
    description: "お客様と共に成長し、継続的な価値を創造します。",
    icon: "📈"
  }
]

const AboutPage = () => {
  return (
    <Layout
      pageTitle="会社概要"
      pageDescription="Your Companyの会社概要をご紹介します。私たちの理念、事業内容、会社情報について詳しくご説明いたします。"
    >
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <SectionTitle level="h1" className={styles.heroTitle}>
              会社概要
            </SectionTitle>
            <p className={styles.heroDescription}>
              私たちは、最新のテクノロジーを活用して、
              お客様のビジネスの成長を支援するデジタルソリューション企業です。
            </p>
          </div>
        </section>

        <section className={styles.missionSection}>
          <div className={styles.missionContent}>
            <SectionTitle level="h2" className={styles.sectionTitle}>
              私たちのミッション
            </SectionTitle>
            <div className={styles.missionText}>
              <p>
                テクノロジーの力で、お客様のビジネスに新たな価値を創造し、
                デジタル社会の発展に貢献することが私たちのミッションです。
              </p>
              <p>
                お客様一人ひとりのニーズに寄り添い、最適なソリューションを提供することで、
                ビジネスの成功と社会の持続的な発展を支援してまいります。
              </p>
            </div>
          </div>
        </section>

        <section className={styles.valuesSection}>
          <SectionTitle level="h2" className={styles.sectionTitle}>
            私たちの価値観
          </SectionTitle>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.companyInfoSection}>
          <SectionTitle level="h2" className={styles.sectionTitle}>
            会社情報
          </SectionTitle>
          <div className={styles.companyInfoGrid}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>基本情報</h3>
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>会社名</span>
                  <span className={styles.infoValue}>{companyInfo.name}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>設立</span>
                  <span className={styles.infoValue}>{companyInfo.established}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>資本金</span>
                  <span className={styles.infoValue}>{companyInfo.capital}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>従業員数</span>
                  <span className={styles.infoValue}>{companyInfo.employees}</span>
                </div>
              </div>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>所在地・連絡先</h3>
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>住所</span>
                  <span className={styles.infoValue}>
                    {companyInfo.address.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < companyInfo.address.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>電話</span>
                  <span className={styles.infoValue}>{companyInfo.phone}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>メール</span>
                  <span className={styles.infoValue}>{companyInfo.email}</span>
                </div>
              </div>
            </div>

            <div className={`${styles.infoCard} ${styles.businessCard}`}>
              <h3 className={styles.infoTitle}>事業内容</h3>
              <ul className={styles.businessList}>
                {companyInfo.business.map((item, index) => (
                  <li key={index} className={styles.businessItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>お気軽にお問い合わせください</h2>
            <p className={styles.ctaDescription}>
              サービスに関するご質問やご相談がございましたら、
              お気軽にお問い合わせください。
            </p>
            <div className={styles.ctaButtons}>
              <Link to="/contact">
                <Button variant="primary" size="large">
                  お問い合わせ
                </Button>
              </Link>
              <Link to="/team">
                <Button variant="outline" size="large">
                  チーム紹介
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default AboutPage

export const Head = () => (
  <>
    <title>会社概要 | Your Company</title>
    <meta name="description" content="Your Companyの会社概要をご紹介します。私たちの理念、事業内容、会社情報について詳しくご説明いたします。" />
  </>
)
