Feature('タイピング自動化テスト');

Scenario('タイピングを自動化するテスト', async ({ I, login, typ }) => {
    login('suzuki');
    I.business(); //ビジネス格言のタイピングをしたい場合

    within({ frame: 'iframe#typing_content' }, async () => {
        I.click('#start_btn');

        I.wait(3);
        I.pressKey('Space');
        I.wait(3);

        let result = false;
        while (!result) {
            //今回のタイピング結果が表示されているか確認
            result = await typ.checkResult();

            if (!result) {
                //タイピング結果が表示されていない場合に、取得したタイピング文字を入力
                await typ.typeText()

                if (result) {
                    //ランダムで入力ミスをする
                    await typ.typeRandom()
                }
            }
        }
    }
    )
}
)