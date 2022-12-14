import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export default class APICore {
  protected token: string = '';

  protected units: string = '';

  private axios: AxiosInstance;

  constructor(options: AxiosRequestConfig = {}, token = '', units = '') {
    this.token = token;
    this.units = units;
    this.axios = axios.create(options);
  }

  async get(uri: string, params: any) {
    try {
      return await this.axios.get(uri, { params });
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
