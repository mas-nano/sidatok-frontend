import axios from "axios"
import { useLoadingStore } from "../stores/loading"

const loadingStore = useLoadingStore()
const httpClient = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    "Content-Type": "application/json"
  }
})

httpClient.interceptors.request.use(function (config) {
  const token = localStorage.getItem("REFRESH_TOKEN")
  config.headers.Authorization = token ? `Bearer ${token}` : ""
  loadingStore.toggleLoading()
  return config
})

httpClient.interceptors.response.use(
  function (response) {
    loadingStore.toggleLoading()
    return response
  },
  async function (error) {
    const originalRequest = error.config
    if (error.response) {
      if (error.response.status == 401 && !originalRequest._retry && error.response.data.refresh) {
        originalRequest._retry = true
        try {
          const token = await httpClient.post("/refresh", {
            refreshToken: localStorage.getItem("REFRESH_TOKEN")
          })
          localStorage.setItem("AUTH_TOKEN", token.data.data.token)
          axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem("REFRESH_TOKEN")}`
          loadingStore.toggleLoading()
          return httpClient(originalRequest)
        } catch (error) {}
      }
    }
    loadingStore.toggleLoading()
    return Promise.reject(error)
  }
)

export default httpClient
