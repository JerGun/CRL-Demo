import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { AxiosRequestConfig } from 'axios'

export default class BaseService {
  static $axios: NuxtAxiosInstance
  static setAxiosInstance(instance: NuxtAxiosInstance) {
    this.$axios = instance
  }

  static _get(url: string, config?: AxiosRequestConfig) {
    return this.$axios.get(url, config).then((res) => Promise.resolve(res.data))
  }

  static _post(url: string, data: any, config?: AxiosRequestConfig) {
    return this.$axios
      .post(url, data, config)
      .then((res) => Promise.resolve(res.data))
  }

  static _put(url: string, data: any, config?: AxiosRequestConfig) {
    return this.$axios
      .put(url, data, config)
      .then((res) => Promise.resolve(res.data))
  }
}
