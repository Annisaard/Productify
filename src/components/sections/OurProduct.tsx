/* eslint-disable react/jsx-key */
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import useGetProducts from "@/data/products";
import { Badge } from "../ui/badge";
import { Skeleton } from "../ui/skeleton";
export default function Products() {
  const { products, isLoading, error } = useGetProducts();
  return (
    <section className="container !py-8 sm:py-32 px-10">
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
            {products.splice(0, 4).map((item, index) => (
              <div>
                <Card
                  key={index}
                  className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
                >
                  <CardHeader className="p-0 gap-0">
                    <div className="h-full overflow-hidden relative">
                      <Image
                        src={item?.thumbnail}
                        alt="product-image"
                        width={100}
                        height={100}
                        className="w-full object-contain transition-all duration-200 ease-linear size-full "
                      />
                      <div className="absolute top-2 left-4">
                        <Badge>{item.category}</Badge>
                      </div>
                    </div>
                    <CardTitle className="py-6 pb-4 px-6">
                      <span className="text-primary ml-2">{item.title}</span>
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div>test</div>
                  </CardContent>

                  <CardFooter className="space-x-4 mt-auto"></CardFooter>
                </Card>
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
}
