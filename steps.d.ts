/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type typing = typeof import('./typing_steps_file');
type random = typeof import('./random_steps_file');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, 私は: 私は, login: any, typ: any, random: any }
  interface Methods extends Playwright { }
  interface I extends ReturnType<steps_file> { }
  interface 私は extends WithTranslation<Methods> { }
  namespace Translation {
    interface Actions {
      "amOutsideAngularApp": "Angularの外に出る",
      "amInsideAngularApp": "Angularの中に入る",
      "waitForElement": "要素を待つ",
      "waitForClickable": "クリック可能になるまで待つ",
      "waitForVisible": "要素が見えるようになるまで待つ",
      "waitForText": "テキストが表示されるまで待つ",
      "moveTo": "移動する",
      "refresh": "更新する",
      "haveModule": "モジュールを持っている",
      "resetModule": "モジュールをリセットする",
      "amOnPage": "ページを移動する",
      "click": "クリックする",
      "doubleClick": "ダブルクリックする",
      "see": "テキストがあることを確認する",
      "dontSee": "テキストがないことを確認する",
      "selectOption": "オプションを選ぶ",
      "fillField": "フィールドに入力する",
      "pressKey": "キー入力する",
      "triggerMouseEvent": "マウスイベントを発火させる",
      "attachFile": "ファイルを添付する",
      "seeInField": "フィールドに文字が入っていることを確認する",
      "dontSeeInField": "フィールドに文字が入っていないことを確認する",
      "appendField": "フィールドに文字を追加する",
      "checkOption": "オプションをチェックする",
      "seeCheckboxIsChecked": "チェックされていることを確認する",
      "dontSeeCheckboxIsChecked": "チェックされていないことを確認する",
      "grabTextFrom": "テキストを取得する",
      "grabValueFrom": "入力値を取得する",
      "grabAttributeFrom": "要素を取得する",
      "seeInTitle": "タイトルに文字が含まれていることを確認する",
      "dontSeeInTitle": "タイトルに文字が含まれないことを確認する",
      "grabTitle": "タイトルを取得する",
      "seeElement": "要素があることを確認する",
      "dontSeeElement": "要素がないことを確認する",
      "seeInSource": "ソースにあることを確認する",
      "dontSeeInSource": "ソースにないことを確認する",
      "executeScript": "スクリプトを実行する",
      "executeAsyncScript": "非同期スクリプトを実行する",
      "seeInCurrentUrl": "URLに含まれることを確認する",
      "dontSeeInCurrentUrl": "URLに含まれないことを確認する",
      "seeCurrentUrlEquals": "URLが等しいことを確認する",
      "dontSeeCurrentUrlEquals": "URLが等しくないことを確認する",
      "saveScreenshot": "スクリーンショットを保存する",
      "setCookie": "Cookieをセットする",
      "clearCookie": "Cookieをクリアする",
      "seeCookie": "Cookieに含まれることを確認する",
      "dontSeeCookie": "Cookieに含まれないことを確認する",
      "grabCookie": "Cookieを取得する",
      "resizeWindow": "ウィンドウをリサイズする",
      "wait": "待つ"
    }
  }
}

declare const フィーチャ: typeof Feature;
declare const シナリオ: typeof Scenario;
declare const シナリオアウトライン: typeof ScenarioOutline;