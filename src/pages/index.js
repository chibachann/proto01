import * as React from "react"
import Layout from "../components/templates/Layout"
import HeroSection from "../components/organisms/HeroSection"
import Button from "../components/atoms/Button"
import { siteConfig } from "../config/siteConfig"
import * as typography from "../components/atoms/Typography/Typography.module.css"

const IndexPage = () => {
  const ctaButton = (
    <Button to="/contact" variant="primary" size="large">
      お問い合わせ
    </Button>
  )

  return (
    <Layout pageTitle="ホーム">
      <main>
        <HeroSection 
          title={`Welcome to ${siteConfig.siteName}`}
          subtitle="革新的なソリューションで、お客様のビジネスを次のレベルへ"
          description="私たちは最新の技術と豊富な経験を活かして、お客様の課題を解決し、成功をサポートします。共に未来を創造しましょう。"
          ctaButton={ctaButton}
          backgroundColor="#667eea"
          imageAlt="ビジネスソリューションのイメージ"
        />
        
        <div className="container text-center" style={{ padding: '4rem 0' }}>
          <h2 className={typography.heading2}>
            Our Services
          </h2>
          <p className={`${typography.bodyLarge} ${typography.textSecondary}`} style={{ 
            maxWidth: '600px', 
            margin: '0 auto'
          }}>
            幅広いサービスでお客様をサポートします
          </p>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
