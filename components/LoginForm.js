import { useRouter } from 'next/router';
import Image from 'next/image';
import Form from 'react-vanilla-form';
import { Button, Card, Typography, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { TextInput, PasswordInput, required } from './Form';

import { loginService } from '../services';
import styles from '../styles/Login.module.scss';
import { apiUrls } from '../constatnts/api';

const { Title } = Typography;

const validation = {
  name: required,
  password: required,
};

const errorMessage = (error) => {
  message.error({
    type: 'error',
    content: error,
  });
};

export const LoginForm = () => {
  const router = useRouter();
  const { login } = loginService;

  const handleSubmit = (values, error) => {
    if ( !error ) {
      login(values)
        .then(() => {
          router.push(apiUrls.root);
        })
        .catch(errorMessage);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Image src="/logo.png" width={70} height={30} alt="next.js" />
      </div>
      <div className={styles.header}>
        <Title type="secondary" strong>Welcome</Title>
      </div>
      <Card>
        <Form
          onSubmit={handleSubmit}
          customErrorProp="error"
          validation={validation}
        >
          <TextInput
            name="name"
            label="Your email or name"
            size="large"
            placeholder="input name"
            prefix={<UserOutlined />}
          />
          <PasswordInput
            name="password"
            label="Your password"
            size="large"
            placeholder="input password"
          />
          <Button type="primary" htmlType="submit" size="large" block>
            Sign in
          </Button>
        </Form>
      </Card>
    </div>
  );
};
