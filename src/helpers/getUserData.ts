import type { UserPortfolio } from '../interfaces/userPortfolio';
import backendApi from './../api/BackendApi';

export const getUserData = async():Promise<UserPortfolio> => {

    const token = localStorage.getItem('ACCESS_TOKEN');

    const { data } = await backendApi.get<UserPortfolio>('/api/v1/users/1', {
        headers: {
            Authorization: `Bearer ${ token }`,
        }
    });

    return data;
}