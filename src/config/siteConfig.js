/**
 * Site Navigation Configuration
 * サイト全体のナビゲーション設定を管理
 */

export const siteConfig = {
  // サイト情報
  siteName: "Your Company",
  siteDescription: "企業サイトの説明文",
  
  // メインナビゲーション
  mainNavigation: [
    { label: "ホーム", path: "/", active: true },
    { label: "サービス", path: "/services", submenu: [
      { label: "Webサイト制作", path: "/services/web" },
      { label: "アプリ開発", path: "/services/app" },
      { label: "DXコンサルティング", path: "/services/consulting" },
      { label: "技術サポート", path: "/services/support" }
    ]},
    { label: "会社情報", path: "/about", submenu: [
      { label: "会社概要", path: "/about" },
      { label: "沿革", path: "/history" },
      { label: "チーム紹介", path: "/team" }
    ]},
    { label: "お問い合わせ", path: "/contact" }
  ],
  
  // CTAボタン設定
  ctaButton: {
    label: "無料相談",
    path: "/contact",
    variant: "primary"
  },
  
  // フッターナビゲーション
  footerNavigation: {
    companyInfo: {
      title: "会社情報",
      links: [
        { label: "会社概要", path: "/about" },
        { label: "沿革", path: "/history" },
        { label: "チーム紹介", path: "/team" },
        { label: "採用情報", path: "/careers" }
      ]
    },
    services: {
      title: "サービス",
      links: [
        { label: "Webサイト制作", path: "/services/web" },
        { label: "アプリ開発", path: "/services/app" },
        { label: "DXコンサルティング", path: "/services/consulting" },
        { label: "技術サポート", path: "/services/support" }
      ]
    },
    support: {
      title: "サポート",
      links: [
        { label: "お問い合わせ", path: "/contact" },
        { label: "よくある質問", path: "/faq" },
        { label: "プライバシーポリシー", path: "/privacy" },
        { label: "利用規約", path: "/terms" }
      ]
    }
  },
  
  // 連絡先情報
  contactInfo: {
    phone: "03-1234-5678",
    email: "info@yourcompany.com",
    address: "東京都渋谷区〇〇1-2-3\n〇〇ビル 5F",
    businessHours: "平日 9:00-18:00"
  },
  
  // ソーシャルメディア
  socialMedia: [
    { platform: "Twitter", label: "X", url: "https://twitter.com", ariaLabel: "Twitter" },
    { platform: "Facebook", label: "FB", url: "https://facebook.com", ariaLabel: "Facebook" },
    { platform: "LinkedIn", label: "IN", url: "https://linkedin.com", ariaLabel: "LinkedIn" },
    { platform: "Instagram", label: "IG", url: "https://instagram.com", ariaLabel: "Instagram" }
  ]
}

// 特定ページ用の設定を生成する関数
export const createPageConfig = (overrides = {}) => {
  return {
    ...siteConfig,
    ...overrides
  }
}

// ランディングページ用設定例
export const landingPageConfig = createPageConfig({
  mainNavigation: [
    { label: "機能", path: "#features" },
    { label: "料金", path: "#pricing" },
    { label: "お客様の声", path: "#testimonials" },
    { label: "お問い合わせ", path: "#contact" }
  ],
  ctaButton: {
    label: "今すぐ始める",
    path: "/signup",
    variant: "primary"
  }
})

export default siteConfig
