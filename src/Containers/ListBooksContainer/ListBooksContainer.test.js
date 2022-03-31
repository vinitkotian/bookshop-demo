import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import ListBooksContainer from './ListBooksContainer';
import BookModel from "../../BooksModel/BookModel";
import booksFactory from '../../BooksModel/__factory__/books-factory';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock("../../BooksModel/BookModel");

describe('ListBooks', () => {
  beforeEach(() => {
    BookModel.fetchAll = jest.fn().mockResolvedValue(booksFactory());
  });

  it('should fetch the books', async function () {
    const { getByText } = render(
      <Router>
        <ListBooksContainer />)
      </Router>
    );

    await waitFor(() => {
      // expect(BookModel.fetchAll).toHaveBeenCalled();
      expect(getByText('Malcom Gladwell')).toBeInTheDocument();
    });
  });

  it('should render the app bar with search', async function () {
    const { getByText } = render(
      <Router>
        <ListBooksContainer />
      </Router>
    );
    expect(getByText('ThoughtWorks Book Shop')).toBeTruthy();
    expect(screen.getByPlaceholderText('Search…')).toBeTruthy();
  });

  // it('validate search input', async function () {
  //     render(<ListBooksContainer/>);
  //     const searchInput = screen.getByPlaceholderText('Search…');
  //     fireEvent.change(searchInput, {target: {value: 'Harry'}});
  //     expect(searchInput.value).toBe('Harry')
  // });
});
