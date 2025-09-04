import * as React from "react"
import Header from "../components/organisms/Header"
import Footer from "../components/organisms/Footer"
import * as typography from "../components/atoms/Typography.module.css"


const IndexPage = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container text-center" style={{ padding: '4rem 0' }}>
          <h1 className={typography.heading1}>
            Welcome to Your Company
          </h1>
          <p className={`${typography.bodyLarge} ${typography.textSecondary}`} style={{ 
            maxWidth: '600px', 
            margin: '0 auto'
          }}>
            私たちは革新的なソリューションで、お客様のビジネスを次のレベルへと導きます。
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
