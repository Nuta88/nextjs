import { useRouter } from 'next/router';
import Form from 'react-vanilla-form';
import { message } from 'antd';

import { TextInput, PasswordInput, required, isEmail } from '../Form';
import { AvatarIcon, SubmitButton } from '../index';

import { loginService } from '../../services';
import { apiUrls } from '../../constatnts/api';

const validation = {
  email: [required, isEmail],
  password: required,
};

const onErrorMessage = (error) => {
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
          router.push(apiUrls.root, undefined, { shallow: true });
        })
        .catch(onErrorMessage);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      customErrorProp="error"
      validation={validation}
      data-testid="login-form"
    >
      <TextInput
        data-testid="login-input-email"
        name="email"
        label="Your email"
        size="large"
        placeholder="input email"
        prefix={<AvatarIcon />}
      />
      <PasswordInput
        data-testid="login-input-password"
        name="password"
        label="Your password"
        size="large"
        placeholder="input password"
      />
      <SubmitButton data-testid="login-save-btn" type="primary" size="large" block>
        Sign in
      </SubmitButton>
    </Form>
  );
};
