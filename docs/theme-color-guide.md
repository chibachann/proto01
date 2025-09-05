# テーマカラー管理ガイド

## 概要

このプロジェクトでは、CSS Custom Properties（CSS変数）を使用してテーマカラーを一元管理しています。

## カラー変更方法

### 1. メインカラーの変更

`src/styles/theme.css` の以下の値を変更するだけで、サイト全体のメインカラーが変更されます：

```css
:root {
  --color-primary: 135, 20, 37;     /* ← この値を変更 */
  --color-secondary: 46, 10, 25;    /* ← この値を変更 */
  --color-accent: 197, 207, 195;    /* ← この値を変更 */
}
```

### 2. 色の値の形式

色の値は **RGB値をカンマ区切り** で指定します（`rgb()`は含めません）：

```css
/* 例: 青色のテーマに変更する場合 */
:root {
  --color-primary: 30, 64, 175;     /* blue-700 */
  --color-secondary: 15, 23, 42;    /* slate-900 */
  --color-accent: 148, 163, 184;    /* slate-400 */
}
```

### 3. 使用可能なカラー変数

| 変数名 | 用途 | 使用例 |
|--------|------|--------|
| `--color-primary-rgb` | メインカラー | ヘッダー背景、ボタン |
| `--color-secondary-rgb` | サブカラー1 | ナビゲーション、アクセント |
| `--color-accent-rgb` | サブカラー2 | テキスト、ボーダー |
| `--text-primary` | プライマリテキスト | 通常は白 |
| `--text-secondary` | セカンダリテキスト | アクセントカラー |

## 使用例

### CSSでの使用

```css
.my-component {
  background-color: var(--color-primary-rgb);
  color: var(--text-primary);
  border: 1px solid var(--color-accent-rgb);
}

/* アルファ値付きで使用する場合 */
.overlay {
  background-color: rgba(var(--color-primary), 0.8);
}
```

### 新しいコンポーネントでの使用

```css
/* ✅ 推奨: CSS変数を使用 */
.new-button {
  background-color: var(--color-primary-rgb);
}

/* ❌ 非推奨: 直接色指定 */
.new-button {
  background-color: rgb(135, 20, 37);
}
```

## カラーパレット例

### 1. 企業ブルー
```css
:root {
  --color-primary: 30, 64, 175;     /* blue-700 */
  --color-secondary: 15, 23, 42;    /* slate-900 */
  --color-accent: 148, 163, 184;    /* slate-400 */
}
```

### 2. ナチュラルグリーン
```css
:root {
  --color-primary: 22, 101, 52;     /* green-700 */
  --color-secondary: 20, 83, 45;    /* green-800 */
  --color-accent: 187, 247, 208;    /* green-200 */
}
```

### 3. エレガントパープル
```css
:root {
  --color-primary: 109, 40, 217;    /* purple-700 */
  --color-secondary: 88, 28, 135;   /* purple-800 */
  --color-accent: 196, 181, 253;    /* purple-300 */
}
```

### 4. ウォームオレンジ
```css
:root {
  --color-primary: 194, 65, 12;     /* orange-700 */
  --color-secondary: 154, 52, 18;   /* orange-800 */
  --color-accent: 254, 215, 170;    /* orange-200 */
}
```

## デバッグ機能

### カラープレビューの表示

開発時にテーマカラーを確認したい場合は、以下のクラスを`<body>`タグに追加：

```html
<body class="theme-preview visible">
```

これにより、画面右上にカラーサンプルが表示されます。

## 注意事項

1. **RGB値のみ指定**: `rgb()`や`#`は含めず、数値のみを指定してください
2. **カンマ区切り**: 3つの数値をカンマで区切って指定してください
3. **0-255の範囲**: 各RGB値は0-255の範囲で指定してください
4. **キャッシュクリア**: 変更が反映されない場合は、ブラウザのキャッシュをクリアしてください

## トラブルシューティング

### Q: 色が変更されない
A: ブラウザのキャッシュをクリアするか、開発サーバーを再起動してください。

### Q: 一部のコンポーネントだけ色が変わらない
A: そのコンポーネントが直接色指定している可能性があります。CSS変数を使用するように修正してください。

### Q: グラデーションが正しく表示されない
A: `linear-gradient()`内では `var(--color-primary-rgb)` の形式で使用してください。

---

**更新日**: 2025年9月5日  
**作成者**: 開発チーム
