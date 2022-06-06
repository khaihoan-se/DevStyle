import axiosClient from "./axiosClient";

interface ParamsType {
    [key: string]: any;
 }
const LoginApi = {
    login: (params: ParamsType) => { 
        const url = '/user/login';
        return axiosClient.post(url, params);
    },
    register: (params: ParamsType) => {
        const url = '/user/register';
        return axiosClient.post(url, params);
    },
    activation: (token: any) => {
        const url = '/user/activation';
        return axiosClient.post(url, token);
    },
    getTokenSuccess: () => {
        const url = '/user/refresh_token';
        return axiosClient.post(url, null)
    }
}

export default LoginApi;