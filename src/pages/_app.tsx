import "@/styles/globals.css";
import axios from "axios";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        dedupingInterval: 600000,
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}
