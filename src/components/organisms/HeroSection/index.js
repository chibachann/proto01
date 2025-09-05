import * as React from "react"
import HeroTextGroup from "../../molecules/HeroTextGroup"
import HeroImageArea from "../../molecules/HeroImageArea"
import * as styles from "./HeroSection.module.css"

const HeroSection = ({ 
  title = "Welcome to Our Company",
  subtitle = "革新的なソリューションで、お客様のビジネスを次のレベルへ", 
  description = "私たちは最新の技術と豊富な経験を活かして、お客様の課題を解決し、成功をサポートします。",
  ctaButton = null,
  imageAlt = "Hero image",
  backgroundColor = "#f0f4f8",
  placeholderText = "Image Area",
  className = "",
  imageSrc = null
}) => {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    // コンポーネントマウント後にアニメーションを開始
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className={`${styles.heroSection} ${className}`}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* テキストコンテンツ - 左側 */}
          <div className={`${styles.textContent} ${isVisible ? styles.textContentVisible : ''}`}>
            <HeroTextGroup 
              title={title}
              subtitle={subtitle}
              description={description}
              ctaButton={ctaButton}
              isVisible={isVisible}
            />
          </div>
          
          {/* 画像ゾーン - 右側 */}
          <HeroImageArea 
            backgroundColor={backgroundColor}
            imageAlt={imageAlt}
            placeholderText={placeholderText}
            isVisible={isVisible}
            className={styles.imageZone}
            imageSrc={imageSrc}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
