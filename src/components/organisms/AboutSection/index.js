import * as React from "react"
import SectionTitle from "../../atoms/SectionTitle"
import Button from "../../atoms/Button"
import * as styles from "./AboutSection.module.css"

const AboutSection = ({ 
  title = "私たちについて",
  subtitle = "革新と信頼で未来を切り拓く",
  description = "私たちは2010年の創業以来、お客様のビジネス成長を支援してきました。最新技術と豊富な経験を組み合わせ、持続可能なソリューションを提供しています。",
  mission = "デジタル変革の時代において、技術的な課題解決だけでなく、お客様のビジネス戦略パートナーとして長期的な成功を共に築いていくことを使命としています。",
  vision = "私たちは、革新的な技術と人間中心のアプローチを融合させ、社会全体のデジタル化を推進し、より良い未来の創造に貢献したいと考えています。",
  values = [
    { title: "革新性", description: "常に最新技術を追求し、創造的なソリューションを提供" },
    { title: "信頼性", description: "確実性と品質を重視した、信頼できるサービス" },
    { title: "協働性", description: "お客様との密接なパートナーシップ" }
  ],
  stats = [],
  ctaButton = null,
  imageSrc = "/Hero01.jpg",
  imageAlt = "会社オフィスまたはチームの様子",
  secondImageSrc = "/Hero01.jpg", // 2つ目の画像（実際にはチームミーティングやワークショップの写真を想定）
  secondImageAlt = "チームミーティングまたはワークショップの様子",
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
      { threshold: 0.3 }
    )

    const sectionRef = document.getElementById('about-section')
    if (sectionRef) {
      observer.observe(sectionRef)
    }

    return () => observer.disconnect()
  }, [])

  const defaultStats = [
    { number: "500+", label: "プロジェクト完了" },
    { number: "13年", label: "実績と信頼" },
    { number: "98%", label: "顧客満足度" },
    { number: "24/7", label: "サポート体制" }
  ]

  const statsToRender = stats.length > 0 ? stats : defaultStats

  return (
    <section id="about-section" className={`${styles.aboutSection} ${className}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* 1つ目の画像エリア - 左側 */}
          <div className={`${styles.imageArea} ${styles.firstImageArea} ${isVisible ? styles.imageAreaVisible : ''}`}>
            <div className={styles.imageWrapper}>
              <img 
                src={imageSrc}
                alt={imageAlt}
                className={styles.aboutImage}
              />
              <div className={styles.decorativeElement}></div>
            </div>
          </div>
          
          {/* テキストコンテンツ - 中央 */}
          <div className={`${styles.textContent} ${isVisible ? styles.textContentVisible : ''}`}>
            <SectionTitle 
              title={title}
              subtitle={subtitle}
              isVisible={isVisible}
              alignment="center"
            />
            
            <p className={styles.description}>{description}</p>
            
            {/* ミッション */}
            <div className={styles.missionSection}>
              <h4 className={styles.sectionSubtitle}>私たちの使命</h4>
              <p className={styles.missionText}>{mission}</p>
            </div>
            
            {/* ビジョン */}
            <div className={styles.visionSection}>
              <h4 className={styles.sectionSubtitle}>ビジョン</h4>
              <p className={styles.visionText}>{vision}</p>
            </div>
            
            {/* 価値観 */}
            <div className={styles.valuesSection}>
              <h4 className={styles.sectionSubtitle}>私たちの価値観</h4>
              <div className={styles.valuesList}>
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className={`${styles.valueItem} ${isVisible ? styles.valueItemVisible : ''}`}
                    style={{ transitionDelay: `${index * 100 + 600}ms` }}
                  >
                    <h5 className={styles.valueTitle}>{value.title}</h5>
                    <p className={styles.valueDescription}>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 統計情報 */}
            <div className={styles.statsGrid}>
              {statsToRender.map((stat, index) => (
                <div 
                  key={index}
                  className={`${styles.statItem} ${isVisible ? styles.statItemVisible : ''}`}
                  style={{ transitionDelay: `${index * 100 + 800}ms` }}
                >
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
            
            {ctaButton && (
              <div className={styles.ctaWrapper}>
                {ctaButton}
              </div>
            )}
          </div>
          
          {/* 2つ目の画像エリア - 右側 */}
          <div className={`${styles.imageArea} ${styles.secondImageArea} ${isVisible ? styles.imageAreaVisible : ''}`}>
            <div className={styles.imageWrapper}>
              <img 
                src={secondImageSrc}
                alt={secondImageAlt}
                className={styles.aboutImage}
              />
              <div className={styles.decorativeElement}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
