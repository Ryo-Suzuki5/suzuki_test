
export = function () {
    return actor({
        business: function () {
            this.wait(3);
            this.click('ビジネス格言');
            this.wait(3);
        },
    });
};