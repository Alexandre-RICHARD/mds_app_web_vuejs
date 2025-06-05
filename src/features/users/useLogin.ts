import { ref } from "vue";

import { FetchMethodsEnum } from "@/enums/fetchMethods.enum";
import { fetcherHelper } from "@/helpers/api/fetcher.helper";
import { setCookie } from "@/helpers/cookie/setCookie.helper";

import { ApiEndpointEnum } from "../../enums/apiEndpoint.enum";

const { VITE_API_URL } = import.meta.env;

export function useLogin() {
  const loading = ref(false);
  const error = ref<string | null>(null);

  const login = async (email: string, password: string) => {
    loading.value = true;
    error.value = null;
    const response = await fetcherHelper<{ token: string }>({
      apiUrl: VITE_API_URL as string,
      endPoint: ApiEndpointEnum.USER_LOGIN,
      method: FetchMethodsEnum.POST,
      body: { email, password },
      withAuth: false,
    });
    loading.value = false;
    const token = response.headers!.get("Authorization");
    if (response.success && response.data && token) {
      setCookie({ name: "token", value: token, hours: 1 });
      return true;
    }
    error.value = response.status;
    return false;
  };

  return { login, loading, error };
}
