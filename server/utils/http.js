const fetch = require('node-fetch');
const API_ROOT = "https://backendapi.turing.com";
// Swagger docs: https://backendapi.turing.com/docs/

const get = async (uri) => {
  const data = await fetch(`${API_ROOT}/${uri}`);
  const result = await data.json();
  return result;
}

const post = async (uri, params) => {
  const data = await fetch(`${API_ROOT}/${uri}`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params)
  });
  const result = await data.json();
  return result;
}

const remove = async (uri) => {
  const data = await fetch(`${API_ROOT}/${uri}`, {
    method: 'delete'
  });

  const result = await data.json();
  return result;
}

const patch = async (uri, params) => {
  const data = await fetch(`${API_ROOT}/${uri}`, {
    method: 'patch',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params)
  });
  const result = await data.json();
  return result;
}

module.exports = {
  get,
  post,
  remove,
  patch
}
