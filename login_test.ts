Feature('タイピング自動化テスト');

// Alternatively log in for one scenario.
Scenario('タイピングを自動化するテスト', async ({ I, login, typ, random}) => {
    login('suzuki');
    I.business() //ビジネス格言のタイピングをしたい場合

    within({ frame: 'iframe#typing_content' }, async () => {
        I.click('#start_btn');

        I.wait(3);
        I.pressKey('Space');
        I.wait(3);

        await typ.checkResult();
        await typ.typeText();
        await random.randomText();
        await typ.typingTest();

    }
    )}
    );