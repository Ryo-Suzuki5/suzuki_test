
export = function () {
    return actor({
        category: function () {
            this.click('ビジネス');
            this.wait(3);
            this.click(process.env.CATEGORY);
            this.wait(3);
        },
    });
};