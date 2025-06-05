import { ref } from "vue";

import { FetchMethodsEnum } from "@/enums/fetchMethods.enum";
import { fetcherHelper } from "@/helpers/api/fetcher.helper";
import { setCookie } from "@/helpers/cookie/setCookie.helper";

import { ApiEndpointEnum } from "../../enums/apiEndpoint.enum";

type Args = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmationPassword: string;
};

const { VITE_API_URL } = import.meta.env;

export function useRegister() {
  const loading = ref(false);
  const error = ref<string | null>(null);

  const register = async (args: Args) => {
    loading.value = true;
    error.value = null;
    const response = await fetcherHelper<{ token: string }>({
      apiUrl: VITE_API_URL as string,
      endPoint: ApiEndpointEnum.USER_REGISTER,
      method: FetchMethodsEnum.POST,
      body: args,
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

  return { register, loading, error };
}
