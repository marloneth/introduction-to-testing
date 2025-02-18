import { expect, it, vi, beforeEach, afterEach, describe } from 'vitest';
import { log } from './log';

describe('logger', () => {
  describe('development', () => {
    it('logs to the console in development mode', () => {
      const logSpy = vi.fn();
      log('Hello World');
      expect(logSpy).toHaveBeenCalledWith('Hello World');
    });
  });

  describe('production', () => {
    it('should not call console.log in production mode', () => {
      const logSpy = vi.fn();
      log('Hello World', { mode: 'production', productionCallback: logSpy });
      expect(logSpy).not.toHaveBeenCalled();
    });
  });
});
