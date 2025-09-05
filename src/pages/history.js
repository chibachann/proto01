import React from "react"
import { Link } from "gatsby"
import Layout from "../components/templates/Layout"
import SectionTitle from "../components/atoms/SectionTitle"
import Button from "../components/atoms/Button"
import * as styles from "./history.module.css"

const milestones = [
  { year: "2020年4月", event: "会社設立", description: "東京都渋谷区にて設立、Webサイト制作事業を開始" },
  { year: "2020年12月", event: "初年度売上1億円達成", description: "設立初年度にて売上目標を達成" },
  { year: "2021年6月", event: "アプリ開発事業開始", description: "モバイルアプリケーション開発サービスを開始" },
  { year: "2022年3月", event: "従業員数20名突破", description: "事業拡大に伴い、エンジニア・デザイナーを積極採用" },
  { year: "2022年10月", event: "DXコンサルティング事業開始", description: "企業のデジタル変革を支援するコンサルティングサービスを開始" },
  { year: "2023年4月", event: "技術サポート事業開始", description: "24時間365日の技術サポートサービスを開始" },
  { year: "2024年2月", event: "売上5億円突破", description: "創業4年目にて売上5億円を突破" },
  { year: "2024年現在", event: "従業員数25名", description: "多様な専門性を持つメンバーが活躍" }
]

const HistoryPage = () => {
  return (
    <Layout pageTitle="沿革" pageDescription="Your Companyの設立から現在までの歩みをご紹介します。">
      <div className={styles.container}>
        <section className={styles.hero}>
          <SectionTitle level="h1" className={styles.heroTitle}>沿革</SectionTitle>
          <p className={styles.heroDescription}>
            2020年の設立から現在まで、私たちの成長の歴史をご紹介します。
          </p>
        </section>
        
        <section className={styles.timeline}>
          {milestones.map((milestone, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineYear}>{milestone.year}</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineEvent}>{milestone.event}</h3>
                <p className={styles.timelineDescription}>{milestone.description}</p>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.cta}>
          <h2 className={styles.ctaTitle}>未来に向けて</h2>
          <p className={styles.ctaDescription}>
            私たちは今後も技術革新を続け、お客様のビジネス成長を支援してまいります。
          </p>
          <Link to="/contact">
            <Button variant="primary" size="large">お問い合わせ</Button>
          </Link>
        </section>
      </div>
    </Layout>
  )
}

export default HistoryPage

export const Head = () => (
  <>
    <title>沿革 | Your Company</title>
    <meta name="description" content="Your Companyの設立から現在までの歩みをご紹介します。" />
  </>
)
