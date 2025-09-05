import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/templates/Layout"
import SectionTitle from "../../components/atoms/SectionTitle"
import Button from "../../components/atoms/Button"
import * as styles from "./web.module.css"

const processSteps = [
  {
    step: "01",
    title: "ヒアリング・企画",
    description: "お客様のご要望、ターゲット、目標をしっかりとヒアリングし、最適な企画をご提案いたします。",
    duration: "1-2週間"
  },
  {
    step: "02", 
    title: "デザイン制作",
    description: "ワイヤーフレーム作成からUI/UXデザインまで、ユーザビリティを重視したデザインを制作します。",
    duration: "2-3週間"
  },
  {
    step: "03",
    title: "開発・実装",
    description: "最新の技術を使用して、高速でSEOに強いWebサイトを構築いたします。",
    duration: "3-4週間"
  },
  {
    step: "04",
    title: "テスト・納品",
    description: "各種デバイスでの動作確認とテストを行い、問題がないことを確認してから納品いたします。",
    duration: "1週間"
  }
]

const features = [
  {
    icon: "📱",
    title: "レスポンシブデザイン",
    description: "スマートフォン、タブレット、PCすべてのデバイスで最適な表示を実現します。"
  },
  {
    icon: "🚀",
    title: "高速化対応",
    description: "Lighthouse スコア90点以上を目指し、ユーザー体験を向上させます。"
  },
  {
    icon: "🔍",
    title: "SEO最適化",
    description: "検索エンジンに最適化された構造で、検索順位の向上をサポートします。"
  },
  {
    icon: "🛡️",
    title: "セキュリティ対策",
    description: "SSL証明書の導入やセキュリティ対策を万全に行います。"
  },
  {
    icon: "📊",
    title: "アクセス解析",
    description: "Google Analyticsの設定で、サイトの効果測定が可能です。"
  },
  {
    icon: "🔧",
    title: "保守サポート",
    description: "納品後も継続的な保守・更新サポートを提供いたします。"
  }
]

const pricingPlans = [
  {
    name: "ベーシックプラン",
    price: "500,000円〜",
    description: "小規模サイト向けの基本的なWebサイト制作",
    features: [
      "ページ数: 5-10ページ",
      "レスポンシブデザイン",
      "お問い合わせフォーム",
      "基本的なSEO対策",
      "3ヶ月保守サポート"
    ]
  },
  {
    name: "スタンダードプラン", 
    price: "800,000円〜",
    description: "中規模サイト向けの充実したWebサイト制作",
    features: [
      "ページ数: 10-20ページ",
      "カスタムデザイン",
      "CMS導入",
      "高度なSEO対策",
      "アクセス解析設定",
      "6ヶ月保守サポート"
    ],
    popular: true
  },
  {
    name: "プレミアムプラン",
    price: "1,200,000円〜", 
    description: "大規模サイト向けの高機能Webサイト制作",
    features: [
      "ページ数: 20ページ以上",
      "完全オリジナルデザイン",
      "高機能CMS",
      "ECサイト機能",
      "多言語対応",
      "12ヶ月保守サポート"
    ]
  }
]

const WebServicePage = () => {
  return (
    <Layout
      pageTitle="Webサイト制作"
      pageDescription="モダンで高性能なWebサイト制作サービス。レスポンシブデザイン、SEO対策、高速化など、お客様のビジネスに最適なソリューションを提供します。"
    >
      <div className={styles.container}>
        {/* ヒーローセクション */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <SectionTitle level="h1" className={styles.heroTitle}>
              Webサイト制作
            </SectionTitle>
            <p className={styles.heroDescription}>
              お客様のビジネスを成功に導く、モダンで高性能なWebサイトを制作いたします。
              レスポンシブデザイン、SEO対策、高速化など、すべてを包括的にサポートします。
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

        {/* 特徴セクション */}
        <section className={styles.featuresSection}>
          <SectionTitle level="h2" className={styles.sectionTitle}>
            サービスの特徴
          </SectionTitle>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 制作プロセス */}
        <section className={styles.processSection}>
          <SectionTitle level="h2" className={styles.sectionTitle}>
            制作プロセス
          </SectionTitle>
          <div className={styles.processSteps}>
            {processSteps.map((step, index) => (
              <div key={index} className={styles.processStep}>
                <div className={styles.stepNumber}>{step.step}</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                  <span className={styles.stepDuration}>{step.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 料金プラン */}
        <section className={styles.pricingSection}>
          <SectionTitle level="h2" className={styles.sectionTitle}>
            料金プラン
          </SectionTitle>
          <div className={styles.pricingGrid}>
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`${styles.pricingCard} ${plan.popular ? styles.popular : ''}`}>
                {plan.popular && <div className={styles.popularBadge}>人気プラン</div>}
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.planPrice}>{plan.price}</div>
                <p className={styles.planDescription}>{plan.description}</p>
                <ul className={styles.planFeatures}>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={styles.planFeature}>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={styles.planButton}>
                  <Button variant={plan.popular ? "primary" : "outline"} size="medium">
                    お問い合わせ
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>まずは無料相談から始めませんか？</h2>
            <p className={styles.ctaDescription}>
              お客様のご要望をお聞かせください。専門スタッフが最適なプランをご提案いたします。
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

export default WebServicePage

export const Head = () => (
  <>
    <title>Webサイト制作 | Your Company</title>
    <meta name="description" content="モダンで高性能なWebサイト制作サービス。レスポンシブデザイン、SEO対策、高速化など、お客様のビジネスに最適なソリューションを提供します。" />
  </>
)
