/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import useGetProducts from "@/data/products";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Bookmark } from "lucide-react";
export default function products() {
  const { products, isLoading, error } = useGetProducts();
  console.log(isLoading, "tew");
  return (
    <Layout>
      <div className="container py-20 md:py-32 px-10">
        <div className="flex justify-between">
          <h1>Products</h1>
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
              {products.splice(0, 6).map((item, index) => (
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
                      <CardTitle className="py-6 pb-4 px-3 flex justify-between">
                        <span className="text-primary ml-2">{item.title}</span>
                        <Button className="cursor-pointer">
                          <Bookmark className="size-5" />
                        </Button>
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
        <div className="flex justify-center pt-12">
          <Button className="!rounded-lg">Load More</Button>
        </div>
      </div>
    </Layout>
  );
}
