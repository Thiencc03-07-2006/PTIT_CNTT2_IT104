interface History {
  money: number;
  date: Date;
}
class Account {
  accountNumber;
  protected balance;
  protected history: History[];
  protected status;
  constructor(accountNUmber: string, balance: number) {
    this.accountNumber = accountNUmber;
    this.balance = balance;
    this.history = [];
    this.status = true;
  }
  deposit(money: number) {
    this.balance += money;
    this.history.push({ money, date: new Date() });
  }
  withdraw(money: number) {
    this.balance -= money;
    this.history.push({ money: -money, date: new Date() });
  }
  showHistory() {
    this.history.forEach((element) => {
      console.log(
        element.date.toLocaleString("vi-VN") +
          " Tien: " +
          new Intl.NumberFormat("vi-VN").format(element.money) +
          " VND"
      );
    });
  }
}
class SavingAccount extends Account {
  interestRate;
  constructor(accountNUmber: string, balance: number, interestRate: number) {
    super(accountNUmber, balance);
    this.interestRate = interestRate;
  }
  withdraw(money: number): void {
    if (this.balance - money < 0) {
      this.history.push({ money: -this.balance, date: new Date() });
      this.balance = 0;
    } else {
      super.withdraw(money);
    }
  }
}
class CheckAccount extends Account {
  overdraftLimit;
  constructor(accountNUmber: string, balance: number, overdraftLimit: number) {
    super(accountNUmber, balance);
    this.overdraftLimit = overdraftLimit;
  }
  withdraw(money: number): void {
    if (this.balance - money < -this.overdraftLimit) {
      this.history.push({
        money: -(this.balance + this.overdraftLimit),
        date: new Date(),
      });
      this.balance = 0;
    } else {
      super.withdraw(money);
    }
  }
}
let acc = new CheckAccount("An", 1000000, 10000000);
acc.deposit(2000000);
acc.withdraw(2000000);
acc.withdraw(2000000);
acc.withdraw(10000000);
acc.showHistory();
