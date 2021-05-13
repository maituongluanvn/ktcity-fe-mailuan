import Axios from 'axios';
import config from 'config.json';

function initAxiosInstance() {
  const axiosInstance = Axios.create({
    baseURL: config.BACKEND_URL,
    withCredentials: false,
  });

  // Add a response interceptor
  axiosInstance.interceptors.response.use(
    response => response,
    error => {
      return Promise.reject(error);
    },
  );

  const getData = async (url, config = {}) => {
    const { data } = await axiosInstance.get(url, { ...config });
    return data;
  };

  const putData = async (url, body = {}, config = {}) => {
    const { data } = await axiosInstance.put(url, body, config);
    return data;
  };

  const postData = async (url, body = {}, config = {}) => {
    const { data } = await axiosInstance.post(url, body, config);
    return data;
  };

  const deleteData = async (url, body = {}, config = {}) => {
    const { data } = await axiosInstance.delete(url, { data: body }, config);
    return data;
  };

  const instanceAPI = {
    //
    getUsers: page => getData(`/user?skip=${page}`),
  };

  return instanceAPI;
}

export const api = initAxiosInstance();
