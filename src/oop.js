var User = /** @class */ (function () {
    function User(username, age, address) {
        var _this = this;
        this.userInfo = function () {
            console.log("username= " + _this.username);
        };
        this.username = username;
        this.age = age;
        this.address = address;
    }
    return User;
}());
var user1 = new User('userA', 24, 'Seoul');
user1.userInfo;
