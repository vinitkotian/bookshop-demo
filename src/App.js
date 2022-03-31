import React from 'react';
import './App.css';
import ListBooksContainer from './Books/ListBooksContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import BookPurchaseContainer from './Containers/BookPuchase/BookPurchaseContainer';
import BookDetails from "./Components/BookDetails/BookDetails";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path={'/'} element={<ListBooksContainer/>}/>
                    <Route
                        path={'/purchase/:bookId'}
                        element={<BookPurchaseContainer/>}
                    />
                    <Route
                        path={'/bookDetails/:bookId'}
                        element={<BookDetails/>}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
