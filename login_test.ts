Feature('Login');

Before(({ login }) => {
   login('user'); // login using user session
});

// Alternatively log in for one scenario.
Scenario('ログイン', async ({ I, login }) => {
   login('suzuki');
   I.wait(10);
   I.click('ビジネス格言');
   I.wait(5);
   within({ frame: 'iframe#typing_content' }, () => {
      I.click('#start_btn');
   });
   I.pressKey('Space');
   I.wait(3);

   let isFound = false;

   while (!isFound) {
      try {
         // タイピングゲームの文字が表示される要素のセレクタを指定します。
         const typingText = await I.grabTextFrom('iframe#sentenceText');
         
         // 取得した文字を一文字ずつ入力します。
         for (let i = 0; i < typingText.length; i++) {
            I.pressKey(typingText[i]);
         }

         // 特定の文字が表示されたか確認します。
         I.see('「今回のタイピング結果」');
         isFound = true;
      } catch (error) {
         // 特定の文字が見つからない場合、エラーがスローされます。
         // その場合は、少し待ってから再度確認します。
         I.wait(3); // 3秒待つ
      }
   }
});