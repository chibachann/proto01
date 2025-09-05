import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/templates/Layout"
import SectionTitle from "../../components/atoms/SectionTitle"
import Button from "../../components/atoms/Button"
import * as styles from "./consulting.module.css"

const services = [
  {
    title: "現状分析・課題抽出",
    description: "お客様の現在のビジネスプロセスを詳細に分析し、デジタル化による改善ポイントを特定します。",
    icon: "🔍"
  },
  {
    title: "DX戦略策定",
    description: "分析結果をもとに、お客様のビジネス目標に最適なデジタルトランスフォーメーション戦略を策定します。",
    icon: "📋"
  },
  {
    title: "システム選定・導入",
    description: "戦略に基づいて最適なシステム・ツールの選定から導入までをサポートいたします。",
    icon: "⚙️"
  },
  {
    title: "業務プロセス最適化",
    description: "デジタル化に合わせて業務プロセスを再設計し、効率化とコスト削減を実現します。",
    icon: "📈"
  },
  {
    title: "従業員教育・サポート",
    description: "新しいシステムやプロセスに対する従業員の教育とサポートを継続的に行います。",
    icon: "👥"
  }
]

const benefits = [
  {
    title: "業務効率の向上",
    description: "デジタル化により、手作業の削減と業務スピードの向上を実現",
    percentage: "最大40%"
  },
  {
    title: "コスト削減",
    description: "自動化とプロセス最適化によるコスト削減効果",
    percentage: "平均25%"
  },
  {
    title: "データ活用",
    description: "データ分析による意思決定の高速化と精度向上",
    percentage: "最大60%"
  }
]

const ConsultingServicePage = () => {
  return (
    <Layout
      pageTitle="DXコンサルティング"
      pageDescription="デジタルトランスフォーメーション（DX）を推進し、お客様のビジネスプロセスをデジタル化することで業務効率の向上を実現します。"
    >
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <SectionTitle level="h1" className={styles.heroTitle}>
              DXコンサルティング
            </SectionTitle>
            <p className={styles.heroDescription}>
              デジタルトランスフォーメーション（DX）を推進し、お客様のビジネスプロセスを
              デジタル化することで業務効率の向上を実現します。
            </p>
            <div className={styles.heroButtons}>
              <Link to="/contact">
                <Button variant="primary" size="large">
                  無料相談を申し込む
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="large">
                  サービス一覧に戻る
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <SectionTitle level="h2" className={styles.sectionTitle}>
            サービス内容
          </SectionTitle>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.benefitsSection}>
          <SectionTitle level="h2" className={styles.sectionTitle}>
            期待できる効果
          </SectionTitle>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitPercentage}>{benefit.percentage}</div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.pricingSection}>
          <SectionTitle level="h2" className={styles.sectionTitle}>
            料金
          </SectionTitle>
          <div className={styles.pricingCard}>
            <h3 className={styles.pricingTitle}>DXコンサルティング</h3>
            <div className={styles.price}>300,000円〜</div>
            <p className={styles.pricingDescription}>
              お客様の規模や課題に応じて、最適なプランをご提案いたします。
              まずは無料相談で現状をお聞かせください。
            </p>
            <ul className={styles.features}>
              <li>現状分析・課題抽出</li>
              <li>DX戦略策定</li>
              <li>システム選定サポート</li>
              <li>導入支援</li>
              <li>3ヶ月のフォローアップ</li>
            </ul>
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>DXでビジネスを変革しませんか？</h2>
            <p className={styles.ctaDescription}>
              デジタル化の第一歩を踏み出すお手伝いをいたします。
              お気軽にご相談ください。
            </p>
            <Link to="/contact">
              <Button variant="primary" size="large">
                無料相談を申し込む
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default ConsultingServicePage

export const Head = () => (
  <>
    <title>DXコンサルティング | Your Company</title>
    <meta name="description" content="デジタルトランスフォーメーション（DX）を推進し、お客様のビジネスプロセスをデジタル化することで業務効率の向上を実現します。" />
  </>
)
