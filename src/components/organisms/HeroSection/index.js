import * as React from "react"
import * as styles from "./HeroSection.module.css"

const HeroSection = ({ 
  title = "Welcome to Our Company",
  subtitle = "革新的なソリューションで、お客様のビジネスを次のレベルへ", 
  description = "私たちは最新の技術と豊富な経験を活かして、お客様の課題を解決し、成功をサポートします。",
  ctaButton = null,
  imageAlt = "Hero image",
  backgroundColor = "#f0f4f8",
  className = ""
}) => {
  return (
    <section className={`${styles.heroSection} ${className}`}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* テキストコンテンツ - 左側40% */}
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              {title}
            </h1>
            <h2 className={styles.subtitle}>
              {subtitle}
            </h2>
            <p className={styles.description}>
              {description}
            </p>
            {ctaButton && (
              <div className={styles.ctaWrapper}>
                {ctaButton}
              </div>
            )}
          </div>
          
          {/* 画像ゾーン - 右側60% */}
          <div className={styles.imageZone}>
            <div 
              className={styles.imagePlaceholder}
              style={{ backgroundColor }}
              role="img"
              aria-label={imageAlt}
            >
              {/* 将来的にここに画像を配置 */}
              <div className={styles.placeholderText}>
                Image Area
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
