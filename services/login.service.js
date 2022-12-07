import { BehaviorSubject } from 'rxjs';
import Router from 'next/router';

import { fetchWrapper } from '../api/fetchWrapper';
import { apiUrls } from '../constatnts/api';

const userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user')));
const url = `/api${apiUrls.login}`;

const login = async ({ name, password }) => {
  return fetchWrapper.post(url, { name, password })
    .then(user => {
      userSubject.next(user);
      localStorage.setItem('user', JSON.stringify(user));

      return user;
    });
};

function logout() {
  localStorage.removeItem('user');
  userSubject.next(null);
  Router.push(apiUrls.login);
}


export const loginService = {
  get user () { return userSubject.value },
  login,
  logout
};
