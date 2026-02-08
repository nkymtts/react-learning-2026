# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

【ページ一覧】

1. TOPページ
2. クイズページ
3. 結果ページ

【機能一覧】

1. TOPページ

- ボタン: 押したらクイズページへ遷移

2. クイズページ

- 問題文を表示
- 選択肢を表示
- 押したら...
  1. 成語判定を行い、記録しておく
  2. 問題文がまだあれば次の問題文を表示
  3. 問題文がもうなければ結果ページへ遷移

3. 結果ページ

- 表示までの演出(カーテンコール)を1~2秒表示させて非表示
- クラッカー演出
- 問題総数と正解数を取得し、表示
