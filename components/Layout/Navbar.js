import { useRouter } from 'next/router';
import Image from 'next/image';
import { Dropdown } from 'antd';

import { Link, CircleButton, AvatarIcon, TextButton } from '../../components';

import { loginService } from '../../services';
import { apiUrls, navigations } from '../../constatnts/api';
import styles from '../../styles/Navbar.module.scss';

const Navbar = () => {
  const { pathname } = useRouter();

  const logout = () => {
    loginService.logout();
  };

  const items = [
    {
      label: <TextButton onClick={logout}>Logout</TextButton>,
      key: 'logout'
    }
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href={apiUrls.root}>
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
        <Dropdown menu={{ items }}>
          <CircleButton icon={<AvatarIcon />} />
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
