import { getCookie } from "../cookie/getCookie.helper";

export const getAuthHeader = (): Record<string, string> => {
  const token = getCookie("token");
  if (token) {
    return { Authorization: `Bearer ${token}` };
  }
  return {};
};
