// npx jest src/__tests__/slugify.test.ts

import { slugify } from '../utils/slugify';

describe('slugify function', () => {
  it('should return an empty string for an empty input', () => {
    expect(slugify('')).toBe('');
  });

  it('should return the slugified string with spaces replaced by hyphens', () => {
    const input = 'Hello World';
    const expected = 'hello-world';
    expect(slugify(input)).toBe(expected);
  });

  it('should remove non-word characters', () => {
    const input = 'Hello @World!';
    const expected = 'hello-world';
    expect(slugify(input)).toBe(expected);
  });

  it('should remove multiple hyphens and trim them from both ends', () => {
    const input = '  --Hello--World--  ';
    const expected = 'hello-world';
    expect(slugify(input)).toBe(expected);
  });

  it('should convert all characters to lowercase', () => {
    const input = 'HELLO World';
    const expected = 'hello-world';
    expect(slugify(input)).toBe(expected);
  });

  it('should handle input with special characters', () => {
    const input = 'Hello & World_2024!';
    const expected = 'hello-world-2024';
    expect(slugify(input)).toBe(expected);
  });

  it('should return an empty string for undefined or null input', () => {
    expect(slugify(null)).toBe('');
    expect(slugify(undefined)).toBe('');
  });
});
