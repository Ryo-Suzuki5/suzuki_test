# suzuki_testの目的

typescript、codeceptsjsを学ぶために作成したリポジトリ。


## リポジトリの概要

このリポジトリは、typescript、codeceptsjsを使用して下記サイトで、タイピングを自動化で行うためのものです。

https://www.e-typing.ne.jp/


## 初期準備

1.タイピングサイトにて会員登録する必要があります。
会員登録した情報を`codecept.conf.ts`の`登録したメールアドレス`と`登録したパスワード`の箇所を書き換える。
```
     login: (I) => {
            I.amOnPage("https://www.e-typing.ne.jp/roma/variety/business.asp");
            I.fillField('f_em', '登録したメールアドレス');
            I.fillField('f_pw', '登録したパスワード');
            I.click('ログイン');
            I.wait(3);
          },
```
2.`npm install`を実行する
-`npm install`
