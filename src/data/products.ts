import axios from "axios";
import { useMemo } from "react";
import useSWR from "swr";

const options = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};

const fetcher = (url: string) => axios.get(url).then((res) => res.data);
export default function useGetProducts() {
  const { data, error, isLoading, isValidating } = useSWR(
    `https://dummyjson.com/products`,
    fetcher,
    options,
  );
  return {
    products: (data?.products as IProductItem[]) || [],
    isLoading,
    isValidating,
    error,
    productEmpty: !isLoading && !data.products.length,
  };
}
