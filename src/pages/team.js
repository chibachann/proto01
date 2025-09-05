import React from "react"
import { Link } from "gatsby"
import Layout from "../components/templates/Layout"
import SectionTitle from "../components/atoms/SectionTitle"
import Button from "../components/atoms/Button"
import * as styles from "./team.module.css"

const teamMembers = [
  {
    name: "田中 太郎",
    position: "代表取締役 CEO",
    description: "15年以上のIT業界経験を持ち、数多くのWebサービス開発をリード。お客様のビジネス成長をテクノロジーで支援することに情熱を注いでいます。",
    skills: ["経営戦略", "プロジェクトマネジメント", "ビジネス開発"]
  },
  {
    name: "佐藤 花子",
    position: "CTO / テックリード",
    description: "フルスタック開発者として10年の経験を持つ。最新技術の導入と品質向上に取り組み、チーム全体の技術力向上をサポートしています。",
    skills: ["React", "Node.js", "AWS", "DevOps"]
  },
  {
    name: "山田 次郎",
    position: "シニアデザイナー",
    description: "UI/UXデザインのスペシャリスト。ユーザー中心の設計思想で、使いやすく美しいデザインを追求しています。",
    skills: ["UI/UX", "Figma", "プロトタイピング", "ユーザビリティ"]
  },
  {
    name: "鈴木 美和",
    position: "マーケティングマネージャー",
    description: "デジタルマーケティングの専門家。データドリブンなアプローチで、お客様のビジネス成長をマーケティング面からサポートします。",
    skills: ["デジタルマーケティング", "SEO", "データ分析", "コンテンツ戦略"]
  }
]

const TeamPage = () => {
  return (
    <Layout
      pageTitle="チーム紹介"
      pageDescription="Your Companyのチームメンバーをご紹介します。経験豊富な専門家が、お客様のプロジェクトを成功に導きます。"
    >
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <SectionTitle level="h1" className={styles.heroTitle}>
              チーム紹介
            </SectionTitle>
            <p className={styles.heroDescription}>
              経験豊富な専門家が、お客様のプロジェクトを成功に導きます。
              多様なバックグラウンドを持つメンバーが、それぞれの専門性を活かして協力しています。
            </p>
          </div>
        </section>

        <section className={styles.teamSection}>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.memberCard}>
                <div className={styles.memberAvatar}>
                  <span className={styles.avatarInitial}>
                    {member.name.charAt(0)}
                  </span>
                </div>
                <div className={styles.memberContent}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberPosition}>{member.position}</p>
                  <p className={styles.memberDescription}>{member.description}</p>
                  <div className={styles.memberSkills}>
                    <h4 className={styles.skillsTitle}>スキル・専門分野</h4>
                    <div className={styles.skillsList}>
                      {member.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className={styles.skill}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.cultureSection}>
          <SectionTitle level="h2" className={styles.sectionTitle}>
            私たちの働き方
          </SectionTitle>
          <div className={styles.cultureGrid}>
            <div className={styles.cultureCard}>
              <div className={styles.cultureIcon}>🤝</div>
              <h3 className={styles.cultureTitle}>チームワーク</h3>
              <p className={styles.cultureDescription}>
                個々の専門性を活かしながら、チーム一丸となってお客様の課題解決に取り組みます。
              </p>
            </div>
            <div className={styles.cultureCard}>
              <div className={styles.cultureIcon}>📚</div>
              <h3 className={styles.cultureTitle}>継続的学習</h3>
              <p className={styles.cultureDescription}>
                最新技術の習得と自己成長を重視し、常に新しい知識を学び続けています。
              </p>
            </div>
            <div className={styles.cultureCard}>
              <div className={styles.cultureIcon}>🎯</div>
              <h3 className={styles.cultureTitle}>品質重視</h3>
              <p className={styles.cultureDescription}>
                妥協のない品質を追求し、お客様に最高のサービスを提供することを心がけています。
              </p>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>一緒に働く仲間を募集中</h2>
            <p className={styles.ctaDescription}>
              私たちと一緒に、テクノロジーで社会に貢献したい方をお待ちしています。
            </p>
            <div className={styles.ctaButtons}>
              <Link to="/careers">
                <Button variant="primary" size="large">
                  採用情報を見る
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="large">
                  お問い合わせ
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default TeamPage

export const Head = () => (
  <>
    <title>チーム紹介 | Your Company</title>
    <meta name="description" content="Your Companyのチームメンバーをご紹介します。経験豊富な専門家が、お客様のプロジェクトを成功に導きます。" />
  </>
)
