import axios, { AxiosRequestConfig } from "axios";


export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});


export const useAPI = (config?: AxiosRequestConfig) => {
  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    ...config,
  });
}


export const useAuthenticatedAPI = (config?: AxiosRequestConfig) => {
  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  })
}