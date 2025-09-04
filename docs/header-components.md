# Header Component Documentation

## 概要
本プロジェクトのヘッダーコンポーネントは、Atomic Designの原則に基づいて設計されており、Atoms、Molecules、Organismsの3層に分解されています。

## アーキテクチャ

### Atomic Design 構造
```
Organisms/
├── Header (統合コンポーネント)
│
Molecules/
├── Navigation (ナビゲーションメニュー)
│
Atoms/
├── Logo (ロゴコンポーネント)
├── Button (汎用ボタン)
├── HamburgerMenu (ハンバーガーメニューアイコン)
└── Typography (文字スタイル)
```

## コンポーネント詳細

### Atoms

#### 1. Logo (`/src/components/atoms/Logo.js`)
**責務**: ロゴの表示とブランディング
**props**:
- `to` (string): リンク先のURL（デフォルト: "/"）
- `children` (ReactNode): ロゴテキスト

**特徴**:
- ホバー時の色変更エフェクト
- レスポンシブ対応（480px以下でサイズ調整）
- Typographyモジュールと連携

#### 2. Button (`/src/components/atoms/Button.js`)
**責務**: 汎用的なボタンコンポーネント
**props**:
- `to` (string): Gatsby Link用のパス
- `href` (string): 外部リンク用のURL
- `onClick` (function): クリックイベントハンドラー
- `variant` (string): スタイルバリエーション ("primary" | "secondary")
- `size` (string): サイズ ("small" | "medium" | "large")
- `block` (boolean): 横幅いっぱいにするかどうか
- `type` (string): ボタンタイプ（デフォルト: "button"）

**バリエーション**:
- **Primary**: スライドアニメーション付きのメインCTAボタン
- **Secondary**: モバイル用のシンプルボタン

**アニメーション**:
- グラデーション背景のスライドエフェクト
- ホバー時の浮き上がりエフェクト（translateY + box-shadow）

#### 3. HamburgerMenu (`/src/components/atoms/HamburgerMenu.js`)
**責務**: モバイル用ハンバーガーメニューアイコン
**props**:
- `isOpen` (boolean): メニューが開いているかどうか
- `onClick` (function): クリックイベントハンドラー

**アニメーション**:
- 3本線から×印への変形アニメーション
- CSS transform を使用した滑らかなトランジション

#### 4. Typography (`/src/components/atoms/Typography.module.css`)
**責務**: プロジェクト全体の文字スタイル統一
**提供クラス**:
- 見出し: `.heading1` ~ `.heading6`
- 本文: `.bodyLarge`, `.bodyMedium`, `.bodySmall`, `.caption`
- リンク: `.linkPrimary`, `.linkSecondary`, `.linkLight`
- 色: `.textPrimary`, `.textSecondary`, `.textAccent`
- ウェイト: `.fontLight` ~ `.fontBold`

### Molecules

#### Navigation (`/src/components/molecules/Navigation.js`)
**責務**: ナビゲーションメニューの管理（デスクトップ・モバイル両対応）
**props**:
- `isOpen` (boolean): モバイルメニューが開いているかどうか
- `onLinkClick` (function): リンククリック時のコールバック

**構成要素**:
- デスクトップナビゲーション（横並びメニュー）
- モバイルナビゲーション（サイドスライドメニュー）
- CTAボタン（モバイル用）

**レスポンシブ対応**:
- 1024px以下: パディング・フォントサイズの段階的縮小
- 768px以下: モバイルメニューに切り替え

**ホバーエフェクト**:
- 背景色のscaleYアニメーション（下から上へスライド）
- 文字の浮き上がりエフェクト
- ヘッダー全体の高さに合わせた背景カバー

### Organisms

#### Header (`/src/components/organisms/Header.js`)
**責務**: ヘッダー全体の統合・状態管理
**内部状態**:
- `isMobileMenuOpen`: モバイルメニューの開閉状態

**構成**:
- Logo（左端）
- Navigation（中央）
- CTAボタン（右端、デスクトップのみ）
- HamburgerMenu（右端、モバイルのみ）
- オーバーレイ（モバイルメニュー用）

## カラーパレット

