Feature('タイピング自動化テスト');

// Alternatively log in for one scenario.
Scenario('タイピングを自動化するテスト', async ({ I, login }) => {
    login('suzuki');
    I.business() //ビジネス格言のタイピングをしたい場合

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
                const date = new Date();
                const timestamp = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "_" + date.getHours() + "_" + date.getMinutes() + "_" + date.getSeconds();
                const screenshotName = 'screenshot_' + timestamp + '.png';
                I.saveScreenshot(screenshotName);
                I.wait(6);
            } else {
                let typingdata = await I.grabHTMLFrom('#sentenceText span:nth-child(2)');
                //console.log(typingdata);
                let typingArray = typingdata.split('');// 取得した文字を一文字づつの配列に変換

                // 取得した文字を一文字づつ入力させる
                for (let i = 0; i < typingArray.length; i++) {
                    let typing = typingArray[i];
                    // 最後の文字で、かつ5%の確率でランダムなキーを押す

                    if ((Math.random() < 0.05)) {
                        const randomKey = String.fromCharCode(Math.floor(Math.random() * 26) + 97); // a-zのランダムなキー
                        I.pressKey(randomKey);
                        break;

                    } else {
                        I.pressKey(typing);
                    }
                    I.wait(0.06);
                };

            }
        }
    }
    )
});