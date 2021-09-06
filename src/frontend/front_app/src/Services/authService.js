import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
          var identity= JSON.parse(localStorage.getItem('user'));;
          localStorage.setItem("identify",identity.id);
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(nom,prenom,mobile,username, email, password) {
    return axios.post(API_URL + "signup", {nom,prenom,mobile,
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();