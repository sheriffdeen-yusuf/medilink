import { secureAxiosInstance } from '@/services/axios';
import { useEffect } from 'react';
import { logout } from '@/lib/utils';

const useCheckLoggedIn = () => {
  useEffect(() => {
    secureAxiosInstance
      .get('/securePing')
      .then((res) => {
        // console.log('sp', res);
        if (res.data.status === 'failed') {
          logout();
        }
        return;
      })
      .catch((err) => {
        console.log(err);
        logout();
      });
  }, []);
};

export default useCheckLoggedIn;
