import React, { useState } from "react"
import Layout from "../components/templates/Layout"
import SectionTitle from "../components/atoms/SectionTitle"
import Button from "../components/atoms/Button"
import * as styles from "./contact.module.css"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // フォーム送信処理（実際の実装では適切なAPIに送信）
    console.log('Form submitted:', formData)
    alert('お問い合わせありがとうございます。担当者より連絡いたします。')
  }

  return (
    <Layout
      pageTitle="お問い合わせ"
      pageDescription="サービスに関するご質問やご相談がございましたら、お気軽にお問い合わせください。専門スタッフが丁寧にお答えいたします。"
    >
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <SectionTitle level="h1" className={styles.heroTitle}>
              お問い合わせ
            </SectionTitle>
            <p className={styles.heroDescription}>
              サービスに関するご質問やご相談がございましたら、
              お気軽にお問い合わせください。専門スタッフが丁寧にお答えいたします。
            </p>
          </div>
        </section>

        <div className={styles.contentGrid}>
          <section className={styles.formSection}>
            <h2 className={styles.formTitle}>お問い合わせフォーム</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  お名前 <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  メールアドレス <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="company" className={styles.label}>
                  会社名
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="service" className={styles.label}>
                  ご興味のあるサービス
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={styles.select}
                >
                  <option value="">選択してください</option>
                  <option value="web">Webサイト制作</option>
                  <option value="app">アプリ開発</option>
                  <option value="consulting">DXコンサルティング</option>
                  <option value="support">技術サポート</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  お問い合わせ内容 <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  rows="6"
                  placeholder="ご質問やご相談内容をお聞かせください"
                  required
                />
              </div>

              <div className={styles.submitWrapper}>
                <Button type="submit" variant="primary" size="large">
                  送信する
                </Button>
              </div>
            </form>
          </section>

          <section className={styles.infoSection}>
            <h2 className={styles.infoTitle}>その他のお問い合わせ方法</h2>
            
            <div className={styles.contactMethods}>
              <div className={styles.contactMethod}>
                <h3 className={styles.methodTitle}>📞 お電話でのお問い合わせ</h3>
                <p className={styles.methodValue}>03-1234-5678</p>
                <p className={styles.methodDescription}>
                  平日 9:00-18:00（土日祝日を除く）
                </p>
              </div>

              <div className={styles.contactMethod}>
                <h3 className={styles.methodTitle}>✉️ メールでのお問い合わせ</h3>
                <p className={styles.methodValue}>info@yourcompany.com</p>
                <p className={styles.methodDescription}>
                  24時間受付（営業日にご返信いたします）
                </p>
              </div>

              <div className={styles.contactMethod}>
                <h3 className={styles.methodTitle}>🏢 オフィス</h3>
                <p className={styles.methodValue}>
                  東京都渋谷区〇〇1-2-3<br />
                  〇〇ビル 5F
                </p>
                <p className={styles.methodDescription}>
                  ※事前にお電話でご連絡ください
                </p>
              </div>
            </div>

            <div className={styles.responseTime}>
              <h3 className={styles.responseTitle}>📋 お問い合わせ後の流れ</h3>
              <ul className={styles.responseSteps}>
                <li>お問い合わせ受付確認メールを自動送信</li>
                <li>担当者が内容を確認（営業日1-2日以内）</li>
                <li>担当者よりお電話またはメールでご連絡</li>
                <li>必要に応じて無料相談のお打ち合わせを設定</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage

export const Head = () => (
  <>
    <title>お問い合わせ | Your Company</title>
    <meta name="description" content="サービスに関するご質問やご相談がございましたら、お気軽にお問い合わせください。専門スタッフが丁寧にお答えいたします。" />
  </>
)
