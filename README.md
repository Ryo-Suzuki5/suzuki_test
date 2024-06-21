﻿# suzuki_testの目的

typescript、codeceptsjsを学ぶために作成したリポジトリ。


## リポジトリの概要

このリポジトリは、typescript、codeceptsjsを使用して下記サイトで、タイピングを自動化で行うためのものです。  
https://www.e-typing.ne.jp/


## 初期準備

1.タイピングサイトにて会員登録する必要があります。  
   - 会員登録した情報を`.env`の`登録したメールアドレス`と`登録したパスワード`の箇所を書き換える。
```
HEADLESS=true
MAIL=登録したメールアドレス
PASS=登録したパスワード
```
2. `npm install`を実行する
   - `npm install`
3. `playwright`をインストール
   - `npx playwright install`
4. `dotenv`をインストール
   - `npm i dotenv`


## ヘッドレスモードの設定について  

ヘッドレスモードはデフォルトでは有効になっています。  
もし、無効にしたい場合は`.env.exampie`の`HEADLESS='true'`の`true`を`false`に変更してください。
```
HEADLESS=true
```


## テストする際のコマンド

- ローカルでのcodeseptjsを実行
  - `npx codeceptjs run`
 


## 実行の流れについて

実行後の流れは`タイピングサイトへ遷移`➡`会員としてログイン`➡`タイピング開始`➡`タイピング終了と同時にスクショ`➡`実行完了`になります。


- 実行時の動画  
https://github.com/Ryo-Suzuki5/suzuki_test/assets/146925012/0827be65-ec22-4110-880f-5c915274e116




- 実行後のスクショ
![screenshot_2024-6-18_15_26_3](https://github.com/Ryo-Suzuki5/suzuki_test/assets/146925012/2ffd25fc-b01e-4cd2-9de1-01696779a838)
