import React from 'react';
import './App.css';
import ListBooksContainer from './Books/ListBooksContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookPurchaseContainer from './Containers/BookPuchase/BookPurchaseContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path={'/'} element={<ListBooksContainer />} />
          <Route
            path={'/purchase/:bookId'}
            element={<BookPurchaseContainer />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
