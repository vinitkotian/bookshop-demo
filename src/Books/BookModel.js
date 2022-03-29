import axios from 'axios';
import runtimeEnv from '@mars/heroku-js-runtime-env';
const env = runtimeEnv();
export default class BookModel {
    static fetchAll = async () => {
        const response = await axios.get(`http://localhost:8080/books`, this.authHeaders());
        return response.data;
    }

    static authHeaders() {
        return {
            auth: {
                username: 'paul@gmail.com',
                password: 'paul',
            },
        }
    }
}