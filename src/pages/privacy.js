import React from "react"
import Layout from "../components/templates/Layout"
import SectionTitle from "../components/atoms/SectionTitle"
import * as styles from "./privacy.module.css"

const PrivacyPage = () => {
  return (
    <Layout pageTitle="プライバシーポリシー" pageDescription="Your Companyのプライバシーポリシーです。個人情報の取り扱いについて詳しく説明しています。">
      <div className={styles.container}>
        <section className={styles.hero}>
          <SectionTitle level="h1" className={styles.heroTitle}>プライバシーポリシー</SectionTitle>
          <p className={styles.lastUpdated}>最終更新日：2024年1月1日</p>
        </section>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. 基本方針</h2>
            <p className={styles.text}>
              Your Company（以下「当社」）は、個人情報保護の重要性を認識し、個人情報の保護に関する法律及び関連法令等を遵守し、
              お客様の個人情報を適切に取り扱うことをお約束いたします。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. 個人情報の定義</h2>
            <p className={styles.text}>
              本プライバシーポリシーにおいて「個人情報」とは、生存する個人に関する情報であって、
              当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの
              （他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含む）をいいます。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. 個人情報の収集</h2>
            <p className={styles.text}>
              当社は、以下の方法により個人情報を収集することがあります：
            </p>
            <ul className={styles.list}>
              <li>お問い合わせフォームからの送信</li>
              <li>サービス申込時の入力</li>
              <li>電話やメールでのお問い合わせ</li>
              <li>各種セミナーやイベントでの登録</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. 個人情報の利用目的</h2>
            <p className={styles.text}>
              当社は、収集した個人情報を以下の目的で利用いたします：
            </p>
            <ul className={styles.list}>
              <li>サービスの提供・運営</li>
              <li>お客様からのお問い合わせへの対応</li>
              <li>サービスの改善・新サービスの開発</li>
              <li>各種ご案内・情報提供</li>
              <li>利用規約違反等の対応</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. 個人情報の第三者提供</h2>
            <p className={styles.text}>
              当社は、以下の場合を除き、お客様の同意なく第三者に個人情報を提供することはありません：
            </p>
            <ul className={styles.list}>
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. 個人情報の安全管理</h2>
            <p className={styles.text}>
              当社は、個人情報の漏洩、滅失または毀損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. 個人情報の開示・訂正等</h2>
            <p className={styles.text}>
              お客様は、当社の保有する自己の個人情報について、開示、訂正、追加、削除、利用停止、消去および第三者提供の停止を求めることができます。
              これらのご請求については、以下のお問い合わせ先までご連絡ください。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Cookieについて</h2>
            <p className={styles.text}>
              当社のWebサイトでは、サービス向上のためCookieを使用する場合があります。
              Cookieの使用を希望されない場合は、ブラウザの設定でCookieを無効にしてください。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>9. プライバシーポリシーの変更</h2>
            <p className={styles.text}>
              当社は、必要に応じて本プライバシーポリシーを変更することがあります。
              変更後のプライバシーポリシーは、当社Webサイトに掲載したときから効力を生じるものとします。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>10. お問い合わせ</h2>
            <p className={styles.text}>
              本プライバシーポリシーに関するお問い合わせは、以下までご連絡ください：
            </p>
            <div className={styles.contact}>
              <p>Your Company</p>
              <p>メール：info@yourcompany.com</p>
              <p>電話：03-1234-5678</p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default PrivacyPage

export const Head = () => (
  <>
    <title>プライバシーポリシー | Your Company</title>
    <meta name="description" content="Your Companyのプライバシーポリシーです。個人情報の取り扱いについて詳しく説明しています。" />
  </>
)
