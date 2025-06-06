import { defineStore } from "pinia";

export const useCheckoutStore = defineStore("checkout", {
  state: () => ({
    address: "",
    delivery: "",
  }),
  actions: {
    setAddress(addr: string) {
      this.address = addr;
    },
    setDelivery(delivery: string) {
      this.delivery = delivery;
    },
    reset() {
      this.address = "";
      this.delivery = "";
    },
  },
});
