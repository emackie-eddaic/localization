import { isAlpha2Code } from './is-alpha-2-code.util';

describe('isAlpha2Code', () => {
  it('should correctly validate regions', () => {
    expect(isAlpha2Code(null)).toBe(false);
    expect(isAlpha2Code(undefined)).toBe(false);
    expect(isAlpha2Code('')).toBe(false);
    expect(isAlpha2Code(0)).toBe(false);
    expect(isAlpha2Code('CAA')).toBe(false);
    expect(isAlpha2Code('UK')).toBe(false);
    expect(isAlpha2Code('ca')).toBe(true);
    expect(isAlpha2Code('CA')).toBe(true);
  });
});
