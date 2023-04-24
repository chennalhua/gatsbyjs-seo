import axios from "axios";
export function APIAuthorization() {
    let token = localStorage.getItem('_token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}