import axios from 'axios';

export default class BookModel {
    static fetchAll = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/books`, this.authHeaders());
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