Feature('タイピング自動化テスト');

Before(({ login }) => {
    login('user'); // login using user session
});

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

        let 今回のタイピング結果 = false;
        while (!今回のタイピング結果) {
            try {
                const sentenceText = await I.grabHTMLFrom('#sentenceText');

                // 取得した文字を一文字づつの配列に変換
                let typingArray = sentenceText.split('');

                // 取得した文字を一文字づつループさせる
                for (let i = 0; i < typingArray.length; i++) {
                    let typing = typingArray[i];
                    
                    // 取得した文字のキーを押す
                    I.pressKey(typing);
                }
                // 「今回のタイピング結果」が表示されたかどうかをチェック
                let resultText = await I.grabTextFrom('#result');
                今回のタイピング結果 = resultText.includes('今回のタイピング結果');
            } catch (error) {
                // 「sentenceText」というidを持った要素が取得できない場合エラーが発生して、処理終了
                console.log(error);
                return;
            }
        }
    });
});