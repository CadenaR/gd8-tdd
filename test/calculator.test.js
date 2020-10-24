const assert = require("assert");
const Calculator = require("../models/Calculator.model");

describe("Vector Calculator", () => {
  const calculator = new Calculator();
  // SUMA DE VECTORES
  describe("Suma los vectores a y b ", () => {
    const a = { x: 1, y: 1 };
    const b = { x: 2, y: 2 };

    it("Suma de vector {c} = {a} + {b}", () => {
      const res = { x: 3, y: 3 };
      assert.deepStrictEqual(calculator.sum(a, b), res);
    });
    it("[FALLIDA] - Suma de vector {c} = {a} + {b}", () => {
      const res = { x: 3, y: 100 };
      assert.notStrictEqual(calculator.sum(a, b), res);
    });
  });

  // RESTA DE VECTORES
  describe("Resta los vectores a y b ", () => {
    const a = { x: 4, y: 4 };
    const b = { x: 1, y: 1 };

    it("Resta de vector {c} = {a} - {b}", () => {
      const res = { x: 3, y: 3 };
      assert.deepStrictEqual(calculator.sub(a, b), res);
    });
    it("[FALLIDA] - Resta de vector {c} = {a} - {b}", () => {
      const res = { x: 3, y: 100 };
      assert.notStrictEqual(calculator.sub(a, b), res);
    });
  });

  // ESCALA DEL VECTOR
  describe("Escala el vector a  ", () => {
    const a = { x: 1, y: 1 };
    const x = 3;

    it("Escala de vector x{a} = {a} * {x}", () => {
      const res = { x: 3, y: 3 };
      assert.deepStrictEqual(calculator.scalar(a, x), res);
    });
    it("[FALLIDA] - Escala de vector x{a} = {a} * {x}", () => {
      const res = { x: 3, y: 100 };
      assert.notStrictEqual(calculator.scalar(a, x), res);
    });
  });

  // PRODUCTO PUNTO
  describe("Calcula el producto punto de los vectores a y b", () => {
    const a = { x: -6, y: 8 };
    const b = { x: 5, y: 12 };
    it("Producto punto {a∙b} = {a.x} * {b.x} + {a.y} * {b.y}", () => {
      assert.strictEqual(calculator.dot(a, b), 66);
    });
    it("[FALLIDA] - Producto punto {a∙b} = {a.x} * {b.x} + {a.y} * {b.y}", () => {
      assert.notStrictEqual(calculator.dot(a, b), 65);
    });
  });
});
