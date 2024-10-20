/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ProductCard";
import { useWishlistStore } from "@/store/wishlistSlice";
import React from "react";

export default function wishlist() {
  const { wishlist } = useWishlistStore();
  const isEmptyList = wishlist.length === 0;
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="py-20 md:py-24 px-10">
          <div className="space-y-2 pb-8">
            <h1 className="text-3xl md:text-4xl font-bold">
              Your Wishlist {""}
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                Product
              </span>
            </h1>
            <p className="text-base text-gray-500">Checkout before out of stock</p>
          </div>
          {isEmptyList ? (
            <div className="w-full h-full flex justify-center py-14">Empty</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {wishlist.map((product, index) => (
                <ProductCard product={product} key={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
