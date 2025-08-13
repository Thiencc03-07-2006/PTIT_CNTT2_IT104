class Account {
  id;
  userName;
  private password;
  isLogin;
  role;
  constructor(id: number, userName: string, password: string, role: string) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.isLogin = true;
    this.role = role;
  }
  login(): void {
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
  constructor(id: number, userName: string, password: string, role: string) {
    super(id, userName, password, role);
    this.status = true;
  }
  login(): void {
    if (this.status) {
      console.log("Dang nhap thanh cong");
      this.isLogin = true;
    } else {
      console.log("Tai khoan da bi khoa");
    }
  }
}
class adminAcc extends Account {
  banUser(arr: userAcc[], id: number) {
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
