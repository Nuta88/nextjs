import { useRouter } from 'next/router';
import Form from 'react-vanilla-form';

import { AvatarIcon, SubmitButton } from '../index';

import { TextInput, PasswordInput, required, isEmail } from '../Form';

import { loginService } from '../../services';
import { apiUrls } from '../../constatnts/api';

const validation = {
  name: required,
  email: [required, isEmail],
  password: required,
};

const onErrorMessage = (error) => {
  message.error({
    type: 'error',
    content: error,
  });
};

export const RegisterForm = () => {
  const router = useRouter();
  const { register } = loginService;

  const handleSubmit = (values, error) => {
    if ( !error ) {
      register(values)
        .then(() => {
          router.push(apiUrls.root);
        })
        .catch(onErrorMessage);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      customErrorProp="error"
      validation={validation}
    >
      <TextInput
        name="name"
        label="Your name"
        size="large"
        placeholder="input name"
        prefix={<AvatarIcon />}
      />
      <TextInput
        name="email"
        label="Your email"
        size="large"
        placeholder="input email"
        prefix={<AvatarIcon />}
      />
      <PasswordInput
        name="password"
        label="Your password"
        size="large"
        placeholder="input password"
      />
      <SubmitButton type="primary" size="large" block>
        Register
      </SubmitButton>
    </Form>
  );
};
