import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3500/api',
})

export const userSignup = payload => api.post(`/signup`, payload);

const apis = {
    userSignup
}

export default apis