import BookModel from "./BookModel";
import booksFactory from "./__factory__/books-factory";
import axios from 'axios';
import runtimeEnv from '@mars/heroku-js-runtime-env';
const env = runtimeEnv();
jest.mock('axios');

describe('BookModel', () => {
    it('should fetch all books from api',  async () => {
        axios.get = jest.fn().mockResolvedValue({data: booksFactory()});
        const books = await BookModel.fetchAll();
        const url = `${env.REACT_APP_API_URL}/books`;
        const headers = {"auth": {"password": "Password@123", "username": "system-user@bookshop.com"}};
        expect(axios.get).toHaveBeenCalledWith(url, headers);
        expect(books).toHaveLength(2);
    });
})

