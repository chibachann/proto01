import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/templates/Layout"
import SectionTitle from "../../components/atoms/SectionTitle"
import Button from "../../components/atoms/Button"
import * as styles from "./support.module.css"

const supportServices = [
  {
    title: "システム保守・運用",
    description: "既存システムの安定稼働を維持するための定期的なメンテナンスと監視を行います。",
    icon: "🔧",
    features: ["定期メンテナンス", "システム監視", "バックアップ管理", "セキュリティ更新"]
  },
  {
    title: "障害対応・復旧",
    description: "システム障害時の迅速な対応と復旧作業を24時間体制でサポートいたします。",
    icon: "🚨",
    features: ["24時間対応", "迅速な原因調査", "復旧作業", "再発防止策の提案"]
  },
  {
    title: "セキュリティ対策",
    description: "最新のセキュリティ脅威に対する防御と、セキュリティレベルの向上をサポートします。",
    icon: "🛡️",
    features: ["脆弱性診断", "セキュリティ更新", "侵入検知", "セキュリティ教育"]
  },
  {
    title: "パフォーマンス改善",
    description: "システムのパフォーマンス分析と最適化により、処理速度の向上を実現します。",
    icon: "📈",
    features: ["パフォーマンス分析", "ボトルネック特定", "最適化提案", "実装サポート"]
  }
]

const supportPlans = [
  {
    name: "ベーシックサポート",
    price: "100,000円/月",
    description: "基本的な保守・運用サポート",
    features: [
      "平日9-18時サポート",
      "月次定期メンテナンス",
      "基本的な障害対応",
      "電話・メールサポート",
      "月次レポート"
    ]
  },
  {
    name: "スタンダードサポート",
    price: "200,000円/月",
    description: "充実した保守・運用サポート",
    features: [
      "平日9-21時サポート",
      "週次定期メンテナンス",
      "迅速な障害対応",
      "セキュリティ監視",
      "パフォーマンス監視",
      "詳細レポート"
    ],
    popular: true
  },
  {
    name: "プレミアムサポート",
    price: "400,000円/月",
    description: "24時間365日の全面サポート",
    features: [
      "24時間365日サポート",
      "リアルタイム監視",
      "即座の障害対応",
      "高度なセキュリティ対策",
      "パフォーマンス最適化",
      "専任エンジニア配置"
    ]
  }
]

const SupportServicePage = () => {
  return (
    <Layout
      pageTitle="技術サポート"
      pageDescription="既存システムの保守・運用から、技術的な課題解決まで、お客様の技術面をトータルでサポートいたします。"
    >
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <SectionTitle level="h1" className={styles.heroTitle}>
              技術サポート
            </SectionTitle>
            <p className={styles.heroDescription}>
              既存システムの保守・運用から、技術的な課題解決まで、
              お客様の技術面をトータルでサポートいたします。
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
            サポート内容
          </SectionTitle>
          <div className={styles.servicesGrid}>
            {supportServices.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <ul className={styles.featuresList}>
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className={styles.featureItem}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.pricingSection}>
          <SectionTitle level="h2" className={styles.sectionTitle}>
            サポートプラン
          </SectionTitle>
          <div className={styles.pricingGrid}>
            {supportPlans.map((plan, index) => (
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

        <section className={styles.emergencySection}>
          <div className={styles.emergencyContent}>
            <h2 className={styles.emergencyTitle}>緊急時の対応</h2>
            <p className={styles.emergencyDescription}>
              システム障害やセキュリティインシデントなど、緊急時には迅速な対応が重要です。
              専門エンジニアが24時間体制でサポートいたします。
            </p>
            <div className={styles.emergencyFeatures}>
              <div className={styles.emergencyFeature}>
                <span className={styles.emergencyIcon}>⚡</span>
                <span>即座の初期対応</span>
              </div>
              <div className={styles.emergencyFeature}>
                <span className={styles.emergencyIcon}>🔍</span>
                <span>原因調査・分析</span>
              </div>
              <div className={styles.emergencyFeature}>
                <span className={styles.emergencyIcon}>🛠️</span>
                <span>復旧作業</span>
              </div>
              <div className={styles.emergencyFeature}>
                <span className={styles.emergencyIcon}>📋</span>
                <span>再発防止策の策定</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>安心の技術サポートをお任せください</h2>
            <p className={styles.ctaDescription}>
              お客様のシステムを安全かつ安定して運用するためのサポートを提供いたします。
              まずはお気軽にご相談ください。
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

export default SupportServicePage

export const Head = () => (
  <>
    <title>技術サポート | Your Company</title>
    <meta name="description" content="既存システムの保守・運用から、技術的な課題解決まで、お客様の技術面をトータルでサポートいたします。" />
  </>
)
