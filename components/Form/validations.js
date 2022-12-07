export const required = v => v
  ? false
  : 'This field is required';

export const isEmail = v => /\S+@\S+\.\S+/.test(v)
  ? false
  : 'Should be correct emil address';
