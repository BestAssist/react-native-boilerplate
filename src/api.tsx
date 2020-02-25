import apisauce from 'apisauce';

export const api = apisauce.create({
  baseURL: 'https://api.github.com/',
  headers: {Accept: 'application/vnd.github.v3+json'},
  timeout: 15000,
});

export const getProfile = (body: any) => {
  return api.get(`users/${body.username}`);
};

export const getFollower = (body: any) => {
  return api.get(`users/${body.username}/followers`);
};
