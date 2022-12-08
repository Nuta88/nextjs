import { authorizedPaths } from '../constatnts/api';

export const isAuthorizedPath = url => {
  const path = url.split('?')[0];

  return authorizedPaths.includes(path);
};
