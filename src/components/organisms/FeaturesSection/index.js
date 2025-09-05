import * as React from "react"
import * as styles from "./FeaturesSection.module.css"

const FeaturesSection = ({ 
  title = "なぜ選ばれるのか",
  subtitle = "圧倒的な実績と信頼で、お客様のビジネスを次のレベルへ",
  features = [],
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

    const sectionRef = document.getElementById('features-section')
    if (sectionRef) {
      observer.observe(sectionRef)
    }

    return () => observer.disconnect()
  }, [])

  const defaultFeatures = [
    {
      id: 1,
      icon: '🚀',
      title: '業界最速の開発スピード',
      description: 'アジャイル開発とAI支援ツールにより、従来の3倍の速度でプロジェクトを完了。市場投入までの時間を大幅短縮します。',
      stats: '平均30日',
      color: 'rgba(var(--color-primary), 0.1)',
      gradient: 'linear-gradient(135deg, rgba(var(--color-primary), 0.8) 0%, rgba(var(--color-secondary), 0.6) 100%)'
    },
    {
      id: 2,
      icon: '🛡️',
      title: '銀行レベルのセキュリティ',
      description: 'ISO27001準拠の厳格なセキュリティ基準。暗号化、多要素認証、侵入検知システムで完全防御します。',
      stats: '99.99%',
      color: 'rgba(var(--color-secondary), 0.1)',
      gradient: 'linear-gradient(135deg, rgba(var(--color-secondary), 0.8) 0%, rgba(var(--color-accent), 0.6) 100%)'
    },
    {
      id: 3,
      icon: '⚡',
      title: '自動スケーリング技術',
      description: 'クラウドネイティブ設計により、トラフィック急増にも瞬時に対応。99.9%の高可用性を保証します。',
      stats: '無制限',
      color: 'rgba(var(--color-accent), 0.1)',
      gradient: 'linear-gradient(135deg, rgba(var(--color-accent), 0.8) 0%, rgba(var(--color-primary), 0.6) 100%)'
    },
    {
      id: 4,
      icon: '📊',
      title: 'リアルタイム分析',
      description: 'ビッグデータとAIを活用した高度な分析機能。リアルタイムダッシュボードで意思決定を加速します。',
      stats: '毎秒1M件',
      color: 'rgba(var(--color-primary), 0.1)',
      gradient: 'linear-gradient(135deg, rgba(var(--color-primary), 0.6) 0%, rgba(var(--color-accent), 0.8) 100%)'
    },
    {
      id: 5,
      icon: '🌐',
      title: 'グローバル対応',
      description: '40ヶ国語対応、世界6拠点のCDNネットワーク。どこからでも高速アクセス可能なグローバルインフラ。',
      stats: '40言語',
      color: 'rgba(var(--color-secondary), 0.1)',
      gradient: 'linear-gradient(135deg, rgba(var(--color-secondary), 0.6) 0%, rgba(var(--color-primary), 0.8) 100%)'
    },
    {
      id: 6,
      icon: '💎',
      title: '24/7 専任サポート',
      description: '専門チームによる24時間365日のサポート体制。平均応答時間15分以内で、緊急時も安心です。',
      stats: '15分以内',
      color: 'rgba(var(--color-accent), 0.1)',
      gradient: 'linear-gradient(135deg, rgba(var(--color-accent), 0.6) 0%, rgba(var(--color-secondary), 0.8) 100%)'
    }
  ]

  const featuresToRender = features.length > 0 ? features : defaultFeatures

  return (
    <section id="features-section" className={`${styles.featuresSection} ${className}`}>
      {/* 背景装飾 */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
        <div className={styles.floatingShape3}></div>
        <div className={styles.gridPattern}></div>
      </div>

      <div className={styles.container}>
        {/* ヘッダーセクション */}
        <div className={`${styles.header} ${isVisible ? styles.headerVisible : ''}`}>
          <div className={styles.badge}>FEATURES</div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
          
          <div className={styles.statsOverview}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>成功プロジェクト</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>99.9%</span>
              <span className={styles.statLabel}>稼働率</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>サポート</span>
            </div>
          </div>
        </div>

        {/* フィーチャーグリッド */}
        <div className={`${styles.featuresGrid} ${isVisible ? styles.gridVisible : ''}`}>
          {featuresToRender.map((feature, index) => (
            <div
              key={feature.id}
              className={`${styles.featureCard} ${isVisible ? styles.cardVisible : ''}`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                background: feature.gradient
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* カード背景エフェクト */}
              <div className={styles.cardGlow}></div>
              
              {/* アイコンとタイトル */}
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{feature.icon}</span>
                </div>
                <div className={styles.cardStats}>
                  <span className={styles.statsNumber}>{feature.stats}</span>
                </div>
              </div>

              {/* コンテンツ */}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDescription}>{feature.description}</p>
              </div>

              {/* フッター */}
              <div className={styles.cardFooter}>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill}
                    style={{ 
                      width: hoveredIndex === index ? '100%' : '60%',
                      transitionDelay: `${index * 50}ms`
                    }}
                  ></div>
                </div>
                <div className={styles.cardAction}>
                  <span>詳細を見る</span>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA セクション */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.ctaVisible : ''}`}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>これらの機能を体験してみませんか？</h3>
            <p className={styles.ctaDescription}>
              無料デモで実際の性能をご確認いただけます
            </p>
            <button className={styles.ctaButton}>
              <span>無料デモを予約</span>
              <div className={styles.buttonGlow}></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
