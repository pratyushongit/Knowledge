import { useState, useEffect, useRef } from "react";
import axios from "axios";

const useFetch = (url = "") => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(() => !!url);
  const [error, setError] = useState(null);
  const cache = useRef({});

  useEffect(() => {
    const fetchData = async () => {
      if (!url) {
        setLoading(false);
        setData(null);
        setError(null);
        return;
      }
      try {
        setLoading(true);
        if (cache.current[url]) {
          setData(cache[url]);
        } else {
          const { data } = await axios.get(url);
          cache.current[url] = data;
          setData(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchData();
    }
  }, [url, cache]);

  return { data, loading, error };
};

export default useFetch;
