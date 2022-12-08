import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { loginService } from '../../services';
import { apiUrls, publicPaths } from '../../constatnts/api';

import Header from './Header';
import Footer from './Footer';

export const Layout = ({ children }) => {
  const router = useRouter();
  const { user } = loginService;
  const path = router.asPath.split('?')[0];

  useEffect(() => {
    if (user && publicPaths.includes(path)) {
      router.push(apiUrls.root);
    }
  }, []);

  return (
    <>
      {user && <Header />}
      <main>{children}</main>
      {user && <Footer />}
    </>
  )
};
