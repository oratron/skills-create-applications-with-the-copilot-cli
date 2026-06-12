const calc = require('../calculator');

describe('Calculator basic operations', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test('addition with negatives: -1 + 4 = 3', () => {
    expect(calc.add(-1, 4)).toBe(3);
  });

  test('subtraction: 10 - 4 = 6', () => {
    expect(calc.subtract(10, 4)).toBe(6);
  });

  test('subtraction resulting negative: 3 - 5 = -2', () => {
    expect(calc.subtract(3, 5)).toBe(-2);
  });

  test('multiplication: 45 * 2 = 90', () => {
    expect(calc.multiply(45, 2)).toBe(90);
  });

  test('multiplication by zero: 7 * 0 = 0', () => {
    expect(calc.multiply(7, 0)).toBe(0);
  });

  test('division: 20 / 5 = 4', () => {
    expect(calc.divide(20, 5)).toBe(4);
  });

  test('division producing fraction: 7 / 2 = 3.5', () => {
    expect(calc.divide(7, 2)).toBeCloseTo(3.5);
  });

  test('division with negative numbers: -10 / 2 = -5', () => {
    expect(calc.divide(-10, 2)).toBe(-5);
  });

  test('division by zero throws', () => {
    expect(() => calc.divide(5, 0)).toThrow('Divide by zero');
  });

  test('operations with non-integer numbers', () => {
    expect(calc.add(1.2, 3.4)).toBeCloseTo(4.6);
    expect(calc.subtract(5.5, 2.2)).toBeCloseTo(3.3);
    expect(calc.multiply(1.5, 2)).toBeCloseTo(3);
    expect(calc.divide(5.5, 2)).toBeCloseTo(2.75);
  });
});
