import React from "react";
import {render, waitFor, screen} from '@testing-library/react'
import BookDetails from "./BookDetails";
import BookModel from "./BookModel";
import bookById from "./__factory__/book-details";
import {act} from "@testing-library/react";

describe('BooksDetailsTest', () => {
    beforeEach(() => {
        BookModel.fetchDetailsById = jest.fn().mockResolvedValue(bookById());
    });
    it('should Loading... when book is selected', function () {
        const book = {id: 1, name: "Malcom Gladwell", authorName: "Outliers", price: {currency: 'INR', amount: 200}};
        act(()=>{
            const { getByText } = render(
                <BookDetails
                    backToHomePage = {jest.fn()}
                    selectedBook = {book}
                />
            );
        })
        expect(screen.getByText('Loading...')).toBeTruthy();
    });

    it('should load page when async call resolves', async function () {
        const book = {id: 1, name: "Malcom Gladwell", authorName: "Outliers", price: {currency: 'INR', amount: 200}};
        act(()=>{
            const { getByText } = render(
                <BookDetails
                    backToHomePage = {jest.fn()}
                    selectedBook = {book}
                />
            );
        })

        await waitFor(() => {
            expect(BookModel.fetchDetailsById).toHaveBeenCalled();
            expect(screen.getByText('Back To Results')).toBeTruthy();
        })
    });
})