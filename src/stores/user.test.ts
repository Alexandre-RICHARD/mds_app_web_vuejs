import { describe, it, expect, beforeEach, vi } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useUserStore } from './user';

vi.mock('../helpers/cookie/getCookie.helper', () => ({
  getCookie: vi.fn(() => undefined),
}));
vi.mock('../helpers/cookie/deleteCookie.helper', () => ({
  deleteCookie: vi.fn(),
}));

const { deleteCookie } = require('../helpers/cookie/deleteCookie.helper');

beforeEach(() => {
  setActivePinia(createPinia());
  vi.clearAllMocks();
});

describe('useUserStore', () => {
  it('login sets user info', () => {
    const store = useUserStore();
    store.login({ fullName: 'John Doe', email: 'john@example.com' });
    expect(store.isConnected).toBe(true);
    expect(store.fullName).toBe('John Doe');
    expect(store.email).toBe('john@example.com');
  });

  it('disconnect resets state and clears cookies', () => {
    const store = useUserStore();
    store.login({ fullName: 'John Doe', email: 'john@example.com' });
    store.disconnect();
    expect(store.isConnected).toBe(false);
    expect(store.fullName).toBe('');
    expect(store.email).toBe('');
    expect(deleteCookie.deleteCookie).toHaveBeenCalledTimes(3);
  });

  it('updateEmail updates the email', () => {
    const store = useUserStore();
    store.login({ fullName: 'John Doe', email: 'john@example.com' });
    store.updateEmail('new@example.com');
    expect(store.email).toBe('new@example.com');
  });
});
