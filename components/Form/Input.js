import { Input } from 'antd';

import { FormField } from './FormField';

const { Password } = Input;

export const TextInput = ({ label, name, error, ...props }) => (
  <FormField label={label} name={name} error={error}>
    <Input name={name} {...props} status={error && "error"} />
  </FormField>
);

export const PasswordInput = ({ label, name, error, ...props }) => (
  <FormField label={label} name={name} error={error}>
    <Password name={name} {...props} status={error && "error"} />
  </FormField>
);
