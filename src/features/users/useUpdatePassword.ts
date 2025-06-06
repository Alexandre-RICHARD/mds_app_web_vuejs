import { ref } from "vue";

import { FetchMethodsEnum } from "@/enums/fetchMethods.enum";
import { fetcherHelper } from "@/helpers/api/fetcher.helper";
import { ApiEndpointEnum } from "@/enums/apiEndpoint.enum";

const { VITE_API_URL } = import.meta.env;

export function useUpdatePassword() {
  const loading = ref(false);
  const error = ref<string | null>(null);

  const updatePassword = async ({
    oldPassword,
    newPassword,
    confirmationPassword,
  }: {
    oldPassword: string;
    newPassword: string;
    confirmationPassword: string;
  }) => {
    loading.value = true;
    error.value = null;
    const response = await fetcherHelper<unknown>({
      apiUrl: VITE_API_URL as string,
      endPoint: ApiEndpointEnum.USER_PASSWORD,
      method: FetchMethodsEnum.PUT,
      body: {
        oldPassword,
        newPassword,
        confirmationPassword,
      },
    });
    loading.value = false;
    if (response.success) return true;
    error.value = response.status;
    return false;
  };

  return { updatePassword, loading, error };
}
