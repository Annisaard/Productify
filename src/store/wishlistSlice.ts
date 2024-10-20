import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";

interface WishlistState {
  wishlist: IProductItem[];
  addToWishlist: (product: IProductItem) => void;
  removeFromWishlist: (id: number) => void;
}
const localStorageWithZustand: PersistStorage<WishlistState> = {
  getItem: (name) => {
    const storedValue = localStorage.getItem(name);
    return storedValue ? JSON.parse(storedValue) : { state: undefined, version: 0 };
  },
  setItem: (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name) => {
    localStorage.removeItem(name);
  },
};

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      wishlist: [],
      addToWishlist: (product) => {
        const currentWishlist = get().wishlist;
        const isAlreadyInWishlist = currentWishlist.some((item) => item.id === product.id);
        if (!isAlreadyInWishlist) {
          set({ wishlist: [...currentWishlist, product] });
        }
      },
      removeFromWishlist: (id) =>
        set((state) => ({
          wishlist: state.wishlist.filter((item) => item.id !== id),
        })),
    }),
    {
      name: "wishlist-storage",
      storage: localStorageWithZustand,
    },
  ),
);
