import React from "react";
import {render, waitFor, screen} from '@testing-library/react'
import BookDetails from "./BookDetails";
import BookModel from "./BookModel";
import {bookById,bookByIdWithInventory} from "./__factory__/book-details";
import {act} from "@testing-library/react";

describe('BooksDetailsTest', () => {

    it('should load page when async call resolves', async function () {
        BookModel.fetchDetailsById = jest.fn().mockResolvedValue(bookById());
        const book = {id: 1, name: "Malcom Gladwell", authorName: "Outliers", price: {currency: 'INR', amount: 200}};
        await act(async ()=>{
             await render(
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

    it('should show out of stock warning', async function () {
        BookModel.fetchDetailsById = jest.fn().mockResolvedValue(bookByIdWithInventory());
        const book = bookByIdWithInventory();
        await act(async ()=>{
            await render(
                <BookDetails
                    backToHomePage = {jest.fn()}
                    selectedBook = {book}
                />
            );
        })

        await waitFor(() => {
            expect(BookModel.fetchDetailsById).toHaveBeenCalled();
            expect(screen.getByText("! Out Of Stock")).toBeTruthy();
        })
    });

    it('should show review element when review list has reviews', async function () {
        BookModel.fetchDetailsById = jest.fn().mockResolvedValue(bookByIdWithInventory());
        const book = bookByIdWithInventory();
        await act(async ()=>{
            await render(
                <BookDetails
                    backToHomePage = {jest.fn()}
                    selectedBook = {book}
                />
            );
        })

        await waitFor(() => {
            expect(BookModel.fetchDetailsById).toHaveBeenCalled();
            expect(screen.getByText("User:guest@gmail.com")).toBeTruthy();
        })
    });
})