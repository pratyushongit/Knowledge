import { useState, useEffect, useRef } from "react";
import axios from "axios";

const useFetch = (url = "") => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const cache = useRef({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        if (cache.current[url]) {
          setData(cache[url]);
        } else {
          const { data } = await axios.get(url);
          cache.current = { ...cache.current, [url]: data };
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
