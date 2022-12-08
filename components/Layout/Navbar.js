import { useRouter } from 'next/router';
import Image from 'next/image';
import { Dropdown, Menu } from 'antd';

import { Link, CircleButton, AvatarIcon, TextButton } from '../../components';

import { loginService } from '../../services';
import { apiUrls, navigations } from '../../constatnts/api';
import styles from '../../styles/Navbar.module.scss';

const Navbar = () => {
  const { pathname } = useRouter();

  const logout = () => {
    loginService.logout();
  };

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <TextButton onClick={logout}>Logout</TextButton>
          )
        }
      ]}
    />
  );

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
        <Dropdown overlay={menu}>
          <CircleButton icon={<AvatarIcon />} />
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
