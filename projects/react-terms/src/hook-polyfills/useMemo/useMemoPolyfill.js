import { useEffect, useRef } from "react";

const isEqual = (prevDeps, currentDeps) => {
  if (prevDeps.length !== currentDeps.length) return false;
  if (!prevDeps.every((el) => currentDeps.includes(el))) return false;
  return true;
};

const useMyMemo = (callback, dependency) => {
  const memoisedRef = useRef(null);

  if (!memoisedRef.current || !isEqual(memoisedRef.current.deps, dependency)) {
    memoisedRef.current = {
      deps: dependency,
      value: callback(),
    };
  }

  useEffect(() => {
    return () => {
      memoisedRef.current = null;
    };
  }, []);

  return memoisedRef.current.value;
};

export default useMyMemo;
