import React from "react"
import Layout from "../components/templates/Layout"
import SectionTitle from "../components/atoms/SectionTitle"
import * as styles from "./terms.module.css"

const TermsPage = () => {
  return (
    <Layout pageTitle="利用規約" pageDescription="Your Companyの利用規約です。サービスをご利用いただく際の条件について説明しています。">
      <div className={styles.container}>
        <section className={styles.hero}>
          <SectionTitle level="h1" className={styles.heroTitle}>利用規約</SectionTitle>
          <p className={styles.lastUpdated}>最終更新日：2024年1月1日</p>
        </section>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>第1条（適用）</h2>
            <p className={styles.text}>
              本規約は、Your Company（以下「当社」）が提供するサービス（以下「本サービス」）の利用条件を定めるものです。
              ユーザーの皆さまには、本規約に従って、本サービスをご利用いただきます。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>第2条（利用登録）</h2>
            <p className={styles.text}>
              利用登録は、利用希望者が本規約に同意の上、当社の定める方法によって利用登録の申請を行い、
              当社がこれを承認することによって完了するものとします。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>第3条（ユーザーIDおよびパスワードの管理）</h2>
            <p className={styles.text}>
              ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを適切に管理するものとします。
              ユーザーは、いかなる場合にも、ユーザーIDおよびパスワードを第三者に譲渡または貸与し、
              もしくは第三者と共用することはできません。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>第4条（禁止事項）</h2>
            <p className={styles.text}>
              ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
            </p>
            <ul className={styles.list}>
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当社、本サービスの他の利用者、または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
              <li>当社のサービスの運営を妨害するおそれのある行為</li>
              <li>他の利用者に関する個人情報等を収集または蓄積する行為</li>
              <li>不正アクセスをし、またはこれを試みる行為</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>第5条（本サービスの提供の停止等）</h2>
            <p className={styles.text}>
              当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
            </p>
            <ul className={styles.list}>
              <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
              <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
              <li>コンピュータまたは通信回線等が事故により停止した場合</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>第6条（保証の否認および免責事項）</h2>
            <p className={styles.text}>
              当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、
              セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>第7条（サービス内容の変更等）</h2>
            <p className={styles.text}>
              当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、
              これによってユーザーに生じた損害について一切の責任を負いません。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>第8条（利用規約の変更）</h2>
            <p className={styles.text}>
              当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。
              なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>第9条（個人情報の取扱い）</h2>
            <p className={styles.text}>
              当社は、本サービスの利用によって取得する個人情報については、当社「プライバシーポリシー」に従い適切に取り扱うものとします。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>第10条（準拠法・裁判管轄）</h2>
            <p className={styles.text}>
              本規約の解釈にあたっては、日本法を準拠法とします。
              本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>お問い合わせ</h2>
            <p className={styles.text}>
              本規約に関するお問い合わせは、以下までご連絡ください：
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

export default TermsPage

export const Head = () => (
  <>
    <title>利用規約 | Your Company</title>
    <meta name="description" content="Your Companyの利用規約です。サービスをご利用いただく際の条件について説明しています。" />
  </>
)
