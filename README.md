# タスク管理アプリ
## 概要
trelloのようにカードやリストを作成し、タスク管理ができるアプリです。

## アプリケーションの機能一覧
タスクカード作成  
タスクリスト作成  
カード・リストドラッグ機能  
レスポンシブ対応

## 使用技術(開発環境)
vueCLI  
JavaScript  
scss  
Firebase(デプロイ)

## 本番環境
https://todo-inamu.web.app/

## DEMO(gif)
https://gyazo.com/2c7e629e7fb6b038d78afd1e858cdebb

## 制作背景(意図)
個人アプリを作成するために、自身のタスク管理アプリを使用して制作したいと思い作りました。

## 工夫したポイント
・ブラウザを閉じて再度開き直しても、前回使用したものをそのまま使えるようにローカルストレージにデータを保存できるようにした。  
・文字を入力する際にaddボタンの色を変更し、分かりやすいようにした。    
・カードをドラッグして移動できる。

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
