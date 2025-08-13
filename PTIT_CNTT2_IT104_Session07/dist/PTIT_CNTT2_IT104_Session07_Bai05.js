class Account {
    id;
    userName;
    password;
    isLogin;
    role;
    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = true;
        this.role = role;
    }
    login() {
        console.log("Dang nhap thanh cong");
        this.isLogin = true;
    }
    logout() {
        if (this.isLogin) {
            console.log("Dang xuat thanh cong");
            this.isLogin = false;
        }
    }
}
class userAcc extends Account {
    status;
    constructor(id, userName, password, role) {
        super(id, userName, password, role);
        this.status = true;
    }
    login() {
        if (this.status) {
            console.log("Dang nhap thanh cong");
            this.isLogin = true;
        }
        else {
            console.log("Tai khoan da bi khoa");
        }
    }
}
let user = new userAcc(123, "An", "12345678", "user");
user.logout();
user.login();
export {};
