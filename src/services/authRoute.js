/*import axios from "axios";
import jwtDecode from "jwt-decode";
const apiUrl = 'http://18.223.68.169/users/login';

export function login(data) {
    return axios.post(`${apiUrl}/auth`, data);
}

export function getCurrentUser() {
    try {
        const token = localStorage.getItem("token");
        return jwtDecode(token);
    } catch (error) {
        return null;
    }
}

export function logout() {
    localStorage.removeItem("token");
}*/