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

        let 今回のタイピング結果 = false;
        while (!今回のタイピング結果) {
            try {
                // タイピングする文章を取得
                const sentenceText = await I.grabHTMLFrom('#sentenceText');

                // 取得した文字を一文字づつの配列に変換
                let typingArray = sentenceText.split('');

                // 取得した文字を一文字づつループさせる
                for (let i = 0; i < typingArray.length; i++) {
                    let typing = typingArray[i];

                    // 取得した文字のキーを押す
                    I.pressKey(typing);
                }
            } catch (error) {
                // 「sentenceText」というidを持った要素が取得できない場合エラーが発生して、処理終了
                console.log(error);
                return;
            }
        }
        I.see(今回のタイピング結果);
        console.log(今回のタイピング結果);
    });
});