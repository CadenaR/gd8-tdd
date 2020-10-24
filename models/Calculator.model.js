class Calculator {
  constructor() {}

  sum(a, b) {
    return { x: a.x + b.x, y: a.y + b.y };
  }

  sub(a, b) {
    return { x: a.x - b.x, y: a.y - b.y };
  }

  scalar(a, X) {
    return { x: a.x * X, y: a.y * X };
  }

  dot(a, b) {
    return a.x * b.x + a.y * b.y;
  }
}

module.exports = Calculator;
