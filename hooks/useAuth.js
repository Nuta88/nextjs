import { useEffect, useCallback, useState } from 'react';
import { useRouter } from 'next/router';

import { loginService } from '../services';
import { apiUrls, authorizedPaths } from '../constatnts/api';
import { isAuthorizedPath } from '../utils/router';

export const useAuth = () => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const { user } = loginService;

  const authCheck = useCallback((url) => {
    if (!user && !isAuthorizedPath(url)) {
      setAuthorized(false);
      router.push({ pathname: apiUrls.login });
    } else {
      setAuthorized(true);
    }
  }, [setAuthorized, authorizedPaths, isAuthorizedPath, router]);

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

  return {
    authorized
  }
};
