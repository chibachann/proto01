import React from "react"
import { Link } from "gatsby"
import Layout from "../components/templates/Layout"
import SectionTitle from "../components/atoms/SectionTitle"
import Button from "../components/atoms/Button"
import * as styles from "./careers.module.css"

const positions = [
  {
    title: "フロントエンドエンジニア",
    type: "正社員",
    location: "東京（リモート可）",
    description: "React、TypeScriptを使用したモダンなWebアプリケーション開発",
    requirements: ["React開発経験2年以上", "TypeScript使用経験", "チーム開発経験"]
  },
  {
    title: "バックエンドエンジニア", 
    type: "正社員",
    location: "東京（リモート可）",
    description: "Node.js、Python等を使用したAPI・サーバーサイド開発",
    requirements: ["サーバーサイド開発経験3年以上", "クラウド環境での開発経験", "データベース設計経験"]
  },
  {
    title: "UI/UXデザイナー",
    type: "正社員",
    location: "東京（リモート可）", 
    description: "Webサイト・アプリのUI/UXデザイン、プロトタイプ作成",
    requirements: ["Figma使用経験", "ユーザー中心設計の理解", "デザインシステム構築経験"]
  }
]

const benefits = [
  { icon: "💰", title: "競争力のある給与", description: "業界水準以上の給与体系" },
  { icon: "🏠", title: "リモートワーク", description: "フルリモート・ハイブリッド勤務可能" },
  { icon: "📚", title: "学習支援", description: "書籍購入費・セミナー参加費補助" },
  { icon: "🏥", title: "充実した福利厚生", description: "各種社会保険・健康診断" }
]

const CareersPage = () => {
  return (
    <Layout pageTitle="採用情報" pageDescription="Your Companyで一緒に働きませんか？現在募集中のポジションと福利厚生をご紹介します。">
      <div className={styles.container}>
        <section className={styles.hero}>
          <SectionTitle level="h1" className={styles.heroTitle}>採用情報</SectionTitle>
          <p className={styles.heroDescription}>
            私たちと一緒に、テクノロジーで社会をより良くしませんか？
            成長意欲の高いメンバーをお待ちしています。
          </p>
        </section>

        <section className={styles.positionsSection}>
          <SectionTitle level="h2" className={styles.sectionTitle}>募集中のポジション</SectionTitle>
          <div className={styles.positionsGrid}>
            {positions.map((position, index) => (
              <div key={index} className={styles.positionCard}>
                <h3 className={styles.positionTitle}>{position.title}</h3>
                <div className={styles.positionMeta}>
                  <span className={styles.positionType}>{position.type}</span>
                  <span className={styles.positionLocation}>{position.location}</span>
                </div>
                <p className={styles.positionDescription}>{position.description}</p>
                <div className={styles.requirements}>
                  <h4 className={styles.requirementsTitle}>応募要件</h4>
                  <ul className={styles.requirementsList}>
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className={styles.requirementItem}>{req}</li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className={styles.applyButton}>
                  <Button variant="primary" size="medium">応募する</Button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.benefitsSection}>
          <SectionTitle level="h2" className={styles.sectionTitle}>福利厚生</SectionTitle>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <h2 className={styles.ctaTitle}>まずはお気軽にご相談ください</h2>
          <p className={styles.ctaDescription}>
            カジュアル面談も承っております。お気軽にお問い合わせください。
          </p>
          <Link to="/contact">
            <Button variant="primary" size="large">お問い合わせ</Button>
          </Link>
        </section>
      </div>
    </Layout>
  )
}

export default CareersPage

export const Head = () => (
  <>
    <title>採用情報 | Your Company</title>
    <meta name="description" content="Your Companyで一緒に働きませんか？現在募集中のポジションと福利厚生をご紹介します。" />
  </>
)
