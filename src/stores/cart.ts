import { defineStore } from "pinia";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const STORAGE_KEY = "cartItems";

function loadFromStorage(): CartItem[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as CartItem[];
  } catch {
    return [];
  }
}

function saveToStorage(items: CartItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: loadFromStorage(),
  }),
  actions: {
    addItem(item: Omit<CartItem, "quantity">) {
      const existing = this.items.find((i) => i.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        this.items.push({ ...item, quantity: 1 });
      }
      saveToStorage(this.items);
    },
    updateQuantity(id: number, quantity: number) {
      const product = this.items.find((i) => i.id === id);
      if (product) {
        product.quantity = quantity;
        if (product.quantity <= 0) {
          this.items = this.items.filter((i) => i.id !== id);
        }
        saveToStorage(this.items);
      }
    },
    removeItem(id: number) {
      this.items = this.items.filter((i) => i.id !== id);
      saveToStorage(this.items);
    },
    clear() {
      this.items = [];
      saveToStorage(this.items);
    },
  },
  getters: {
    totalCount(state) {
      return state.items.reduce((sum, item) => sum + item.quantity, 0);
    },
  },
});
