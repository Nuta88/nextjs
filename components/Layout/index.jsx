import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { loginService } from '../../services';
import { apiUrls } from '../../constatnts/api';
import { isAuthorizedPath } from '../../utils/router';

import Header from './Header';
import Footer from './Footer';

export const Layout = ({ children }) => {
  const router = useRouter();
  const { user } = loginService;

  useEffect(() => {
    if (user && isAuthorizedPath(router.asPath)) {
      router.push(apiUrls.root);
    }
  }, []);

  return (
    <>
      {user && <Header />}
      <main>
        <div className="content">
          {children}
        </div>
      </main>
      {user && <Footer />}
    </>
  )
};
