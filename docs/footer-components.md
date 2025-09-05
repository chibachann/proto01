# Footer Component Documentation

## 概要
Footerコンポーネントは、Atomic Designの原則に基づいて設計された企業サイト向けのフッター実装です。設定駆動型のアーキテクチャにより、外部設定ファイル（`siteConfig.js`）から動的にコンテンツを生成し、高い保守性と再利用性を実現しています。

## アーキテクチャ

### Atomic Design 構造
```
Organisms/
├── Footer (統合コンポーネント)
│
Molecules/
├── FooterSection (フッターセクション)
├── ContactInfo (連絡先情報)
├── SocialLinks (ソーシャルメディアリンク)
│
Atoms/
├── SectionTitle (セクションタイトル)
├── FooterLink (フッターリンク)
├── ContactItem (連絡先アイテム)
└── SocialLink (ソーシャルメディアリンク)
```

## コンポーネント詳細

### Organisms

#### Footer (`/src/components/organisms/Footer.js`)
**責務**: フッター全体の統合・レイアウト管理・設定データの分配

**Props**:
```typescript
interface FooterProps {
  footerNavigation?: {
    companyInfo?: { title: string; links: LinkItem[] };
    services?: { title: string; links: LinkItem[] };
    support?: { title: string; links: LinkItem[] };
  };
  contactInfo?: {
    title?: string;
    phone?: string;
    email?: string;
    address?: string;
    businessHours?: string;
  };
  socialMedia?: Array<{
    platform: string;
    label: string;
    url: string;
    ariaLabel: string;
  }>;
  siteName?: string;
  className?: string;
}

interface LinkItem {
  label: string;
  path: string;
}
```

**構成**:
1. **上部セクション** (`styles.grid`):
   - 会社情報ナビゲーション（FooterSection）
   - サービスナビゲーション（FooterSection）
   - サポートナビゲーション（FooterSection）
   - 連絡先情報（ContactInfo）

2. **区切り線** (`styles.divider`):
   - セクション間の視覚的分離

3. **下部セクション** (`styles.bottom`):
   - 著作権表示（動的年表示）
   - ソーシャルメディアリンク（SocialLinks）

**特徴**:
- 設定データが未定義の場合、該当セクションを自動的に非表示
- 現在年を動的に取得・表示
- CSS Grid によるレスポンシブレイアウト
- 外部設定ファイルとの完全統合

### Molecules

#### FooterSection (`/src/components/molecules/FooterSection.js`)
**責務**: フッター内のナビゲーションセクション管理

**Props**:
```typescript
interface FooterSectionProps {
  title: string;
  links: Array<{
    label: string;
    to: string;
  }>;
  className?: string;
}
```

**構成**:
- SectionTitle: セクションのタイトル表示
- リンクリスト: FooterLinkコンポーネントのul/li構造

**使用例**:
```jsx
<FooterSection 
  title="会社情報" 
  links={[
    { label: "会社概要", to: "/about" },
    { label: "沿革", to: "/history" }
  ]} 
/>
```

#### ContactInfo (`/src/components/molecules/ContactInfo.js`)
**責務**: 連絡先情報の表示・管理

**Props**:
```typescript
interface ContactInfoProps {
  contactData?: {
    title?: string;
    phone?: string;
    email?: string;
    address?: string;
    businessHours?: string;
  };
  className?: string;
}
```

**特徴**:
- 各連絡先項目の有無を動的判定
- 複数行対応（住所等の改行処理）
- アイコン付きの視覚的表示
- データがない場合は完全に非表示

**アイコンマッピング**:
- 📞 電話番号（phone）
- ✉️ メールアドレス（email）
- 📍 住所（address）
- 🕒 営業時間（businessHours）

#### SocialLinks (`/src/components/molecules/SocialLinks.js`)
**責務**: ソーシャルメディアリンクの管理・表示

**Props**:
```typescript
interface SocialLinksProps {
  socialData?: Array<{
    platform: string;
    label: string;
    url: string;
    ariaLabel: string;
  }>;
  className?: string;
}
```

**特徴**:
- 配列データから動的にリンク生成
- データがない場合は完全に非表示
- SocialLinkアトムとの連携
- アクセシビリティ対応（aria-label）

