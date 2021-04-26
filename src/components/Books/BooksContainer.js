import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router';
import Books from './Books';
import BooksService from './BooksService';
import Header from '..//Header/Header'
import Paginationn from '../commonComponents/Pagination';

function BooksContainer() {
    const history = useHistory();
    const [books, setBooks] = useState([]);
    const [numberOfPages, setNumberOfPages] = useState(0);

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    let pageNum = useQuery().get("pageNum");

    useEffect(() => {
        BooksService.GetAllBooks(pageNum).then((data) => {
            setBooks(data.data.booksList);
            setNumberOfPages(data.data.numberOfPages);
        })
    })

    const Add= () =>{
        BooksService.AddNewBook()
    }
    const url = `${window.location.pathname}`
    return (
        <div>
            <Header />
            <Books listOfBooks={books}/>
            <Paginationn numberOfPages={numberOfPages}  url="books"/>
        </div>
    )
}

export default BooksContainer;
