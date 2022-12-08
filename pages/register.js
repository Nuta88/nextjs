import Image from 'next/image';
import { Card, Link, RegisterForm, SecondaryTitle } from '../components';
import { apiUrls } from '../constatnts/api';
import styles from '../styles/Login.module.scss';

const Register = () => (
  <div className={styles.main}>
    <div className={styles.header}>
      <Image src="/logo.png" width={70} height={30} alt="next.js" />
    </div>
    <div className={styles.header}>
      <SecondaryTitle strong>Register</SecondaryTitle>
    </div>
    <Card>
      <RegisterForm />
      <Link href={apiUrls.login} className={styles.link}>Back to login</Link>
    </Card>
  </div>
);

export default Register;