### Atoms

#### SectionTitle (`/src/components/atoms/SectionTitle.js`)
**責務**: フッター内セクションタイトルの統一表示

**特徴**:
- Typography.module.cssとの連携
- 一貫したタイトルスタイリング
- セマンティックなHTML構造

#### FooterLink (`/src/components/atoms/FooterLink.js`)
**責務**: フッター内ナビゲーションリンクの表示

**Props**:
```typescript
interface FooterLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
}
```

**特徴**:
- Gatsby Linkとの統合
- ホバーエフェクト
- 適切なセマンティクス

#### ContactItem (`/src/components/atoms/ContactItem.js`)
**責務**: 連絡先情報の個別アイテム表示

**Props**:
```typescript
interface ContactItemProps {
  icon: string;
  children: ReactNode;
  className?: string;
}
```

**特徴**:
- アイコン + テキストのレイアウト
- 改行対応
- 視覚的な情報階層

#### SocialLink (`/src/components/atoms/SocialLink.js`)
**責務**: ソーシャルメディアリンクの個別表示

**Props**:
```typescript
interface SocialLinkProps {
  href: string;
  children: ReactNode;
  ariaLabel: string;
  className?: string;
}
```

**特徴**:
- 外部リンク対応（target="_blank", rel="noopener noreferrer"）
- アクセシビリティ配慮
- ホバーエフェクト

## 設定駆動型アーキテクチャ

### siteConfig.js連携
```javascript
// /src/config/siteConfig.js
export const siteConfig = {
  siteName: "Your Company",
  
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
  
  contactInfo: {
    phone: "03-1234-5678",
    email: "info@yourcompany.com",
    address: "東京都渋谷区〇〇1-2-3\n〇〇ビル 5F",
    businessHours: "平日 9:00-18:00"
  },
  
  socialMedia: [
    { platform: "Twitter", label: "X", url: "https://twitter.com", ariaLabel: "Twitter" },
    { platform: "Facebook", label: "FB", url: "https://facebook.com", ariaLabel: "Facebook" },
    { platform: "LinkedIn", label: "IN", url: "https://linkedin.com", ariaLabel: "LinkedIn" },
    { platform: "Instagram", label: "IG", url: "https://instagram.com", ariaLabel: "Instagram" }
  ]
}
```

### Layout Template経由の使用
```jsx
// /src/components/templates/Layout.js
import { siteConfig } from "../../config/siteConfig"

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <Footer 
        footerNavigation={siteConfig.footerNavigation}
        contactInfo={siteConfig.contactInfo}
        socialMedia={siteConfig.socialMedia}
        siteName={siteConfig.siteName}
      />
    </div>
  )
}
```

## スタイリング仕様

### CSS Custom Properties活用
```css
/* /src/styles/theme.css */
:root {
  --color-primary-rgb: 135, 20, 37;      /* メインカラー */
  --color-secondary-rgb: 46, 10, 25;     /* サブカラー1 */
  --color-accent-rgb: 197, 207, 195;     /* サブカラー2 */
}

/* /src/components/organisms/Footer.module.css */
.footer {
  background-color: var(--color-primary-rgb);
  color: white;
}

.copyright {
  color: var(--color-accent-rgb);
}
```

### レスポンシブ設計

#### グリッドレイアウト
```css
/* デスクトップ */
.grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 3rem;
}

/* タブレット (1024px以下) */
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
}

/* モバイル (768px以下) */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  
  .bottom {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
```

#### ブレークポイント階層
1. **デスクトップ** (1025px〜): 4カラムレイアウト
2. **タブレット** (769px〜1024px): 2カラムレイアウト
3. **モバイル** (480px〜768px): 1カラムレイアウト
4. **小画面** (〜480px): 最小デバイス対応

### カラーパレット

#### 使用色
- **背景**: `var(--color-primary-rgb)` - メインブランドカラー
- **テキスト**: 白（メイン）、`var(--color-accent-rgb)`（著作権表示）
- **区切り線**: `rgba(197, 207, 195, 0.3)` - 半透明のアクセントカラー

#### アクセシビリティ
- 背景色とテキスト色のコントラスト比確保
- 色だけに依存しない情報設計
- 適切なセマンティクス

