import { create } from "zustand";

interface WishlistState {
  wishlist: IProductItem[];
  addToWishlist: (product: IProductItem) => void;
  removeFromWishlist: (id: number) => void;
}

export const useWishlistStore = create<WishlistState>((set) => ({
  wishlist: [],

  addToWishlist: (product) =>
    set((state) => ({
      wishlist: [...state.wishlist, product],
    })),

  removeFromWishlist: (id) =>
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item.id !== id),
    })),
}));
