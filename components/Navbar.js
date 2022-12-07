import { useRouter } from 'next/router';
import { Button } from 'antd';

import { loginService } from '../services';
import { navigations } from '../constatnts/api';
import styles from '../styles/Navbar.module.scss';

import { Link, Image } from '../components';

const Navbar = () => {
  const { pathname } = useRouter();

  const logout = () => {
    loginService.logout();
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/logo.png" width={60} height={20} alt="next.js" />
        </Link>
      </div>
      <div className={styles.links}>
        {navigations.map(({ id, title, path }) => (
          <Link
            key={id}
            href={path}
            className={pathname === path ? styles.active : null}
          >
            {title}
          </Link>
        ))}
        <Button ghost onClick={logout}>Logout</Button>
      </div>
    </nav>
  );
};

export default Navbar;
