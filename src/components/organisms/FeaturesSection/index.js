import * as React from "react"
import FeatureCard from "../../atoms/FeatureCard"
import SectionTitle from "../../atoms/SectionTitle"
import * as styles from "./FeaturesSection.module.css"

const FeaturesSection = ({ 
  title = "私たちの強み",
  subtitle = "お客様に選ばれる理由",
  features = [],
  className = ""
}) => {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    const sectionRef = document.getElementById('features-section')
    if (sectionRef) {
      observer.observe(sectionRef)
    }

    return () => observer.disconnect()
  }, [])

  const defaultFeatures = [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>`,
      title: "戦略的アプローチ",
      description: "お客様のビジネス目標を深く理解し、最適な戦略を立案。短期的な成果と長期的な成長の両方を実現します。",
      iconType: "svg"
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
      </svg>`,
      title: "高速な実装力",
      description: "アジャイル開発手法により、迅速かつ柔軟にプロジェクトを進行。市場の変化に素早く対応できるソリューションを提供。",
      iconType: "svg"
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <circle cx="12" cy="16" r="1"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>`,
      title: "セキュリティ重視",
      description: "最高レベルのセキュリティ基準を満たすシステム設計。お客様の大切なデータと信頼を確実に保護します。",
      iconType: "svg"
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
        <line x1="12" y1="2" x2="12" y2="6"/>
        <line x1="12" y1="18" x2="12" y2="22"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      </svg>`,
      title: "継続的改善",
      description: "導入後も継続的なモニタリングと改善を実施。データに基づいた最適化でROIを最大化します。",
      iconType: "svg"
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>`,
      title: "パートナーシップ",
      description: "単なる受託開発ではなく、お客様の成功パートナーとして長期的な関係を築きます。",
      iconType: "svg"
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
      </svg>`,
      title: "卓越した品質",
      description: "厳格な品質管理プロセスにより、業界最高水準の成果物を保証。お客様の期待を上回る価値を提供します。",
      iconType: "svg"
    }
  ]

  const featuresToRender = features.length > 0 ? features : defaultFeatures

  return (
    <section id="features-section" className={`${styles.featuresSection} ${className}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <SectionTitle 
            title={title}
            subtitle={subtitle}
            isVisible={isVisible}
            alignment="center"
          />
        </div>
        
        <div className={styles.featuresGrid}>
          {featuresToRender.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconType={feature.iconType || "text"}
              isVisible={isVisible}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
