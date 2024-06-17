
module.exports = function () {
    return actor({
        async randomText() {
            
            if ((Math.random() < 0.05)) {
                const randomKey = String.fromCharCode(Math.floor(Math.random() * 26) + 97); //ASCIIコードで、97は小文字の'a'に対応しており、26はアルファベットの数、ASCIIコードの97～122の範囲でランダムに生成
                this.pressKey(randomKey);

            }
        }
    });
}