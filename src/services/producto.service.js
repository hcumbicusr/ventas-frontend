import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.API_BASE_URL||'http://localhost:3000/api/v1';

class ProductiService {
  list(searchValue) {
    console.log("searchValue",searchValue);
    return axios.get(API_URL + '/producto', { headers: authHeader() });
  }
}

export default new ProductiService();
