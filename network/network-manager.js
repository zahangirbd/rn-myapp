import {Headers} from './api-header-constant';

export default class NetworkManager {
  static requestGET(url, headers = Headers) {
    return fetch(url, {
      headers,
    });
  }

  static requestPOST(url, body, headers = Headers) {
    return fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });
  }

  static requestHEAD(url) {
    return fetch(url, {
      method: 'HEAD',
    });
  }

  static requestPUT(url, body, headers = Headers) {
    return fetch(url, {
      method: 'PUT',
      headers,
      body: JSON.stringify(body),
    });
  }

}
