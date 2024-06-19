# suzuki_testの目的

typescript、codeceptsjsを学ぶために作成したリポジトリ。

## リポジトリの概要

このリポジトリは、typescript、codeceptsjsを使用して下記サイトで、タイピングを自動化で行うためのものです。
https://www.e-typing.ne.jp/

## 初期準備

https://www.e-typing.ne.jp/にて会員登録する必要があります。
`codecept.conf.ts`の`f_em(メールアドレス)`と`f_pw(パスワード)`を書き換える
```
     login: (I) => {
            I.amOnPage("https://www.e-typing.ne.jp/roma/variety/business.asp");
            I.fillField('f_em', '登録したメールアドレス');
            I.fillField('f_pw', '登録したパスワード');
            I.click('ログイン');
            I.wait(3);
          },
```