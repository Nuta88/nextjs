import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { loginService } from '../services';
import { publicPaths } from '../constatnts/api';

export const useAuth = () => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const { user } = loginService;

  useEffect(() => {
    authCheck(router.asPath);

    const hideContent = () => {
      setAuthorized(false);
    };

    router.events.on('routeChangeStart', hideContent);

    router.events.on('routeChangeComplete', authCheck)

    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    }
  }, [router, authCheck, user]);

  function authCheck(url) {
    const path = url.split('?')[0];

    if (!user && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({ pathname: '/login' });
    } else {
      setAuthorized(true);
    }
  }

  return {
    authorized
  }
};
