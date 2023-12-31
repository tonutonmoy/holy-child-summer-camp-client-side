import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';



const axiosSecure = axios.create({
  baseURL: 'https://holy-child-summer-camp-server-side.vercel.app',
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext)
  const navigate = useNavigate();



  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const jwtToken = localStorage.getItem('jwt-token');
      if (jwtToken) {
        config.headers.Authorization = `Bearer ${jwtToken}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await logOut();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;