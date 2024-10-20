/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import useGetProducts from "@/data/products";
import React from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import ProductCard from "@/components/ProductCard";

export default function products() {
  const { products, isLoading, error } = useGetProducts();

  return (
    <Layout>
      <div className="container mx-auto py-20 md:py-32 px-10">
        <div className="flex justify-between">
          <h1 className="text-3xl md:text-4xl font-bold">Products</h1>
          <div className="">
            <Input placeholder="search..." className="rounded-md" />
          </div>
        </div>

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
              {products.map((product, index) => (
                <ProductCard product={product} key={index} />
              ))}
            </>
          )}
        </div>
        <div className="flex justify-center pt-12">
          <Button className="!rounded-lg">Load More</Button>
        </div>
      </div>
    </Layout>
  );
}
