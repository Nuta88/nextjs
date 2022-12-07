import { loginService } from '../services';

import Header from './Header';
import Footer from './Footer';

export const Layout = ({ children }) => {
  const { user } = loginService;

  return (
    <>
      {user && <Header />}
      <main>{children}</main>
      {user && <Footer />}
    </>
  )
};
