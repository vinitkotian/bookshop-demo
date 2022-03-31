import React from 'react';
import './App.css';
import ListBooksContainer from './Containers/ListBooksContainer/ListBooksContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import BookPurchaseContainer from './Containers/BookPuchase/BookPurchaseContainer';
import BookDetailsContainer from "./Containers/BookDetails/BookDetailsContainer";

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
                        element={<BookDetailsContainer/>}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
