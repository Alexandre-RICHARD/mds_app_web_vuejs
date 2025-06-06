import { ref } from "vue";

import { FetchMethodsEnum } from "@/enums/fetchMethods.enum";
import { fetcherHelper } from "@/helpers/api/fetcher.helper";
import { setCookie } from "@/helpers/cookie/setCookie.helper";

import { ApiEndpointEnum } from "../../enums/apiEndpoint.enum";
import { CookieEnum } from "../../enums/cookie.enum";
import { useUserStore } from "../../stores/user";
import type { RegisterReponseType } from "./useRegister.reponse.type";

type Args = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmationPassword: string;
};

const { VITE_API_URL } = import.meta.env;

export function useRegister() {
  const storeUser = useUserStore();
  const loading = ref(false);
  const error = ref<string | null>(null);

  const register = async (args: Args) => {
    loading.value = true;
    error.value = null;
    const response = await fetcherHelper<RegisterReponseType>({
      apiUrl: VITE_API_URL as string,
      endPoint: ApiEndpointEnum.USER_REGISTER,
      method: FetchMethodsEnum.POST,
      body: args,
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

  return { register, loading, error };
}
