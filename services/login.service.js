import { BehaviorSubject } from 'rxjs';
import Router from 'next/router';

import { fetchWrapper } from '../api/fetchWrapper';
import { apiUrls } from '../constatnts/api';

const userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user')));

const login = async ({ email, password }) => {
  return fetchWrapper.post(`/api${apiUrls.login}`, { email, password })
    .then(user => {
      userSubject.next(user);
      localStorage.setItem('user', JSON.stringify(user));

      return user;
    });
};

const logout = () => {
  localStorage.removeItem('user');
  userSubject.next(null);
  Router.push(apiUrls.login);
};

const register = (user) => {
  return fetchWrapper.post(`/api${apiUrls.register}`, user)
    .then(user => {
      userSubject.next(user);
      localStorage.setItem('user', JSON.stringify(user));

      return user;
    });
}


export const loginService = {
  get user () { return userSubject.value },
  login,
  register,
  logout
};
