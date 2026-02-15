# 野町MBC 活動スケジュール

野町ミニバスケットボールクラブの活動スケジュールサイトです。

## 公開URL

https://nomachi-mbc.github.io/

## ファイル構成

- `index.html` - メインHTMLファイル
- `schedule_all.jsx` - 2月・3月・4月のスケジュールを統合したReactコンポーネント

## 更新方法

1. `schedule_all.jsx` を編集
2. GitHubにpush
3. 自動的にGitHub Pagesに反映されます

## ローカルでの確認方法

ファイルをWebサーバーで開く必要があります（CDNのCORS制限のため）。

```bash
# Python 3の場合
python -m http.server 8000

# ブラウザで開く
# http://localhost:8000
```

## 技術スタック

- React 18
- Tailwind CSS
- Lucide Icons
- Babel Standalone (JSX変換)

## 更新履歴

- 2026/02/15: 2月・3月・4月スケジュール統合版を作成
