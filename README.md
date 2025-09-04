# Corporate Website

Gatsby を使用したコーポレートサイトプロジェクト

## 🎨 設計思想

### Atomic Design
本プロジェクトは **Atomic Design** の原則に基づいて構築されています。

- **Atoms**: 最小単位のコンポーネント（Button, Logo, Typography など）
- **Molecules**: Atomsを組み合わせた機能単位（Navigation など）
- **Organisms**: Molecules/Atomsを統合した複合コンポーネント（Header, Footer など）
- **Templates**: ページレイアウトの構造
- **Pages**: 実際のページコンポーネント

### カラーパレット
- **メインカラー**: `rgb(135, 20, 37)`
- **サブカラー1**: `rgb(46, 10, 25)`
- **サブカラー2**: `rgb(197, 207, 195)`

### レスポンシブ対応
- モバイルファースト設計
- 段階的なブレークポイント対応
- CSS Grid & Flexbox による柔軟なレイアウト

## 🚀 開発開始

### 前提条件
- Node.js (v18以上推奨)
- npm または yarn

### セットアップ
```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run develop
```

開発サーバーは http://localhost:8000 で起動します。

### ビルド
```bash
# 本番用ビルド
npm run build

# ビルド結果のプレビュー
npm run serve
```

## 📁 プロジェクト構造

```
src/
├── components/
│   ├── atoms/          # 最小単位のコンポーネント
│   ├── molecules/      # 機能単位のコンポーネント
│   ├── organisms/      # 複合コンポーネント
│   ├── templates/      # ページテンプレート
│   └── pages/          # ページコンポーネント
├── pages/              # Gatsbyページファイル
├── styles/             # グローバルスタイル
└── images/             # 画像ファイル
```

## 📚 ドキュメント

詳細な技術仕様やコンポーネントの使用方法については、`docs/` ディレクトリをご参照ください。

- [Header Components](./docs/header-components.md) - ヘッダー関連コンポーネントの詳細

## 🛠️ 技術スタック

- **Framework**: Gatsby
- **Language**: JavaScript (React)
- **Styling**: CSS Modules
- **Design System**: Atomic Design
- **Build Tool**: Webpack (Gatsby内蔵)
