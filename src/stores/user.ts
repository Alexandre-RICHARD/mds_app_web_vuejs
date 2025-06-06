import { defineStore } from "pinia";

import { CookieEnum } from "../enums/cookie.enum";
import { deleteCookie } from "../helpers/cookie/deleteCookie.helper";
import { getCookie } from "../helpers/cookie/getCookie.helper";

export const useUserStore = defineStore("user", {
  state: () => {
    const isConnected = !!getCookie(CookieEnum.TOKEN);
    const userName = getCookie(CookieEnum.FULLNAME);
    return {
      isConnected: isConnected ?? false,
      fullName: isConnected ? userName : "",
    };
  },
  actions: {
    login({ fullName }: { fullName: string }) {
      this.isConnected = true;
      this.fullName = fullName;
    },
    disconnect() {
      this.isConnected = false;
      this.fullName = "";
      deleteCookie(CookieEnum.TOKEN);
      deleteCookie(CookieEnum.FULLNAME);
      deleteCookie(CookieEnum.EMAIL);
    },
  },
});
