#!/usr/bin/env node
/**
 * Simple CLI Calculator
 *
 * Supported operations:
 * - add: addition (alias: +)
 * - sub: subtraction (alias: -)
 * - mul: multiplication (aliases: x, *)
 * - div: division (alias: /) — throws on division by zero
 *
 * Usage:
 *   node src/cli.js <operation> <number1> <number2>
 * Examples:
 *   node src/cli.js add 2 3
 *   node src/cli.js div 10 2
 */

const calc = require('./calculator');

function printUsage() {
  console.log('Usage: node src/cli.js <operation> <number1> <number2>');
  console.log('Operations: add (+), sub (-), mul (*, x), div (/)');
}

const [, , op, aStr, bStr] = process.argv;

if (!op || aStr === undefined || bStr === undefined) {
  printUsage();
  process.exit(2);
}

const a = Number(aStr);
const b = Number(bStr);

if (Number.isNaN(a) || Number.isNaN(b)) {
  console.error('Error: both operands must be valid numbers');
  process.exit(2);
}

try {
  let result;
  switch (op) {
    case 'add':
    case '+':
      result = calc.add(a, b);
      break;
    case 'sub':
    case '-':
      result = calc.subtract(a, b);
      break;
    case 'mul':
    case 'x':
    case '*':
      result = calc.multiply(a, b);
      break;
    case 'div':
    case '/':
      result = calc.divide(a, b);
      break;
    default:
      console.error('Error: unknown operation "' + op + '"');
      printUsage();
      process.exit(2);
  }

  console.log(result);
  process.exit(0);
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
