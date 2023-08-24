import backendApi from './../api/BackendApi';
import type { AuthResponse } from '../interfaces/authResponse';

export const login = async() => {

    let token = localStorage.getItem('ACCESS_TOKEN');
    token = null;

    if ( !token ) {

        const { data: loginResponse } = await backendApi.post<AuthResponse>('/api/v1/auth/login', {
            email: import.meta.env.VITE_USERNAME,
            password: import.meta.env.VITE_PASSWORD
        }, {
            withCredentials: true,
        });

        localStorage.setItem('ACCESS_TOKEN', loginResponse.token);
        token = localStorage.getItem('ACCESS_TOKEN');
    }   
}