## 実装例

### 基本的な使用方法（Template経由）
```jsx
import Layout from "../components/templates/Layout"

const Page = () => {
  return (
    <Layout pageTitle="ページタイトル">
      <main>
        {/* ページコンテンツ */}
      </main>
    </Layout>
  )
}
```

### 個別使用（カスタム設定）
```jsx
import Footer from "../components/organisms/Footer"

const customFooterConfig = {
  footerNavigation: {
    companyInfo: {
      title: "カスタム会社情報",
      links: [
        { label: "特別ページ", path: "/special" }
      ]
    }
  },
  contactInfo: {
    phone: "090-1234-5678",
    email: "custom@company.com"
  },
  socialMedia: [
    { platform: "Twitter", label: "X", url: "https://twitter.com/custom", ariaLabel: "Twitter" }
  ],
  siteName: "Custom Company"
}

const CustomPage = () => {
  return (
    <>
      <main>{/* コンテンツ */}</main>
      <Footer 
        footerNavigation={customFooterConfig.footerNavigation}
        contactInfo={customFooterConfig.contactInfo}
        socialMedia={customFooterConfig.socialMedia}
        siteName={customFooterConfig.siteName}
      />
    </>
  )
}
```

### 部分的なカスタマイズ
```jsx
import Footer from "../components/organisms/Footer"
import { siteConfig } from "../config/siteConfig"

const PartialCustomPage = () => {
  const customContactInfo = {
    ...siteConfig.contactInfo,
    businessHours: "24時間対応" // 営業時間のみカスタマイズ
  }
  
  return (
    <>
      <main>{/* コンテンツ */}</main>
      <Footer 
        footerNavigation={siteConfig.footerNavigation}
        contactInfo={customContactInfo}
        socialMedia={siteConfig.socialMedia}
        siteName={siteConfig.siteName}
      />
    </>
  )
}
```

## 保守・拡張ガイド

### 新しいフッターセクションの追加

1. **設定ファイルの更新**:
```javascript
// siteConfig.js
footerNavigation: {
  // 既存のセクション...
  newSection: {
    title: "新しいセクション",
    links: [
      { label: "新項目1", path: "/new1" },
      { label: "新項目2", path: "/new2" }
    ]
  }
}
```

2. **Footerコンポーネントの更新**:
```jsx
// Footer.js
{footerNavigation.newSection && (
  <FooterSection 
    title={footerNavigation.newSection.title} 
    links={footerNavigation.newSection.links} 
  />
)}
```

### 連絡先項目の追加

1. **設定の拡張**:
```javascript
contactInfo: {
  // 既存の項目...
  fax: "03-1234-5679",
  website: "https://company.com"
}
```

2. **ContactInfoコンポーネントの更新**:
```jsx
const { title, phone, email, address, businessHours, fax, website } = contactData

const contactItems = [
  // 既存の項目...
  fax && { icon: "📠", content: fax },
  website && { icon: "🌐", content: website }
].filter(Boolean)
```

### ソーシャルメディアの追加
```javascript
socialMedia: [
  // 既存のプラットフォーム...
  { platform: "YouTube", label: "YT", url: "https://youtube.com/company", ariaLabel: "YouTube" },
  { platform: "TikTok", label: "TT", url: "https://tiktok.com/@company", ariaLabel: "TikTok" }
]
```

### スタイルのカスタマイズ

#### テーマカラーの変更
```css
/* theme.css */
:root {
  --color-primary-rgb: 100, 50, 200;     /* 新しいメインカラー */
  --color-secondary-rgb: 50, 25, 100;    /* 新しいサブカラー1 */
  --color-accent-rgb: 200, 220, 180;     /* 新しいサブカラー2 */
}
```

#### レイアウトの調整
```css
/* Footer.module.css */
.grid {
  grid-template-columns: 1fr 1fr 1fr 2fr; /* 比率の変更 */
  gap: 4rem; /* 間隔の調整 */
}
```

## パフォーマンス考慮事項

### コード分割と最適化
- CSS Modulesによるスタイルの局所化
- 条件付きレンダリングによる不要なDOMノード削減
- プロップスの適切なデフォルト値設定
- React.memoの活用可能箇所の特定

