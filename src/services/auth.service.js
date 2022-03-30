import axios from 'axios';

const API_URL = process.env.API_BASE_URL||'http://localhost:3000/api/v1';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + '/auth/login', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.body.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data.body));
        }

        return response.data.body;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + '/user', {
      username: user.username,
      password: user.password,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      rol: 'Invitado'
    });
  }
}

export default new AuthService();
