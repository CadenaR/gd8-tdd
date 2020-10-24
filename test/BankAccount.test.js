const assert = require("mocha");
const BankAccount = require("../models/BankAccount.model");

describe("Bank Account! $$$$ ", () => {
  // Regresa el saldo actual en la cuenta

  describe("Obtener el balance de al cuenta", () => {
    const account = new BankAccount(0);
    it("Balance Correcto", () => {
      assert.strictEqual(account.current(), 100);
    });
    it("[FALLIDA] - Balance Inorrecto", () => {
      assert.notStrictEqual(account.current(), 100);
    });
  });

  // Agrega el monto a la cuenta y regresa el saldo final. Si recibe un monto negativo no modifica el saldo.
  describe("Agrega el monto a la cuenta y regresa el saldo final. Si recibe un monto negativo no modifica el saldo.", () => {
    const account = new BankAccount(0);

    it("Añadir un monto positivo {200} = {amount} + {100}", () => {
      assert.strictEqual(account.append(100), 100);
    });
    it("Añadir un monto negativo {0} = {amount} - {100}", () => {
      const actual = account.current();
      assert.strictEqual(account.append(-100), actual);
    });
    it("[FALLIDO] - Añadir un monto positivo {200} = {amount} + {100}", () => {
      assert.strictEqual(account.append(100), 200);
    });
  });

  // Retira el monto de la cuenta y regresa el saldo final. Si recibe un monto negativo no modifica el saldo.
  describe("Retira el monto de la cuenta y regresa el saldo final. Si recibe un monto negativo no modifica el saldo.", () => {
    const account = new BankAccount(200);
    it("Retira monto a {account}", () => {
      assert.strictEqual(account.substract(100), 100);
    });
    it("No retira monto a {account} por ser negativo", () => {
      assert.strictEqual(account.substract(-100), 100);
    });
    it("[FALLIDA] - Retira monto a {account}", () => {
      assert.notStrictEqual(account.substract(100), 100);
    });
  });

  // Une la cuenta ‘account’ con la cuenta (original). Al unir se copian sus historiales y si el saldo de ‘account’ es positivo entonces se agrega a ‘original’ si el saldo es negativo entonces se resta a ‘original’
  describe("Une la cuenta ‘account’ con la cuenta (original). Al unir se copian sus historiales y si el saldo de ‘account’ es positivo entonces se agrega a ‘original’ si el saldo es negativo entonces se resta a ‘original’", () => {
    const accountA = new BankAccount(0);
    const accountB = new BankAccount(100);
    const accountC = new BankAccount(-200);
    it("Merge {accountA} con {accountB} con saldo positivo", () => {
      assert.strictEqual(accountA.merge(accountB), 100);
    });
    it("Merge {accountA} con {accountC} con saldo negativo", () => {
      assert.strictEqual(accountA.merge(accountC), -100);
    });
    it("[FALLIDA] - Merge {accountA} con {accountB} con saldo positivo", () => {
      assert.notStrictEqual(accountA.merge(accountB), 100);
    });
  });

  // Regresa un arreglo de objetos con el historial de movimientos de la cuenta.
  describe("Regresa un arreglo de objetos con el historial de movimientos de la cuenta.", () => {
    it("Historial se muestra satisfactoriamente", () => {
      const account = new BankAccount(100);
      const history = ["Has iniciado una cuenta con {100} mxn"];
      assert.strictEqual(account.history(), history);
    });

    it("Historial tiene el lenght correcto", () => {
      const account = new BankAccount(100);
      const history = ["Has iniciado una cuenta con {100} mxn"];
      assert.strictEqual(account.history().length, 1);
    });

    it("[FALLIDA] - Historial se muestra satisfactoriamente", () => {
      const account = new BankAccount(100);
      const history = ["Has iniciado una cuenta con {200} mxn"];
      assert.notStrictEqual(account.history(), history);
    });
  });
});