### メモリ効率
- 設定オブジェクトの参照の最適化
- 不変データ構造の活用
- リスト描画時のkey属性の適切な設定

### 読み込み速度
- 重要でないソーシャルメディアリンクの遅延読み込み検討
- 画像アイコンを使用する場合のlazy loading
- フォントファイルの最適化

## アクセシビリティ

### セマンティック構造
```html
<footer>
  <div> <!-- フッターコンテナ -->
    <div> <!-- ナビゲーションセクション -->
      <nav aria-label="会社情報">
        <h3>会社情報</h3>
        <ul>
          <li><a href="/about">会社概要</a></li>
        </ul>
      </nav>
    </div>
    <div> <!-- 連絡先セクション -->
      <h3>お問い合わせ</h3>
      <ul>
        <li><span>📞</span> 03-1234-5678</li>
      </ul>
    </div>
  </div>
  <div> <!-- 著作権・SNSセクション -->
    <p>© 2025 Company. All rights reserved.</p>
    <ul> <!-- ソーシャルメディアリンク -->
      <li><a href="https://twitter.com" aria-label="Twitter">X</a></li>
    </ul>
  </div>
</footer>
```

### キーボードナビゲーション
- 全リンクのtab順序設定
- フォーカス状態の視覚的表示
- ショートカットキーの提供（将来的拡張）

### スクリーンリーダー対応
- 適切なaria-label設定
- セクション見出しの階層構造
- 連絡先情報の意味的な構造化

## エラーハンドリング

### データの安全性
```jsx
// 設定データの検証例
const Footer = ({ footerNavigation = {}, contactInfo = {}, socialMedia = [] }) => {
  // 各データの存在確認後にコンポーネント描画
  {footerNavigation.companyInfo && (
    <FooterSection 
      title={footerNavigation.companyInfo.title} 
      links={footerNavigation.companyInfo.links || []} 
    />
  )}
}
```

### フォールバック対応
- 設定データ未定義時の適切な非表示処理
- 必須データの検証とデフォルト値設定
- エラー境界の設定（上位コンポーネント）

## テスト戦略

### 単体テスト
```javascript
// Footer.test.js例
describe('Footer Component', () => {
  test('renders with all sections when data provided', () => {
    // 完全な設定データでのレンダリングテスト
  })
  
  test('hides sections when data not provided', () => {
    // 部分的なデータでの条件付きレンダリングテスト
  })
  
  test('displays current year in copyright', () => {
    // 動的年表示のテスト
  })
})
```

### 統合テスト
- Layout Template経由での完全な描画テスト
- 設定ファイル変更時の反映確認
- レスポンシブ表示の検証

### ビジュアルリグレッションテスト
- 各ブレークポイントでのレイアウト確認
- テーマカラー変更時の見た目確認
- ホバーエフェクトの動作確認

## ファイル構成

```
src/components/
├── atoms/
│   ├── SectionTitle.js
│   ├── FooterLink.js
│   ├── FooterLink.module.css
│   ├── ContactItem.js
│   ├── ContactItem.module.css
│   ├── SocialLink.js
│   └── SocialLink.module.css
├── molecules/
│   ├── FooterSection.js
│   ├── FooterSection.module.css
│   ├── ContactInfo.js
│   ├── ContactInfo.module.css
│   ├── SocialLinks.js
│   └── SocialLinks.module.css
├── organisms/
│   ├── Footer.js
│   └── Footer.module.css
└── templates/
    ├── Layout.js
    └── Layout.module.css

src/config/
└── siteConfig.js

src/styles/
└── theme.css
```

## 将来的な拡張可能性

### 多言語対応
- i18n設定ファイルとの連携
- 言語別フッター設定の切り替え
- RTL言語のレイアウト対応

### CMS連携
- HeadlessCMSからのデータ取得
- 動的なメニュー更新機能
- コンテンツ管理者による編集インターフェース

### SEO強化
- 構造化データの埋め込み
- サイトマップリンクの追加
- 検索エンジン向けメタデータ

### マーケティング機能
- ニュースレター登録フォーム
- A/Bテスト対応コンポーネント
- アナリティクス埋め込み

これらの仕様に基づいて、保守性が高く拡張可能なFooterコンポーネントシステムが構築されています。
