import fetchAux from './fetchAux';
import { store } from '../redux';

const SERVER_URL = {
  local: "http://127.0.0.1:8000/api",
  rafhome: "http://192.168.15.6:8000/api",
  rafwork: "http://192.168.0.15:8000/api",
  thiago: "http://192.168.0.12:8000/api",
  advoga: "http://31.220.62.126:8000/api",
  club99: "http://31.220.59.226:8000/api",
  fernando: "http://192.168.0.34:8003/api"
}['fernando'];

async function requester(endpoint, params = null, method = 'GET') {
  console.debug(`SERVER ${method} REQUEST: ${endpoint}`);

  const apiToken = store.getState().apiToken;

  const resp = await fetchAux[method.toLowerCase()](
    SERVER_URL,
    endpoint,
    params,
    apiToken
  );

  console.debug(`SERVER ${method} ${endpoint} RESPONSE: `, resp);

  return resp;
}

function get(endpoint, params = null) {
  return requester(endpoint, params, 'GET');
}

function post(endpoint, params = null) {
  return requester(endpoint, params, 'POST');
}

function patch(endpoint, params = null) {
  return requester(endpoint, params, 'PATCH');
}

function del(endpoint, params = null) {
  return requester(endpoint, params, 'DEL');
}


export default {
  get, post, patch, del
}

