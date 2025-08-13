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
class adminAcc extends Account {
    banUser(arr, id) {
        arr.forEach((element) => {
            if (element.id === id) {
                element.status = false;
            }
        });
    }
}
let user1 = new userAcc(123, "An", "12345678", "user");
let user2 = new userAcc(124, "An Lien", "12345678", "user");
let user = [user1, user2];
let admin = new adminAcc(0, "zero", "0", "0");
admin.banUser(user, 124);
user2.login();
export {};
