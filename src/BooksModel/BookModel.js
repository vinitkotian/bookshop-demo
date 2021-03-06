import axios from 'axios';
import runtimeEnv from '@mars/heroku-js-runtime-env';
const env = runtimeEnv();
export default class BookModel {
    static fetchAll = async () => {
        const response = await axios.get(`${env.REACT_APP_API_URL}/books`, this.authHeaders());
        return response.data;
    }

    static fetchAllBySearch = async (search) => {
        const response = await axios.get(`${env.REACT_APP_API_URL}/books?search=${search}`, this.authHeaders());
        return response.data;
    }

    static fetchDetailsById = async (id) => {
        const response = await axios.get(`${env.REACT_APP_API_URL}/book/${id}`, this.authHeaders());
        return response.data;
    }

    static authHeaders() {
        return {
            auth: {
                username: 'system-user@bookshop.com',
                password: 'Password@123',
            },
        }
    }
}