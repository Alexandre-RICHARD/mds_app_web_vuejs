import { describe, it, expect, beforeEach } from 'vitest';
import { getAuthHeader } from './getAuthHeader.helper';
import { CookieEnum } from '@/enums/cookie.enum';
import { setCookie } from '../cookie/setCookie.helper';
import { deleteCookie } from '../cookie/deleteCookie.helper';

beforeEach(() => {
  document.cookie = '';
});

describe('getAuthHeader', () => {
  it('returns Authorization header when token cookie is present', () => {
    setCookie({ name: CookieEnum.TOKEN, value: 'token-value', hours: 1 });
    expect(getAuthHeader()).toEqual({ Authorization: 'token-value' });
  });

  it('returns empty object when token cookie is missing', () => {
    deleteCookie(CookieEnum.TOKEN);
    expect(getAuthHeader()).toEqual({});
  });
});
