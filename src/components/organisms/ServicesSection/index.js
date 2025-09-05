import * as React from "react"
import * as styles from "./ServicesSection.module.css"

const ServicesSection = ({ 
  title = "プロフェッショナル<br>サービス",
  subtitle = "最新技術と専門知識で、お客様のビジネス課題を解決し、デジタル時代の成功をサポートします",
  services = [],
  className = ""
}) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const [hoveredIndex, setHoveredIndex] = React.useState(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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
      id: 1,
      category: 'technology',
      icon: '🚀',
      title: 'AIソリューション開発',
      subtitle: '機械学習・深層学習による自動化',
      description: '最新のAI技術を活用した業務自動化、予測分析、自然言語処理システムを開発。ChatGPT統合、画像認識、データマイニングなど幅広いAIソリューションを提供します。',
      features: ['機械学習モデル構築', 'ChatGPT API統合', '予測分析システム', 'コンピュータビジョン'],
      price: '¥500,000〜',
      duration: '2-6ヶ月',
      clients: 150,
      satisfaction: 98,
      gradient: 'linear-gradient(135deg, rgba(var(--color-primary), 0.8) 0%, rgba(var(--color-secondary), 0.9) 100%)',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      category: 'design',
      icon: '🎨',
      title: 'UX/UIデザイン',
      subtitle: 'ユーザー体験を革新するデザイン',
      description: 'ユーザー中心設計によるWebアプリケーション、モバイルアプリのUI/UXデザイン。プロトタイピングからユーザビリティテストまで包括的にサポートします。',
      features: ['ユーザーリサーチ', 'プロトタイピング', 'デザインシステム', 'ユーザビリティテスト'],
      price: '¥300,000〜',
      duration: '1-3ヶ月',
      clients: 220,
      satisfaction: 96,
      gradient: 'linear-gradient(135deg, rgba(var(--color-accent), 0.6) 0%, rgba(var(--color-primary), 0.8) 100%)',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      category: 'development',
      icon: '💻',
      title: 'フルスタック開発',
      subtitle: 'スケーラブルなWebアプリケーション',
      description: 'React、Next.js、Node.js等のモダン技術スタックを使用したWebアプリケーション開発。PWA対応、レスポンシブデザイン、高性能なシステムを構築します。',
      features: ['React/Next.js開発', 'PWA対応', 'API設計・構築', 'データベース設計'],
      price: '¥800,000〜',
      duration: '3-8ヶ月',
      clients: 180,
      satisfaction: 97,
      gradient: 'linear-gradient(135deg, rgba(var(--color-secondary), 0.7) 0%, rgba(var(--color-accent), 0.5) 100%)',
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      category: 'cloud',
      icon: '☁️',
      title: 'クラウドインフラ',
      subtitle: 'AWS・Azure・GCP対応',
      description: 'スケーラブルで高可用性のクラウドインフラ設計・構築。DevOps、CI/CD、監視システム、セキュリティ対策まで包括的にサポートします。',
      features: ['AWS/Azure/GCP', 'DevOps自動化', 'CI/CD構築', 'セキュリティ対策'],
      price: '¥400,000〜',
      duration: '1-4ヶ月',
      clients: 120,
      satisfaction: 99,
      gradient: 'linear-gradient(135deg, rgba(var(--color-primary), 0.6) 0%, rgba(var(--color-accent), 0.8) 100%)',
      image: '/api/placeholder/400/300'
    },
    {
      id: 5,
      category: 'security',
      icon: '🛡️',
      title: 'セキュリティ診断',
      subtitle: 'ペネトレーションテスト・脆弱性診断',
      description: '包括的なセキュリティ診断とペネトレーションテストを実施。Webアプリケーション、ネットワーク、インフラの脆弱性を特定し、対策をご提案します。',
      features: ['脆弱性診断', 'ペネトレーションテスト', 'セキュリティ対策提案', 'OWASP準拠'],
      price: '¥200,000〜',
      duration: '2週間-2ヶ月',
      clients: 95,
      satisfaction: 100,
      gradient: 'linear-gradient(135deg, rgba(var(--color-accent), 0.4) 0%, rgba(var(--color-secondary), 0.6) 100%)',
      image: '/api/placeholder/400/300'
    },
    {
      id: 6,
      category: 'data',
      icon: '📊',
      title: 'データアナリティクス',
      subtitle: 'ビッグデータ分析・可視化',
      description: 'ビッグデータの収集、分析、可視化を通じてビジネス洞察を提供。BIダッシュボード構築、リアルタイム分析、予測モデリングを実現します。',
      features: ['データ可視化', 'BIダッシュボード', 'リアルタイム分析', '予測モデリング'],
      price: '¥600,000〜',
      duration: '2-5ヶ月',
      clients: 85,
      satisfaction: 95,
      gradient: 'linear-gradient(135deg, rgba(var(--color-secondary), 0.5) 0%, rgba(var(--color-primary), 0.7) 100%)',
      image: '/api/placeholder/400/300'
    }
  ]

  const servicesToRender = services.length > 0 ? services : defaultServices

  return (
    <section id="services-section" className={`${styles.servicesSection} ${className}`}>
      {/* 背景装飾 */}
      <div className={styles.backgroundDecorations}>
        <div className={styles.decoration1}></div>
        <div className={styles.decoration2}></div>
        <div className={styles.decoration3}></div>
      </div>

      <div className={styles.container}>
        {/* ヘッダーセクション */}
        <div className={`${styles.header} ${isVisible ? styles.headerVisible : ''}`}>
          <div className={styles.titleSection}>
            <span className={styles.badge}>SERVICES</span>
            <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }}></h2>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>プロジェクト完了</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>98%</span>
              <span className={styles.statLabel}>顧客満足度</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>サポート体制</span>
            </div>
          </div>
        </div>

        {/* サービスグリッド */}
        <div className={`${styles.servicesGrid} ${isVisible ? styles.gridVisible : ''}`}>
          {servicesToRender.map((service, index) => (
            <div
              key={service.id}
              className={`${styles.serviceCard} ${isVisible ? styles.cardVisible : ''}`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                background: service.gradient
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* カードヘッダー */}
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <span>{service.icon}</span>
                </div>
                <div className={styles.cardMeta}>
                  <span className={styles.cardPrice}>{service.price}</span>
                  <span className={styles.cardDuration}>{service.duration}</span>
                </div>
              </div>

              {/* カードコンテンツ */}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardSubtitle}>{service.subtitle}</p>
                <p className={styles.cardDescription}>{service.description}</p>

                {/* 特徴リスト */}
                <div className={styles.featuresList}>
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className={`${styles.featureItem} ${isVisible ? styles.featureVisible : ''}`}
                      style={{ transitionDelay: `${featureIndex * 100}ms` }}
                    >
                      <span className={styles.featureCheck}>✓</span>
                      <span className={styles.featureText}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* カードフッター */}
              <div className={styles.cardFooter}>
                <div className={styles.clientStats}>
                  <div className={styles.clientStat}>
                    <span className={styles.clientNumber}>{service.clients}</span>
                    <span className={styles.clientLabel}>クライアント</span>
                  </div>
                  <div className={styles.satisfactionStat}>
                    <span className={styles.satisfactionNumber}>{service.satisfaction}%</span>
                    <span className={styles.satisfactionLabel}>満足度</span>
                  </div>
                </div>
                
                <button className={styles.ctaButton}>
                  <span>詳細を見る</span>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* ホバーオーバーレイ */}
              <div className={`${styles.cardOverlay} ${hoveredIndex === index ? styles.overlayVisible : ''}`}>
                <div className={styles.overlayContent}>
                  <h4>今すぐ相談</h4>
                  <p>無料でプロジェクトの相談を承ります</p>
                  <button className={styles.overlayButton}>
                    お問い合わせ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA セクション */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.ctaVisible : ''}`}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>プロジェクトを始めませんか？</h3>
            <p className={styles.ctaDescription}>
              お客様のビジネス課題をお聞かせください。最適なソリューションをご提案いたします。
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryCta}>
                無料相談を予約
              </button>
              <button className={styles.secondaryCta}>
                事例を見る
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
