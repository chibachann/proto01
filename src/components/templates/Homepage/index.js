import * as React from "react"
import Layout from "../Layout"
import HeroSection from "../../organisms/HeroSection"
import ServicesSection from "../../organisms/ServicesSection"
import FeaturesSection from "../../organisms/FeaturesSection"
import TestimonialsSection from "../../organisms/TestimonialsSection"
import ContactSection from "../../organisms/ContactSection"
import Button from "../../atoms/Button"
import * as styles from "./Homepage.module.css"

const Homepage = ({ 
  pageTitle = "ホーム",
  hero = {},
  services = {},
  about = {},
  features = {},
  testimonials = {},
  contact = {},
  className = ""
}) => {
  // デフォルトのCTAボタン
  const defaultCtaButton = (
    <Button to="/contact" variant="primary" size="large">
      お問い合わせ
    </Button>
  )

  const defaultAboutCtaButton = (
    <Button to="/about" variant="outline" size="medium">
      詳しく見る
    </Button>
  )

  return (
    <Layout pageTitle={pageTitle} className={`${styles.homepage} ${className}`}>
      {/* ヒーローセクション */}
      <HeroSection 
        title={hero.title || "Welcome to Our Company"}
        subtitle={hero.subtitle || "革新的なソリューションで、お客様のビジネスを次のレベルへ"}
        description={hero.description || "私たちは最新の技術と豊富な経験を活かして、お客様の課題を解決し、成功をサポートします。共に未来を創造しましょう。"}
        ctaButton={hero.ctaButton || defaultCtaButton}
        backgroundColor={hero.backgroundColor || "#667eea"}
        imageAlt={hero.imageAlt || "ビジネスソリューションのイメージ"}
        imageSrc={hero.imageSrc || "/Hero01.jpg"}
        {...hero}
      />
      
      {/* サービス紹介セクション */}
      <ServicesSection 
        title={services.title}
        subtitle={services.subtitle}
        services={services.services}
        {...services}
      />
      

      
      {/* 特徴・強みセクション */}
      <FeaturesSection 
        title={features.title}
        subtitle={features.subtitle}
        features={features.features}
        {...features}
      />
      
      {/* お客様の声セクション */}
      <TestimonialsSection 
        title={testimonials.title}
        subtitle={testimonials.subtitle}
        testimonials={testimonials.testimonials}
        {...testimonials}
      />
      
      {/* お問い合わせセクション */}
      <ContactSection 
        title={contact.title}
        subtitle={contact.subtitle}
        contactInfo={contact.contactInfo}
        {...contact}
      />
    </Layout>
  )
}

export default Homepage
