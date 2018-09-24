import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export default class API {
  static get(path) {
    return axios.get(BASE_URL + path);
  }

  static post(path) {
    return axios.post(BASE_URL + path);
  }
}
