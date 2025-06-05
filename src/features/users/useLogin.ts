import { ref } from 'vue';
import { fetcherHelper } from '@/helpers/api/fetcher.helper';
import { FetchMethodsEnum } from '@/enums/fetchMethods.enum';
import { setCookie } from '@/helpers/cookie/setCookie.helper';

const API_URL = 'http://localhost:3000';

export function useLogin() {
  const loading = ref(false);
  const error = ref<string | null>(null);

  const login = async (email: string, password: string) => {
    loading.value = true;
    error.value = null;
    const response = await fetcherHelper<{ token: string }>({
      apiUrl: API_URL,
      endPoint: '/users/login',
      method: FetchMethodsEnum.POST,
      body: { email, password },
    });
    loading.value = false;
    if (response.success && response.data) {
      setCookie({ name: 'token', value: response.data.token, hours: 1 });
      return true;
    }
    error.value = response.status;
    return false;
  };

  return { login, loading, error };
}
