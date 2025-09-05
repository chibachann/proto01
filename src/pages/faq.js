import React from "react"
import Layout from "../components/templates/Layout"
import SectionTitle from "../components/atoms/SectionTitle"
import * as styles from "./faq.module.css"

const faqs = [
  {
    category: "サービス全般",
    questions: [
      {
        q: "どのようなサービスを提供していますか？",
        a: "Webサイト制作、モバイルアプリ開発、DXコンサルティング、技術サポートの4つの主要サービスを提供しています。お客様のニーズに合わせて最適なソリューションをご提案いたします。"
      },
      {
        q: "見積もりは無料ですか？",
        a: "はい、お見積もりは無料です。お客様のご要望をお聞きした上で、詳細なお見積もりをご提供いたします。"
      },
      {
        q: "対応エリアはどこですか？",
        a: "全国対応可能です。リモートでの打ち合わせや開発も行っており、地域を問わずサービスを提供しています。"
      }
    ]
  },
  {
    category: "開発について",
    questions: [
      {
        q: "開発期間はどのくらいですか？",
        a: "プロジェクトの規模や複雑さによって異なりますが、Webサイトは1-3ヶ月、アプリは3-6ヶ月が一般的な目安です。詳細はお打ち合わせ時にご説明いたします。"
      },
      {
        q: "開発中の進捗確認はできますか？",
        a: "はい、定期的な進捗報告とデモンストレーションを行います。お客様にも開発過程にご参加いただけます。"
      },
      {
        q: "後から機能を追加することはできますか？",
        a: "可能です。保守契約を結んでいただければ、継続的な機能追加や改善に対応いたします。"
      }
    ]
  },
  {
    category: "料金について",
    questions: [
      {
        q: "支払い方法はどのようなものがありますか？",
        a: "銀行振込、クレジットカード決済に対応しています。分割払いについてもご相談ください。"
      },
      {
        q: "追加費用が発生することはありますか？",
        a: "基本的に事前にお見積もりした金額以外の費用は発生しません。仕様変更がある場合は事前にご相談いたします。"
      }
    ]
  }
]

const FAQPage = () => {
  return (
    <Layout pageTitle="よくある質問" pageDescription="Your Companyのサービスについてよくいただくご質問をまとめました。">
      <div className={styles.container}>
        <section className={styles.hero}>
          <SectionTitle level="h1" className={styles.heroTitle}>よくある質問</SectionTitle>
          <p className={styles.heroDescription}>
            お客様からよくいただくご質問をまとめました。
            こちらにない質問がございましたら、お気軽にお問い合わせください。
          </p>
        </section>

        <section className={styles.faqSection}>
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className={styles.faqCategory}>
              <h2 className={styles.categoryTitle}>{category.category}</h2>
              <div className={styles.questionsGrid}>
                {category.questions.map((faq, questionIndex) => (
                  <div key={questionIndex} className={styles.faqItem}>
                    <h3 className={styles.question}>Q. {faq.q}</h3>
                    <p className={styles.answer}>A. {faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className={styles.contactSection}>
          <h2 className={styles.contactTitle}>その他のご質問はこちら</h2>
          <p className={styles.contactDescription}>
            上記以外にもご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
          <a href="/contact" className={styles.contactButton}>
            お問い合わせはこちら
          </a>
        </section>
      </div>
    </Layout>
  )
}

export default FAQPage

export const Head = () => (
  <>
    <title>よくある質問 | Your Company</title>
    <meta name="description" content="Your Companyのサービスについてよくいただくご質問をまとめました。" />
  </>
)
