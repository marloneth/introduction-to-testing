import { describe, it, expect } from 'vitest';
import { add, divide, multiply, subtract } from './arithmetic';

describe('add', () => {
  it('should add two positive numbers', () => {
    expect(add(2, 2)).toBe(4);
  });

  it('should add two negative numbers', () => {
    expect(add(-2, -2)).toBe(-4);
  });

  it('should parse strings into numbers', () => {
    expect(add('1', '1')).toBe(2);
  });

  it('should get real angry if you give a string that cannot be parsed into a number', () => {
    expect(() => add('potato', 2)).toThrow('not a number');
  });

  it('should get real angry if you give it a second argument that cannot be parsed', () => {
    expect(() => add(2, 'potato')).toThrow('not a number');
  });

  it('should throw an error if the first argument is not a number', () => {
    expect(() => add(NaN, 2)).toThrow('not a number');
  });
});

describe('subtract', () => {
  it('should subtract two positive numbers', () => {
    expect(subtract(4, 2)).toBe(2);
  });

  it('should accept an array and subtract all of the numbers', () => {
    expect(subtract([10, 5], 2)).toBe(3);
  });

  it('should default undefined to 0', () => {
    expect(subtract(3)).toBe(3);
    expect(subtract(undefined, 3)).toBe(-3);
  });

  it('should default to zero if either argument is null', () => {
    expect(subtract(3, null)).toBe(3);
    expect(subtract(null, 3)).toBe(-3);
  });
});

describe('multiply', () => {
  it('should multiply two positive numbers', () => {
    expect(multiply(3, 3)).toBe(9);
  });
});

describe('divide', () => {
  it('should divide two positive numbers', () => {
    expect(divide(6, 2)).toBe(3);
  });

  it('should return null if dividing by zero', () => {
    expect(divide(10, 0)).toBe(null);
  });
});
