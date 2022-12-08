import Image from 'next/image';

import { Card, Link, LoginForm, SecondaryTitle } from '../components';
import { apiUrls } from '../constatnts/api';
import styles from '../styles/Login.module.scss';

const Login = () => (
  <div data-testid="login-page" className={styles.main}>
    <div className={styles.header}>
      <Image src="/logo.png" width={70} height={30} alt="next.js" />
    </div>
    <div className={styles.header}>
      <SecondaryTitle strong>Welcome</SecondaryTitle>
    </div>
    <Card>
      <LoginForm />
      <Link
        href={apiUrls.register}
        className={styles.link}>
        Register now
      </Link>
    </Card>
  </div>
);

export default Login;
