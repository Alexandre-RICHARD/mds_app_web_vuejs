export type FetchResponse<T> = {
  success: boolean;
  status: string;
  headers?: Headers;
  data?: T;
};
