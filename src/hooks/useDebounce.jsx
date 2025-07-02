import { useEffect, useState } from "react";

const useDebounce = (inputValue) => {
  const [debounceValue, setDebounceValue] = useState(inputValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(inputValue);
    }, 500);
    return () => clearInterval(timer);
  }, [inputValue]);

  return { debounceValue };
};

export default useDebounce;
