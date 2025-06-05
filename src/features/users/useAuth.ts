import { computed } from "vue";

import { checkCookie } from "@/helpers/cookie/checkCookie.helper";

export function useAuth() {
  const isLogged = computed(() => checkCookie("token"));
  return { isLogged };
}
