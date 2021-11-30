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
