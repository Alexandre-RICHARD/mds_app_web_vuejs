import { ref } from "vue";

import { ApiEndpointEnum } from "@/enums/apiEndpoint.enum";
import { CookieEnum } from "@/enums/cookie.enum";
import { FetchMethodsEnum } from "@/enums/fetchMethods.enum";
import { fetcherHelper } from "@/helpers/api/fetcher.helper";
import { setCookie } from "@/helpers/cookie/setCookie.helper";

import { useUserStore } from "../../stores/user";

const { VITE_API_URL } = import.meta.env;

export function useUpdateMail() {
  const storeUser = useUserStore();
  const loading = ref(false);
  const error = ref<string | null>(null);

  const updateMail = async ({ email }: { email: string }) => {
    loading.value = true;
    error.value = null;
    const response = await fetcherHelper<{ email: string }>({
      apiUrl: VITE_API_URL as string,
      endPoint: ApiEndpointEnum.USER_MAIL,
      method: FetchMethodsEnum.PUT,
      body: { email, pastEmail: storeUser.email },
    });
    loading.value = false;
    if (response.success && response.data) {
      setCookie({
        name: CookieEnum.EMAIL,
        value: response.data.email,
        hours: 12,
      });
      storeUser.updateEmail(response.data.email);
      return true;
    }
    error.value = response.status;
    return false;
  };

  return { updateMail, loading, error };
}
