const useLocalStorage = (key) => {
  const setLocalStorage = (item) => {
    try {
      localStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      console.log(error);
    }
  };

  const getLocalStorage = (initialValue) => {
    try {
      let data = localStorage.getItem(key);
      return data ? JSON.parse(data) : initialValue;
    } catch (error) {
      console.log(error);
    }
  };

  const removeLocalStorage = () => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  };

  return { setLocalStorage, getLocalStorage, removeLocalStorage };
};

export default useLocalStorage;
