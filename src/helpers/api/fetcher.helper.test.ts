import { describe, it, expect, vi, afterEach } from 'vitest';
import { fetcherHelper } from './fetcher.helper';
import { FetchMethodsEnum } from '@/enums/fetchMethods.enum';

const apiUrl = 'https://api.example.com';
const endPoint = '/endpoint';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('fetcherHelper', () => {
  it('returns data when request is successful', async () => {
    const data = { hello: 'world' };
    const headers = new Headers();
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      statusText: 'OK',
      json: () => Promise.resolve(data),
      headers,
    }));

    const result = await fetcherHelper<typeof data>({
      apiUrl,
      endPoint,
      method: FetchMethodsEnum.GET,
    });

    expect(result).toEqual({
      success: true,
      status: '200 - OK',
      headers,
      data,
    });
  });

  it("returns special message when status is 404", async () => {
    const headers = new Headers();
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
      statusText: 'Not Found',
      headers,
      json: vi.fn(),
    }));

    const result = await fetcherHelper({
      apiUrl,
      endPoint,
      method: FetchMethodsEnum.GET,
    });

    expect(result).toEqual({
      success: false,
      status: "Save don't able this request",
      headers,
    });
  });

  it('handles fetch rejection', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('fail')));

    const result = await fetcherHelper({
      apiUrl,
      endPoint,
      method: FetchMethodsEnum.GET,
    });

    expect(result).toEqual({ success: false, status: 'Request failed' });
  });
});
