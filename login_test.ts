Feature('タイピング自動化テスト');

// Alternatively log in for one scenario.
Scenario('タイピングを自動化するテスト', async ({ I, login }) => {
    login('suzuki');
    I.wait(3);
    I.click('ビジネス格言');
    I.wait(3);
    within({ frame: 'iframe#typing_content' }, async () => {
        I.click('#start_btn');

        I.wait(3);
        I.pressKey('Space');
        I.wait(3);


        let result = false;
        while (!result) {
            let resulttext = await I.grabNumberOfVisibleElements('#result');
            if (resulttext > 0) {
                result = true; // '今回のタイピング結果'が見つかった場合、ループを終了
                I.wait(1);
                I.saveScreenshot('screenshot.png'); // スクリーンショットを保存
                I.wait(5);
            } else {
                let typingdata = await I.grabHTMLFrom('#sentenceText span:nth-child(2)');
                //console.log(typingdata);
                let typingArray = typingdata.split('');// 取得した文字を一文字づつの配列に変換

                // 取得した文字を一文字づつ入力させる
                for (let typing of typingArray) {
                    I.pressKey(typing)
                }
            }
        }
    })
});