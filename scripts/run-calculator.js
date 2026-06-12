const calc = require('../src/calculator');

const examples = [
  { expr: '2 + 3', value: calc.add(2, 3) },
  { expr: '10 - 4', value: calc.subtract(10, 4) },
  { expr: '45 * 2', value: calc.multiply(45, 2) },
  { expr: '20 / 5', value: calc.divide(20, 5) },
];

for (const e of examples) {
  console.log(`${e.expr} = ${e.value}`);
}
