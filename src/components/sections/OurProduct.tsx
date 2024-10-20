/* eslint-disable react/jsx-key */
import React from "react";
import useGetProducts from "@/data/products";
import { Skeleton } from "../ui/skeleton";
import ProductCard from "../ProductCard";
export default function Products() {
  const { products, isLoading, error } = useGetProducts();
  return (
    <section className="container mx-auto py-8 sm:py-32 px-10">
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Best {""}
        </span>
        Product
      </h2>
      <div className="grid grid-cols-4 gap-4 pt-4">
        {isLoading ? (
          <>
            <Skeleton className="h-[18rem] w-[17rem]" />
            <Skeleton className="h-[18rem] w-[17rem]" />
            <Skeleton className="h-[18rem] w-[17rem]" />
            <Skeleton className="h-[18rem] w-[17rem]" />
          </>
        ) : (
          <>
            {products.splice(0, 4).map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
          </>
        )}
      </div>
    </section>
  );
}
