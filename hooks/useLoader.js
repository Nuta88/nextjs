import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const useLoader = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const showLoader = () => {
      setIsLoading(true);
    };
    const hideLoader = () => {
      setIsLoading(false);
    };

    router.events.on('routeChangeStart', showLoader);
    router.events.on('routeChangeComplete', hideLoader);
    router.events.on('routeChangeError', hideLoader);

    return () => {
      router.events.off('routeChangeStart', showLoader);
      router.events.off('routeChangeComplete', hideLoader);
      router.events.off('routeChangeError', hideLoader);
    }
  }, [router, isLoading]);


  return {
    isLoading
  }
};
