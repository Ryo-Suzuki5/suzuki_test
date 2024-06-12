

exports = function () {
    return actor({

        async checkResult() {
            let result = false;
            let resulttext = await this.grabNumberOfVisibleElements('#result');
            if (resulttext > 0) {
                result = true;
                const date = new Date();
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

                if ((Math.random() < 0.05)) {
                    const randomKey = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
                    this.pressKey(randomKey);
                    break;
                } else {
                    this.pressKey(typing);
                }
                this.wait(0.06);
            };
        },

        async performTypingTest() {
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