### メインカラー
- **Primary**: `rgb(135, 20, 37)` - ヘッダー背景、ブランドカラー
- **Secondary**: `rgb(46, 10, 25)` - ホバー効果、アクセント
- **Accent**: `rgb(197, 207, 195)` - CTAボタン、ハイライト

### 使用箇所
- **ヘッダー背景**: Primary
- **ホバー背景**: Secondary  
- **CTAボタン**: Accent → Primary（スライド）
- **テキスト**: 白、Primary、Secondary、Accent

## レスポンシブ設計

### ブレークポイント
- **1024px以下**: 要素サイズの縮小開始
- **900px以下**: さらなる縮小
- **820px以下**: 最小サイズ
- **768px以下**: モバイルメニューに切り替え
- **480px以下**: 最小デバイス対応

### レスポンシブ戦略
1. **段階的縮小**: 768pxまでは要素サイズを段階的に縮小
2. **モバイル切り替え**: 768px以下でハンバーガーメニューに完全切り替え
3. **オーバーレイ**: モバイルメニュー時の背景オーバーレイ
4. **スライドアニメーション**: 右からのスライドイン

## アニメーション仕様

### ナビゲーションホバー
```css
transform: scaleY(0) → scaleY(1)  /* 背景スライド */
transform: translateY(-2px)       /* 文字浮き上がり */
transition: 0.3s ease
```

### CTAボタンホバー
```css
background-position: 100% → 0%    /* グラデーションスライド */
transform: translateY(-2px)       /* 浮き上がり */
box-shadow: 0 4px 8px rgba(0,0,0,0.2)  /* 影 */
transition: 0.4s ease
```

### モバイルメニュー
```css
right: -100% → 0%                /* サイドスライド */
opacity: 0 → 1                   /* オーバーレイフェード */
transition: 0.3s ease
```

### ハンバーガーアイコン
```css
/* 1本目 */ transform: rotate(-45deg) translate(-5px, 6px)
/* 2本目 */ opacity: 0
/* 3本目 */ transform: rotate(45deg) translate(-5px, -6px)
transition: 0.3s ease
```

## ファイル構成

```
src/components/
├── atoms/
│   ├── Logo.js
│   ├── Logo.module.css
│   ├── Button.js
│   ├── Button.module.css
│   ├── HamburgerMenu.js
│   ├── HamburgerMenu.module.css
│   ├── Typography.module.css
│   └── ...
├── molecules/
│   ├── Navigation.js
│   ├── Navigation.module.css
│   └── ...
└── organisms/
    ├── Header.js
    ├── Header.module.css
    └── ...
```

## 実装例

### 基本的な使用方法
```jsx
import Header from "../components/organisms/Header"

const Page = () => {
  return (
    <>
      <Header />
      <main>
        {/* ページコンテンツ */}
      </main>
    </>
  )
}
```

### Buttonの個別使用
```jsx
import Button from "../components/atoms/Button"

// Gatsby Link
<Button to="/contact" variant="primary" size="large">
  お問い合わせ
</Button>

// 外部リンク
<Button href="https://example.com" variant="secondary">
  外部サイト
</Button>

// イベントハンドラー
<Button onClick={handleClick} variant="primary">
  クリック
</Button>
```

### Logoの個別使用
```jsx
import Logo from "../components/atoms/Logo"

<Logo to="/">Company Name</Logo>
```

## 保守・拡張ガイド

### 新しいナビゲーションアイテムの追加
`Navigation.js`の`navItems`配列に追加:
```jsx
const navItems = [
  // 既存のアイテム...
  { to: "/new-page", label: "新しいページ" },
]
```

### 新しいボタンバリエーションの追加
1. `Button.module.css`にスタイルを追加
2. `Button.js`のpropsで新しいvariantを受け取る

### カラーパレットの変更
各コンポーネントのCSSファイルでrgb値を一括置換

### アニメーション速度の調整
各CSSファイルの`transition`プロパティを変更

## パフォーマンス考慮事項

- CSS Modulesによるスタイルの局所化
- コンポーネントの適切な分離による再利用性
- 不要なre-renderの防止
- アニメーションのGPUアクセラレーション（transform使用）

## アクセシビリティ

- セマンティックHTMLの使用（nav, header, button）
- キーボードナビゲーション対応
- aria-labelの適切な設定
- カラーコントラストの確保
- フォーカス状態の明確な表示
