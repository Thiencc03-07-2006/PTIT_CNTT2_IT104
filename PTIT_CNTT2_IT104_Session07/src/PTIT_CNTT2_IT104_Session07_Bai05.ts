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
let user = new userAcc(123, "An", "12345678", "user");
user.logout();
user.login();
