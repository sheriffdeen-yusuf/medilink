import { secureAxiosInstance } from '@/services/axios';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const useCheckLoggedIn = () => {
  const router = useRouter();
  useEffect(() => {
    secureAxiosInstance
      .get('/securePing')
      .then((res) => {
        console.log('sp', res);
        if (res.data.status === 'failed') {
          router.push('/login');
        }
        return;
      })
      .catch((err) => {
        console.log(err);
        router.push('/login');
      });
  }, []);
};

export default useCheckLoggedIn;
