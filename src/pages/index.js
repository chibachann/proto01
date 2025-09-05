import * as React from "react"
import Layout from "../components/templates/Layout"
import { siteConfig } from "../config/siteConfig"
import * as typography from "../components/atoms/Typography.module.css"

const IndexPage = () => {
  return (
    <Layout pageTitle="ホーム">
      <main>
        <div className="container text-center" style={{ padding: '4rem 0' }}>
          <h1 className={typography.heading1}>
            Welcome to {siteConfig.siteName}
          </h1>
          <p className={`${typography.bodyLarge} ${typography.textSecondary}`} style={{ 
            maxWidth: '600px', 
            margin: '0 auto'
          }}>
            私たちは革新的なソリューションで、お客様のビジネスを次のレベルへと導きます。
          </p>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
