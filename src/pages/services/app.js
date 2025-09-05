import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/templates/Layout"
import SectionTitle from "../../components/atoms/SectionTitle"
import Button from "../../components/atoms/Button"
import * as styles from "./app.module.css"

const developmentTypes = [
  {
    type: "ネイティブアプリ",
    platforms: ["iOS", "Android"],
    description: "各プラットフォームに最適化されたネイティブアプリケーションを開発します。",
    technologies: ["Swift", "Kotlin", "Objective-C", "Java"],
    features: [
      "高いパフォーマンス",
      "プラットフォーム固有機能の活用",
      "優れたユーザー体験",
      "アプリストア最適化"
    ]
  },
  {
    type: "クロスプラットフォーム",
    platforms: ["iOS", "Android", "Web"],
    description: "一つのコードベースで複数のプラットフォームに対応可能なアプリを開発します。",
    technologies: ["React Native", "Flutter", "Xamarin"],
    features: [
      "開発効率の向上",
      "メンテナンス性",
      "コスト削減",
      "短期間での開発"
    ]
  }
]

const developmentProcess = [
  {
    step: "01",
    title: "要件定義・企画",
    description: "アプリの目的、ターゲットユーザー、必要な機能を詳細に定義し、最適な開発方針を決定します。",
    duration: "2-3週間",
    deliverables: ["要件定義書", "機能仕様書", "技術仕様書"]
  },
  {
    step: "02",
    title: "UI/UXデザイン",
    description: "ユーザビリティを重視したワイヤーフレーム作成からビジュアルデザインまでを行います。",
    duration: "3-4週間",
    deliverables: ["ワイヤーフレーム", "UIデザイン", "プロトタイプ"]
  },
  {
    step: "03",
    title: "開発・実装",
    description: "フロントエンド、バックエンド、API連携など、アプリケーション全体を開発します。",
    duration: "6-12週間",
    deliverables: ["アプリケーション", "管理画面", "API"]
  },
  {
    step: "04",
    title: "テスト・品質確認",
    description: "各種デバイスでの動作確認、機能テスト、セキュリティテストを実施します。",
    duration: "2-3週間",
    deliverables: ["テストレポート", "品質確認書"]
  },
  {
    step: "05",
    title: "リリース・運用",
    description: "アプリストアへの申請代行から、リリース後の運用サポートまで行います。",
    duration: "1-2週間",
    deliverables: ["アプリストア申請", "運用マニュアル"]
  }
]

const appFeatures = [
  {
    icon: "📱",
    title: "ユーザビリティ重視",
    description: "直感的で使いやすいUIデザインで、ユーザーエクスペリエンスを最大化します。"
  },
  {
    icon: "🔗",
    title: "API連携",
    description: "既存システムとの連携や外部サービスとの統合も柔軟に対応します。"
  },
  {
    icon: "☁️",
    title: "クラウド連携",
    description: "AWS、Google Cloud、Azureなどのクラウドサービスと連携したバックエンドを構築します。"
  },
  {
    icon: "🔒",
    title: "セキュリティ対策",
    description: "データ暗号化、認証機能など、セキュリティを重視した設計を行います。"
  },
  {
    icon: "📊",
    title: "アナリティクス",
    description: "ユーザー行動分析やアプリパフォーマンスの測定機能を実装します。"
  },
  {
    icon: "🔔",
    title: "プッシュ通知",
    description: "ユーザーエンゲージメントを高めるプッシュ通知機能を実装します。"
  }
]

