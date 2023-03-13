import axios from "axios";
import { parse, stringify } from 'qs';

const axiosClient = axios.create({
    baseURL : "http://localhost:9000",
    headers : {
        "Content-Type": "application/json; charset=utf-8"
    },
    paramsSerializer :
        {
        encode: parse,
        serialize: stringify,
    },

});

const getAccessToken = () => {
    let token = sessionStorage.getItem("_accessToken");
    return token?JSON.parse(token):"";
}

axiosClient.interceptors.request.use(async(config) =>{
    var token = getAccessToken();
    config.headers.Authorization = `Bearer ${token.access_token}`;
    return config;
});

axiosClient.interceptors.response.use((response) => {
    if (response && response.data)
        return response
    },
    (error) => {
        throw error;
    }
);

export default axiosClient;