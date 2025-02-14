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
    expect(() => add('potato', 2)).toThrow();
  });

  it('should get real angry if you give it a second argument that cannot be parsed', () => {
    expect(() => add(2, 'potato')).toThrow();
  });
});

describe('subtract', () => {
  it('should subtract two positive numbers', () => {
    expect(subtract(4, 2)).toBe(2);
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
});
