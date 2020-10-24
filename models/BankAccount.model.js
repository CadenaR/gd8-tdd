class BankAccount {
  constructor(balance) {
    this.balance = balance;
    this.history = [`Has iniciado una cuenta con {${balance}} mxn`];
  }

  current() {
    return this.balance;
  }

  append(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.history.push(`Se han depositado ${amount} total ${this.balance}`);
    } else {
      this.history.push(`No se han podido depositar ${amount}`);
    }

    return this.balance;
  }

  substract(amount) {
    if (amount > 0) {
      this.balance -= amount;
      this.history.push(`Se han retirado ${amount} total ${this.balance}`);
    } else {
      this.history.push(`No se han podido retirar ${amount}`);
    }
    return this.balance;
  }

  merge(account) {
    this.balance += account.balance;
    this.history.push(`Se ha unido la cuenta con saldo ${account.balance}`);
    return this.balance;
  }

  getHistory() {
    return this.history;
  }
}

module.exports = BankAccount;
