import axios from 'axios';

export default class BookModel {
    static fetchAll = async () => {
        const response = await axios.get('http://localhost:8080/books', this.authHeaders());
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