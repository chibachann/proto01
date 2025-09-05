import * as React from "react"
import Homepage from "../components/templates/Homepage"
import Button from "../components/atoms/Button"
import { siteConfig } from "../config/siteConfig"

const IndexPage = () => {
  const ctaButton = (
    <Button to="/contact" variant="primary" size="large">
      お問い合わせ
    </Button>
  )

  const aboutCtaButton = (
    <Button to="/about" variant="outline" size="medium">
      会社概要を見る
    </Button>
  )

  // ヒーローセクションの設定
  const heroConfig = {
    title: `Welcome to ${siteConfig.siteName}`,
    subtitle: "革新的なソリューションで、お客様のビジネスを次のレベルへ",
    description: "私たちは最新の技術と豊富な経験を活かして、お客様の課題を解決し、成功をサポートします。共に未来を創造しましょう。",
    ctaButton: ctaButton,
    backgroundColor: "rgb(135, 20, 37)", // テーマカラーのプライマリを使用
    imageAlt: "ビジネスソリューションのイメージ",
    imageSrc: "/Hero01.jpg"
  }

  // Aboutセクションの設定
  const aboutConfig = {
    ctaButton: aboutCtaButton,
    description: "私たちは2010年の創業以来、500以上のプロジェクトを成功に導いてきました。最新技術と豊富な経験を組み合わせ、お客様のビジネス成長を支援する持続可能なソリューションを提供しています。",
    mission: "デジタル変革の時代において、技術的な課題解決だけでなく、お客様のビジネス戦略パートナーとして長期的な成功を共に築いていくことを使命としています。私たちは単なるソフトウェア開発会社ではなく、お客様の成長と共に歩む真のパートナーです。",
    vision: "私たちは、革新的な技術と人間中心のアプローチを融合させ、社会全体のデジタル化を推進し、より良い未来の創造に貢献したいと考えています。テクノロジーの力で人々の生活を豊かにし、ビジネスの可能性を無限に広げることが私たちの願いです。",
    values: [
      { 
        title: "革新性", 
        description: "常に最新技術を追求し、従来の枠にとらわれない創造的なソリューションを提供します" 
      },
      { 
        title: "信頼性", 
        description: "確実性と品質を重視し、お客様に安心してお任せいただけるサービスを心がけています" 
      },
      { 
        title: "協働性", 
        description: "お客様との密接なコミュニケーションを通じて、真のパートナーシップを築きます" 
      }
    ]
  }

  return (
    <Homepage 
      pageTitle="ホーム"
      hero={heroConfig}
      about={aboutConfig}
    />
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
