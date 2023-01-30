import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001' });

const postRegisterAdmin = async (data) => {
  try {
    const response = await API.post('/admin/register', data);
    return response;
  } catch (error) {
    console.log('catch', error.stack);
  }
};

export default postRegisterAdmin;
