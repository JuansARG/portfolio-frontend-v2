import axios from 'axios';

const backendApi = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    },
    // withCredentials: true
});

export default backendApi;