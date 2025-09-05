import React from "react"
import { Link } from "gatsby"
import Layout from "../components/templates/Layout"
import SectionTitle from "../components/atoms/SectionTitle"
import Button from "../components/atoms/Button"
import * as styles from "./services.module.css"

const services = [
  {
    id: "web",
    title: "Webサイト制作",
    description: "モダンで高性能なWebサイトを制作いたします。レスポンシブデザイン、SEO対策、高速化など、お客様のビジネスに最適なソリューションを提供します。",
    features: [
      "レスポンシブデザイン",
      "SEO最適化",
      "高速化対応",
      "CMS導入",
      "保守・運用サポート"
    ],
    price: "500,000円〜",
    path: "/services/web"
  },
  {
    id: "app",
    title: "アプリ開発",
    description: "iOS・Android対応のネイティブアプリから、React NativeやFlutterを使用したクロスプラットフォームアプリまで幅広く対応いたします。",
    features: [
      "iOS・Android対応",
      "クロスプラットフォーム開発",
      "UI/UXデザイン",
      "API連携",
      "アプリストア申請サポート"
    ],
    price: "800,000円〜",
    path: "/services/app"
  },
  {
    id: "consulting",
    title: "DXコンサルティング",
    description: "デジタルトランスフォーメーション（DX）を推進し、お客様のビジネスプロセスをデジタル化することで業務効率の向上を実現します。",
    features: [
      "現状分析・課題抽出",
      "DX戦略策定",
      "システム選定・導入",
      "業務プロセス最適化",
      "従業員教育・サポート"
    ],
    price: "300,000円〜",
    path: "/services/consulting"
  },
  {
    id: "support",
    title: "技術サポート",
    description: "既存システムの保守・運用から、技術的な課題解決まで、お客様の技術面をトータルでサポートいたします。",
    features: [
      "システム保守・運用",
      "障害対応・復旧",
      "セキュリティ対策",
      "パフォーマンス改善",
      "技術相談・アドバイス"
    ],
    price: "100,000円〜",
    path: "/services/support"
  }
]

const ServicesPage = () => {
  return (
    <Layout
      pageTitle="サービス一覧"
      pageDescription="当社が提供するサービスの一覧です。Webサイト制作、アプリ開発、DXコンサルティング、技術サポートなど、お客様のビジネスをサポートいたします。"
    >
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <SectionTitle level="h1" className={styles.heroTitle}>
              私たちのサービス
            </SectionTitle>
            <p className={styles.heroDescription}>
              お客様のビジネスを成功に導く、幅広いデジタルソリューションを提供いたします。
              専門性の高い技術力と豊富な経験で、お客様の課題解決をサポートします。
            </p>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <article key={service.id} className={styles.serviceCard}>
                <div className={styles.cardHeader}>
                  <h2 className={styles.serviceTitle}>{service.title}</h2>
                  <div className={styles.servicePrice}>{service.price}</div>
                </div>
                
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>
                
                <div className={styles.features}>
                  <h3 className={styles.featuresTitle}>主な機能・特徴</h3>
                  <ul className={styles.featuresList}>
                    {service.features.map((feature, index) => (
                      <li key={index} className={styles.featureItem}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.cardFooter}>
                  <Link to={service.path} className={styles.detailLink}>
                    <Button variant="primary" size="medium">
                      詳細を見る
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>お気軽にご相談ください</h2>
            <p className={styles.ctaDescription}>
              どのサービスがお客様に最適か分からない場合でも、お気軽にお問い合わせください。
              専門スタッフがお客様の課題をヒアリングし、最適なソリューションをご提案いたします。
            </p>
            <Link to="/contact">
              <Button variant="primary" size="large">
                無料相談はこちら
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default ServicesPage

export const Head = () => (
  <>
    <title>サービス一覧 | Your Company</title>
    <meta name="description" content="当社が提供するサービスの一覧です。Webサイト制作、アプリ開発、DXコンサルティング、技術サポートなど、お客様のビジネスをサポートいたします。" />
  </>
)
