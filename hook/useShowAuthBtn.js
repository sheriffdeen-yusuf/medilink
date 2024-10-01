import { useEffect, useState } from 'react';

const useShowAuthBtn = () => {
  const isBrowser = () => typeof window !== 'undefined';
  const [data, setData] = useState();

  useEffect(() => {
    if (isBrowser()) {
      const data = JSON.parse(localStorage.getItem('medilinkUser')) || undefined;

      setData(data);
    } else setData(data);
  }, []);

  return data;
};

export default useShowAuthBtn;
