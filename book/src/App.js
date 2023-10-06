import React from 'react';
import Books from './components/Books';
import BookDetails from "./components/BookDetails";

import { Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Books />} />
                <Route path={"/book/add"} element={<BookDetails />} />
                <Route path={`/book/:bookId`} element={<BookDetails />} />
            </Routes>
        </>
    );
}
