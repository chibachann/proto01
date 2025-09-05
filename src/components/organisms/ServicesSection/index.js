import * as React from "react"
import * as styles from "./ServicesSection.module.css"

const ServicesSection = ({ 
  title = "プロフェッショナルサービス",
  subtitle = "最新技術と専門知識で、お客様のビジネス課題を解決し、デジタル時代の成功をサポートします",
  services = [],
  className = ""
}) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const [hoveredService, setHoveredService] = React.useState(null)
  const [animatedServices, setAnimatedServices] = React.useState(new Set())

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // サービスカードを順番にアニメーション
          defaultServices.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedServices(prev => new Set([...prev, index]))
            }, index * 200)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    const sectionRef = document.getElementById('services-section')
    if (sectionRef) {
      observer.observe(sectionRef)
    }

    return () => observer.disconnect()
  }, [])

  const defaultServices = [
    {
      id: "ai-solutions",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="16" r="6" stroke="currentColor" strokeWidth="2"/>
          <circle cx="16" cy="32" r="6" stroke="currentColor" strokeWidth="2"/>
          <circle cx="48" cy="32" r="6" stroke="currentColor" strokeWidth="2"/>
          <circle cx="32" cy="48" r="6" stroke="currentColor" strokeWidth="2"/>
          <line x1="26" y1="22" x2="22" y2="26" stroke="currentColor" strokeWidth="2"/>
          <line x1="38" y1="22" x2="42" y2="26" stroke="currentColor" strokeWidth="2"/>
          <line x1="22" y1="38" x2="26" y2="42" stroke="currentColor" strokeWidth="2"/>
          <line x1="42" y1="38" x2="38" y2="42" stroke="currentColor" strokeWidth="2"/>
          <circle cx="32" cy="32" r="3" fill="currentColor"/>
        </svg>
      ),
      title: "AI・機械学習ソリューション",
      subtitle: "次世代の知能システム",
      description: "最先端のAI技術を活用したカスタムソリューションで、業務の自動化と効率化を実現。機械学習モデルの開発から導入・運用まで包括的にサポートします。",
      features: ["自然言語処理", "画像認識", "予測分析", "チャットボット開発"],
      gradient: "linear-gradient(135deg, rgb(var(--color-primary)) 0%, rgba(var(--color-primary), 0.8) 100%)",
      bgPattern: "radial-gradient(circle at 20% 80%, rgba(var(--color-primary), 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(var(--color-accent), 0.1) 0%, transparent 50%)"
    },
    {
      id: "cloud-infrastructure",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M46 28c3.314 0 6-2.686 6-6s-2.686-6-6-6c-1.107 0-2.146.301-3.037.826C41.879 13.316 38.21 11 34 11c-5.523 0-10 4.477-10 10 0 .711.074 1.404.214 2.072C22.939 23.026 21.99 23 21 23c-4.418 0-8 3.582-8 8s3.582 8 8 8h25z" stroke="currentColor" strokeWidth="2"/>
          <rect x="20" y="36" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
          <line x1="24" y1="40" x2="40" y2="40" stroke="currentColor" strokeWidth="1"/>
          <line x1="24" y1="44" x2="36" y2="44" stroke="currentColor" strokeWidth="1"/>
          <line x1="24" y1="48" x2="38" y2="48" stroke="currentColor" strokeWidth="1"/>
        </svg>
      ),
      title: "クラウドインフラ構築",
      subtitle: "スケーラブルなクラウド環境",
      description: "AWS、Azure、GCPを活用した高性能クラウドインフラの設計・構築。セキュリティとコスト最適化を両立したアーキテクチャを提供します。",
      features: ["インフラ設計", "CI/CD構築", "監視・運用", "セキュリティ強化"],
      gradient: "linear-gradient(135deg, rgb(var(--color-secondary)) 0%, rgba(var(--color-secondary), 0.7) 100%)",
      bgPattern: "radial-gradient(circle at 20% 80%, rgba(var(--color-secondary), 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(var(--color-accent), 0.15) 0%, transparent 50%)"
    },
    {
      id: "data-analytics",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="48" height="32" rx="4" stroke="currentColor" strokeWidth="2"/>
          <line x1="16" y1="48" x2="16" y2="56" stroke="currentColor" strokeWidth="2"/>
          <line x1="32" y1="48" x2="32" y2="56" stroke="currentColor" strokeWidth="2"/>
          <line x1="48" y1="48" x2="48" y2="56" stroke="currentColor" strokeWidth="2"/>
          <line x1="8" y1="56" x2="56" y2="56" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 32l8-6 8 4 8-8 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="16" cy="32" r="2" fill="currentColor"/>
          <circle cx="24" cy="26" r="2" fill="currentColor"/>
          <circle cx="32" cy="30" r="2" fill="currentColor"/>
          <circle cx="40" cy="22" r="2" fill="currentColor"/>
          <circle cx="48" cy="28" r="2" fill="currentColor"/>
        </svg>
      ),
      title: "データアナリティクス",
      subtitle: "データドリブンな意思決定",
      description: "ビッグデータから価値ある洞察を抽出し、ビジネスインテリジェンスを構築。リアルタイム分析とレポーティングで競争優位を獲得します。",
      features: ["BI構築", "リアルタイム分析", "データ可視化", "予測モデリング"],
      gradient: "linear-gradient(135deg, rgba(var(--color-primary), 0.8) 0%, rgb(var(--color-accent)) 100%)",
      bgPattern: "radial-gradient(circle at 20% 80%, rgba(var(--color-accent), 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(var(--color-primary), 0.1) 0%, transparent 50%)"
    },
    {
      id: "cybersecurity",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 8L16 16v12c0 10 7 18.5 16 20 9-1.5 16-10 16-20V16L32 8z" stroke="currentColor" strokeWidth="2"/>
          <path d="M24 28l6 6 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="32" cy="32" r="3" fill="currentColor"/>
        </svg>
      ),
      title: "サイバーセキュリティ",
      subtitle: "包括的セキュリティ対策",
      description: "最新の脅威に対応したセキュリティソリューション。ペネトレーションテストから運用監視まで、企業のデジタル資産を守ります。",
      features: ["脆弱性診断", "セキュリティ監視", "インシデント対応", "コンプライアンス支援"],
      gradient: "linear-gradient(135deg, rgb(var(--color-primary)) 0%, rgb(var(--color-secondary)) 100%)",
      bgPattern: "radial-gradient(circle at 20% 80%, rgba(var(--color-primary), 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(var(--color-secondary), 0.15) 0%, transparent 50%)"
    },
    {
      id: "web-development",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="12" width="48" height="32" rx="4" stroke="currentColor" strokeWidth="2"/>
          <line x1="8" y1="22" x2="56" y2="22" stroke="currentColor" strokeWidth="2"/>
          <circle cx="14" cy="17" r="1.5" fill="currentColor"/>
          <circle cx="19" cy="17" r="1.5" fill="currentColor"/>
          <circle cx="24" cy="17" r="1.5" fill="currentColor"/>
          <path d="M18 28l6 4-6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="28" y1="36" x2="40" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="20" y1="48" x2="44" y2="48" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "ウェブ開発・DX支援",
      subtitle: "デジタル変革のパートナー",
      description: "モダンなウェブアプリケーションの開発からデジタル変革まで。ユーザー体験を重視した高品質なソリューションを提供します。",
      features: ["フロントエンド開発", "API設計", "UX/UIデザイン", "DX戦略立案"],
      gradient: "linear-gradient(135deg, rgba(var(--color-accent), 0.8) 0%, rgba(var(--color-secondary), 0.6) 100%)",
      bgPattern: "radial-gradient(circle at 20% 80%, rgba(var(--color-accent), 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(var(--color-secondary), 0.1) 0%, transparent 50%)"
    },
    {
      id: "consulting",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="20" r="8" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 44v-4c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v4" stroke="currentColor" strokeWidth="2"/>
          <path d="M32 28v8m-4-4h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="20" cy="24" r="4" stroke="currentColor" strokeWidth="2"/>
          <circle cx="44" cy="24" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 52c0-2.2 1.8-4 4-4h4" stroke="currentColor" strokeWidth="2"/>
          <path d="M52 52c0-2.2-1.8-4-4-4h-4" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "ITコンサルティング",
      subtitle: "戦略的IT活用支援",
      description: "企業のIT戦略立案から実行まで総合的にサポート。最新技術トレンドを踏まえた持続可能なデジタル戦略を提案します。",
      features: ["IT戦略立案", "システム選定", "プロジェクト管理", "技術研修"],
      gradient: "linear-gradient(135deg, rgba(var(--color-secondary), 0.9) 0%, rgba(var(--color-accent), 0.7) 100%)",
      bgPattern: "radial-gradient(circle at 20% 80%, rgba(var(--color-secondary), 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(var(--color-accent), 0.2) 0%, transparent 50%)"
    }
  ]

  const servicesToRender = services.length > 0 ? services : defaultServices

  return (
    <section id="services-section" className={`${styles.servicesSection} ${className}`}>
      {/* 背景装飾 */}
      <div className={styles.backgroundDecoration}>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
        <div className={styles.floatingShape3}></div>
      </div>

      <div className={styles.container}>
        {/* ヘッダーセクション */}
        <div className={`${styles.header} ${isVisible ? styles.headerVisible : ''}`}>
          <div className={styles.headerContent}>
            <span className={styles.sectionTag}>SERVICES</span>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
        </div>
        
        {/* サービスグリッド */}
        <div className={styles.servicesGrid}>
          {servicesToRender.map((service, index) => (
            <div
              key={service.id || index}
              className={`${styles.serviceCard} ${animatedServices.has(index) ? styles.serviceCardVisible : ''}`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                background: service.bgPattern
              }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* カードの背景グラデーション */}
              <div 
                className={styles.cardGradient}
                style={{ background: service.gradient }}
              ></div>

              {/* ホバー時のエフェクト */}
              <div className={`${styles.hoverEffect} ${hoveredService === index ? styles.hoverEffectActive : ''}`}></div>

              {/* カードコンテンツ */}
              <div className={styles.cardContent}>
                <div className={styles.iconContainer}>
                  <div className={styles.iconWrapper}>
                    {service.icon}
                  </div>
                </div>

                <div className={styles.textContent}>
                  <span className={styles.serviceSubtitle}>{service.subtitle}</span>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  
                  <div className={styles.features}>
                    {service.features?.map((feature, featureIndex) => (
                      <span key={featureIndex} className={styles.feature}>
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className={styles.learnMore}>
                    <span>詳しく見る</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTAセクション */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.ctaSectionVisible : ''}`}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>お客様に最適なソリューションを</h3>
            <p className={styles.ctaDescription}>
              どのサービスがお客様のニーズに最適かご相談ください。専門チームが詳しくご説明いたします。
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton}>
                無料相談を予約
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className={styles.secondaryButton}>
                資料ダウンロード
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
