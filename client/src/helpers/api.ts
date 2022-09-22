import axios from "axios"

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

export const login = async (username: any, password: any) => {
    await api.post('auth/login', {
        username: username,
        password: password
    })
    .then(response => {
        console.log(response)
        localStorage.setItem('token', response.data.accessToken)
    })
    .catch(error => {
        if (error.response.status === 401) {
            return false;
        }
    })
}