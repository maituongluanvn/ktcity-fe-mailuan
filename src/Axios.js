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

  const putData = async (url, body = {}) => {
    const { data } = await axiosInstance.put(url, body);
    return data;
  };

  const postData = async (url, body = {}, config = {}) => {
    const { data } = await axiosInstance.post(url, body, config);
    return data;
  };

  // eslint-disable-next-line no-unused-vars
  const deleteData = async (url, body = {}, config = {}) => {
    const { data } = await axiosInstance.delete(url, { data: body }, config);
    return data;
  };

  const instanceAPI = {
    // users
    getUsers: (page, status, createdAt) =>
      getData(`/user?skip=${page}&status=${status}&createdAt=${createdAt}`),
    updateUser: (id, body) => putData(`/user/${id}`, body),
    createUser: body => postData(`/user`, body),
  };

  return instanceAPI;
}

export const api = initAxiosInstance();
