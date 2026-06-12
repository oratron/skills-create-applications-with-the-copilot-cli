/**
 * Calculator module
 *
 * Supported operations:
 * - add(a, b): addition
 * - subtract(a, b): subtraction
 * - multiply(a, b): multiplication
 * - divide(a, b): division (throws on division by zero)
 */

module.exports = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) throw new Error('Divide by zero');
    return a / b;
  },
};
