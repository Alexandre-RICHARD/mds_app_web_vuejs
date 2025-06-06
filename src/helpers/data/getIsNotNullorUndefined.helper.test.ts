import { describe, it, expect } from 'vitest';
import { getIsNotNullorUndefined } from './getIsNotNullorUndefined.helper';

describe('getIsNotNullorUndefined', () => {
  it('returns true for values that are not null or undefined', () => {
    expect(getIsNotNullorUndefined(0)).toBe(true);
    expect(getIsNotNullorUndefined('')).toBe(true);
    expect(getIsNotNullorUndefined(false)).toBe(true);
  });

  it('returns false for null or undefined', () => {
    expect(getIsNotNullorUndefined(null)).toBe(false);
    expect(getIsNotNullorUndefined(undefined)).toBe(false);
  });
});
