import { useState, useRef, useEffect } from "react";

type TFetchState<T> = {
  loading: boolean;
  error: string | null;
  data: T | null;
};

const useFetchTS = <T,>(url: string = ""): TFetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const cache = useRef<{ [key: string]: T }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        if (cache.current[url]) {
          setData(cache.current[url]);
        } else {
          const response = await fetch(url);
          const data = await response.json();
          cache.current[url] = data;
          setData(data);
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    if (url) fetchData();
  });

  return { data, loading, error };
};

export default useFetchTS;
