const assert = require("mocha");
const Calculator = require("../models/Calculator.model");

describe("Vector Calculator", () => {
  const calculator = new Calculator();
  // SUMA DE VECTORES
  describe("Suma los vectores a y b ", () => {
    it("Suma de vector {c} = {a} + {b}", () => {
      const res = { x: 3, y: 3 };
      assert.strictEqual(calculator.sum(a, b), res);
    });
    it("[FALLIDA] - Suma de vector {c} = {a} + {b}", () => {
      const res = { x: 3, y: 100 };
      assert.notStrictEqual(calculator.sum(a, b), res);
    });
  });

  // RESTA DE VECTORES
  describe("Resta los vectores a y b ", () => {
    it("Resta de vector {c} = {a} - {b}", () => {
      const res = { x: 3, y: 3 };
      assert.strictEqual(calculator.sub(a, b), res);
    });
    it("[FALLIDA] - Resta de vector {c} = {a} - {b}", () => {
      const res = { x: 3, y: 100 };
      assert.notStrictEqual(calculator.sub(a, b), res);
    });
  });

  // ESCALA DEL VECTOR
  describe("Escala el vector a  ", () => {
    it("Escala de vector x{a} = {a} * {x}", () => {
      const res = { x: 3, y: 3 };
      assert.strictEqual(calculator.scalar(a, x), res);
    });
    it("[FALLIDA] - Escala de vector x{a} = {a} * {x}", () => {
      const res = { x: 3, y: 100 };
      assert.notStrictEqual(calculator.scalar(a, x), res);
    });
  });

  // PRODUCTO PUNTO
  describe("Calcula el producto punto de los vectores a y b", () => {
    it("Producto punto {a∙b} = {a.x} * {b.x} + {a.y} * {b.y}", () => {
      const res = { x: 3, y: 3 };
      assert.strictEqual(calculator.dot(a, b), res);
    });
    it("[FALLIDA] - Producto punto {a∙b} = {a.x} * {b.x} + {a.y} * {b.y}", () => {
      const res = { x: 3, y: 100 };
      assert.notStrictEqual(calculator.dot(a, b), res);
    });
  });
});
