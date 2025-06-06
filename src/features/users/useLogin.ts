import { ref } from "vue";

import { FetchMethodsEnum } from "@/enums/fetchMethods.enum";
import { fetcherHelper } from "@/helpers/api/fetcher.helper";
import { setCookie } from "@/helpers/cookie/setCookie.helper";

import { ApiEndpointEnum } from "../../enums/apiEndpoint.enum";
import { CookieEnum } from "../../enums/cookie.enum";
import { useUserStore } from "../../stores/user";
import type { LoginReponseType } from "./useLogin.reponse.type";

const { VITE_API_URL } = import.meta.env;

export function useLogin() {
  const storeUser = useUserStore();
  const loading = ref(false);
  const error = ref<string | null>(null);

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    loading.value = true;
    error.value = null;
    const response = await fetcherHelper<LoginReponseType>({
      apiUrl: VITE_API_URL as string,
      endPoint: ApiEndpointEnum.USER_LOGIN,
      method: FetchMethodsEnum.POST,
      body: { email, password },
      withAuth: false,
    });
    loading.value = false;
    const token = response.headers!.get("Authorization");
    if (response.success && response.data && token) {
      const fullName = `${response.data.user.firstName} ${response.data.user.lastName}`;
      setCookie({ name: CookieEnum.TOKEN, value: token, hours: 12 });
      setCookie({ name: CookieEnum.FULLNAME, value: fullName, hours: 12 });
      setCookie({
        name: CookieEnum.EMAIL,
        value: response.data.user.email,
        hours: 12,
      });
      storeUser.login({
        fullName,
      });
      return true;
    }
    error.value = response.status;
    return false;
  };

  return { login, loading, error };
}
