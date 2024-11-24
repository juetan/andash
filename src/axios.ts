import axios from "axios"

declare module "axios" {
  interface AxiosInstance {
    /**
     * util for use interceptor
     * @param axios
     */
    use(axios: AxiosInstance): AxiosInstance
  }
}

axios.prototype.use = function (fn: any) {
  fn(this)
  return this
}

export * from "axios"
export { axios }