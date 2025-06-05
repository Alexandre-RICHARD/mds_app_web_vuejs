import { CookieEnum } from "../../enums/cookie.enum";
import { getCookie } from "../cookie/getCookie.helper";

export const getAuthHeader = (): Record<string, string> => {
  const token = getCookie(CookieEnum.TOKEN);
  if (token) {
    return { Authorization: token };
  }
  return {};
};
