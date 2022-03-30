import BookModel from "./BookModel";
import booksFactory from "./__factory__/books-factory";
import axios from 'axios';
import {bookById} from "./__factory__/book-details";
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

    it('should fetch book details given book Id from api',  async () => {
        axios.get = jest.fn().mockResolvedValue({data: bookById()});
        const id =1;
        const book = await BookModel.fetchDetailsById(id);
        const url = `${env.REACT_APP_API_URL}/book/${id}`;
        const headers = {"auth": {"password": "Password@123", "username": "system-user@bookshop.com"}};
        expect(axios.get).toHaveBeenCalledWith(url, headers);
        expect(book).toEqual({id: 1, name: "Malcom Gladwell", authorName: "Outliers", price: {currency: 'INR', amount: 200}});
    });
})

