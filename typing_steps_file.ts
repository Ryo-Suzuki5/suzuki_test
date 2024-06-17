//タイピングのステップファイル

module.exports = function () {
    return actor({

        async checkResult() {
            let result = false;
            let resulttext = await this.grabNumberOfVisibleElements('#result');
            if (resulttext > 0) {
                result = true;
                const date = new Date();
                //現在の日時を取得し、それを特定の形式の文字列（年-月-日_時_分_秒）に変換してtimestampに保存
                const timestamp = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "_" + date.getHours() + "_" + date.getMinutes() + "_" + date.getSeconds();
                const screenshotName = 'screenshot_' + timestamp + '.png';
                this.saveScreenshot(screenshotName);
                this.wait(6);
            }
            return result;
        },

        async typeText() {
            let typingdata = await this.grabHTMLFrom('#sentenceText span:nth-child(2)');
            let typingArray = typingdata.split('');

            for (let i = 0; i < typingArray.length; i++) {
                let typing = typingArray[i];

             //   if ((Math.random() < 0.05)) {
               //     const randomKey = String.fromCharCode(Math.floor(Math.random() * 26) + 97); //ASCIIコードで、97は小文字の'a'に対応しており、26はアルファベットの数、ASCIIコードの97～122の範囲でランダムに生成
                 //   this.pressKey(randomKey);
                //} 
                this.pressKey(typing);
                this.wait(0.06);
            };
        },

        async typingTest() {
            let result = false;
            while (!result) {
                result = await this.checkResult();
                if (!result) {
                    await this.typeText();
                }
            }
        }

    });
}