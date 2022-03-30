import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.API_BASE_URL||'http://localhost:3000/api/v1';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + '/user');
  }

  getUserBoard() {
    return axios.get(API_URL + '/user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + '/mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + '/admin', { headers: authHeader() });
  }
}

export default new UserService();