const pricingPlans = [
  {
    name: "スタートアッププラン",
    price: "800,000円〜",
    description: "シンプルな機能のアプリ開発",
    type: "基本的なアプリ",
    features: [
      "基本的な画面設計",
      "シンプルなUI/UXデザイン",
      "基本機能実装",
      "iOS・Android対応",
      "基本的なテスト",
      "3ヶ月保守サポート"
    ]
  },
  {
    name: "ビジネスプラン",
    price: "1,500,000円〜",
    description: "本格的なビジネスアプリ開発",
    type: "高機能アプリ",
    features: [
      "カスタムUI/UXデザイン",
      "API連携",
      "ユーザー認証機能",
      "プッシュ通知",
      "アナリティクス実装",
      "包括的なテスト",
      "6ヶ月保守サポート"
    ],
    popular: true
  },
  {
    name: "エンタープライズプラン",
    price: "3,000,000円〜",
    description: "大規模・高性能アプリ開発",
    type: "企業向けアプリ",
    features: [
      "完全オリジナル設計",
      "複雑なバックエンド",
      "セキュリティ対策",
      "スケーラブル設計",
      "リアルタイム機能",
      "継続的インテグレーション",
      "12ヶ月保守サポート"
    ]
  }
]

const AppServicePage = () => {
  return (
    <Layout
      pageTitle="アプリ開発"
      pageDescription="iOS・Android対応のネイティブアプリから、React NativeやFlutterを使用したクロスプラットフォームアプリまで幅広く対応いたします。"
    >
      <div className={styles.container}>
        {/* ヒーローセクション */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <SectionTitle level="h1" className={styles.heroTitle}>
              アプリ開発
            </SectionTitle>
            <p className={styles.heroDescription}>
              iOS・Android対応のネイティブアプリから、クロスプラットフォームアプリまで、
              お客様のビジネスニーズに最適なモバイルアプリケーションを開発いたします。
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

        {/* 開発タイプ */}
        <section className={styles.typesSection}>
          <SectionTitle level="h2" className={styles.sectionTitle}>
            開発タイプ
          </SectionTitle>
          <div className={styles.typesGrid}>
            {developmentTypes.map((type, index) => (
              <div key={index} className={styles.typeCard}>
                <h3 className={styles.typeTitle}>{type.type}</h3>
                <div className={styles.platforms}>
                  {type.platforms.map((platform, pIndex) => (
                    <span key={pIndex} className={styles.platform}>
                      {platform}
                    </span>
                  ))}
                </div>
                <p className={styles.typeDescription}>{type.description}</p>
                
                <div className={styles.technologies}>
                  <h4 className={styles.technologiesTitle}>主要技術</h4>
                  <div className={styles.techList}>
                    {type.technologies.map((tech, tIndex) => (
                      <span key={tIndex} className={styles.tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.typeFeatures}>
                  <h4 className={styles.featuresTitle}>特徴</h4>
                  <ul className={styles.featuresList}>
                    {type.features.map((feature, fIndex) => (
                      <li key={fIndex} className={styles.featureItem}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 機能・特徴 */}
        <section className={styles.featuresSection}>
          <SectionTitle level="h2" className={styles.sectionTitle}>
            アプリ開発の特徴
          </SectionTitle>
          <div className={styles.featuresGrid}>
            {appFeatures.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 開発プロセス */}
        <section className={styles.processSection}>
          <SectionTitle level="h2" className={styles.sectionTitle}>
            開発プロセス
          </SectionTitle>
          <div className={styles.processSteps}>
            {developmentProcess.map((step, index) => (
              <div key={index} className={styles.processStep}>
                <div className={styles.stepNumber}>{step.step}</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                  <div className={styles.stepMeta}>
                    <span className={styles.stepDuration}>{step.duration}</span>
                    <div className={styles.deliverables}>
                      {step.deliverables.map((deliverable, dIndex) => (
                        <span key={dIndex} className={styles.deliverable}>
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
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
                <div className={styles.planType}>{plan.type}</div>
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
            <h2 className={styles.ctaTitle}>アプリのアイデアを形にしませんか？</h2>
            <p className={styles.ctaDescription}>
              お客様のビジネスに最適なアプリ開発をご提案いたします。まずはお気軽にご相談ください。
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

export default AppServicePage

export const Head = () => (
  <>
    <title>アプリ開発 | Your Company</title>
    <meta name="description" content="iOS・Android対応のネイティブアプリから、React NativeやFlutterを使用したクロスプラットフォームアプリまで幅広く対応いたします。" />
  </>
)
