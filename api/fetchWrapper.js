import { loginService } from '../services';

const get = (url) => {
  const requestOptions = {
    method: 'GET'
  };
  return fetch(url, requestOptions).then(handleResponse);
}

const post = (url, body) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    credentials: 'include',
    mode: 'no-cors',
    body: JSON.stringify(body)
  };

  return fetch(url, requestOptions).then(handleResponse);
};

const put = (url, body) => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  return fetch(url, requestOptions).then(handleResponse);
};

const handleResponse = (response) => {
  return response.text().then(text => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if ([401, 403].includes(response.status) && loginService.user) {
        loginService.logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
};

export const fetchWrapper = {
  get,
  post,
  put
};
