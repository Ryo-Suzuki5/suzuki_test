Feature('タイピング自動化テスト');

// Alternatively log in for one scenario.
Scenario('タイピングを自動化するテスト', async ({ I, login, typ }) => {
    login('suzuki');
    I.business() //ビジネス格言のタイピングをしたい場合

    within({ frame: 'iframe#typing_content' }, async () => {
        I.click('#start_btn');

        I.wait(3);
        I.pressKey('Space');
        I.wait(3);

        await typ.typingTest();
    }
    )}
    );