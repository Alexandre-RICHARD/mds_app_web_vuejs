import { ref } from 'vue';
import { fetcherHelper } from '@/helpers/api/fetcher.helper';
import { FetchMethodsEnum } from '@/enums/fetchMethods.enum';
import { setCookie } from '@/helpers/cookie/setCookie.helper';
import type { FetchResponse } from '@/nexusExporter';

const API_URL = 'http://localhost:3000';

export function useRegister() {
  const loading = ref(false);
  const error = ref<string | null>(null);

  const register = async (args: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmationPassword: string;
  }) => {
    loading.value = true;
    error.value = null;
    const response = await fetcherHelper<{ token: string }>({
      apiUrl: API_URL,
      endPoint: '/users/register',
      method: FetchMethodsEnum.POST,
      body: args,
    });
    loading.value = false;
    if (response.success && response.data) {
      setCookie({ name: 'token', value: response.data.token, hours: 1 });
      return true;
    }
    error.value = response.status;
    return false;
  };

  return { register, loading, error };
}
