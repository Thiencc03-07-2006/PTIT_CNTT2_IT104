class Account {
    accountNumber;
    balance;
    history;
    status;
    constructor(accountNUmber, balance) {
        this.accountNumber = accountNUmber;
        this.balance = balance;
        this.history = [];
        this.status = true;
    }
    deposit(money) {
        this.balance += money;
        this.history.push({ money, date: new Date() });
    }
    withdraw(money) {
        this.balance -= money;
        this.history.push({ money: -money, date: new Date() });
    }
    showHistory() {
        this.history.forEach((element) => {
            console.log(element.date.toLocaleString("vi-VN") +
                " Tien: " +
                new Intl.NumberFormat("vi-VN").format(element.money) +
                " VND");
        });
    }
}
class SavingAccount extends Account {
    interestRate;
    constructor(accountNUmber, balance, interestRate) {
        super(accountNUmber, balance);
        this.interestRate = interestRate;
    }
    withdraw(money) {
        if (this.balance - money < 0) {
            this.history.push({ money: -this.balance, date: new Date() });
            this.balance = 0;
        }
        else {
            super.withdraw(money);
        }
    }
}
let acc = new SavingAccount("An", 1000000, 1);
acc.deposit(2000000);
acc.withdraw(2000000);
acc.withdraw(2000000);
acc.showHistory();
export {};
