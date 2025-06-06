import { defineStore } from "pinia";

import { CookieEnum } from "../enums/cookie.enum";
import { deleteCookie } from "../helpers/cookie/deleteCookie.helper";
import { getCookie } from "../helpers/cookie/getCookie.helper";

export const useUserStore = defineStore("user", {
  state: () => {
    const isConnected = !!getCookie(CookieEnum.TOKEN);
    const userName = getCookie(CookieEnum.FULLNAME);
    const email = getCookie(CookieEnum.EMAIL);
    return {
      isConnected: isConnected ?? false,
      fullName: isConnected ? userName : "",
      email: isConnected ? email : "",
    };
  },
  actions: {
    login({ fullName, email }: { fullName: string; email: string }) {
      this.isConnected = true;
      this.fullName = fullName;
      this.email = email;
    },
    disconnect() {
      this.isConnected = false;
      this.fullName = "";
      this.email = "";
      deleteCookie(CookieEnum.TOKEN);
      deleteCookie(CookieEnum.FULLNAME);
      deleteCookie(CookieEnum.EMAIL);
    },
    updateEmail(email: string) {
      this.email = email;
    },
  },
});
