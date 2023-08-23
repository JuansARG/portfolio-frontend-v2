import axios from 'axios';

const backendApi = axios.create({
    baseURL: import.meta.env.VITE_URL_BACKEND,
});

export default backendApi;