import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router';
import Books from './Books';
import BooksService from './BooksService';
import Paginationn from '../commonComponents/Pagination';
import NewHead from '../Header/Header';
import AuthorService from '../Authors/AuthorService'
import GenreService from '../Genres/GenreService'
import SupplierService from '../Suppliers/SupplierService'

function BooksContainer() {
    const history = useHistory();
    const [books, setBooks] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [genres, setGenres] = useState([]);
    const [supplier, setSuppliers] = useState([]);
    const [numberOfPages, setNumberOfPages] = useState(0);

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    let pageNum = useQuery().get("pageNum"); 
    let bookName = useQuery().get("bookName");

    useEffect(() => {
        BooksService.GetAllBooks(pageNum, bookName).then((data) => {
            setBooks(data.data.booksList);
            setNumberOfPages(data.data.numberOfPages);
        })
        AuthorService.getAllAuthors().then((data)=>{
            setAuthors(data.data)
        })
        GenreService.getAllGenres().then((data) => {
            setGenres(data.data)
        })
        SupplierService.getAllSuppliers().then((data) => {
            setSuppliers(data.data)
        })
    })

    const Add= () =>{
      //  BooksService.AddNewBook()
    }

    const DeleteBook = (id) => { console.log("ima + " +  id)
        BooksService.DeleteBook(id)
    }

    const InsertRental = (bookID) => { console.log("in coni")
        BooksService.InsertRental(bookID)
    }

    const InsertBook = (bookName,supplierID,available,genreID,authorID,publishYear,url) => {
        
        BooksService.InsertBook(bookName,supplierID,available,genreID,authorID,publishYear,url)
    }

    const updateBook = (bookID, bookName, available ,publishYear,url) => {
        BooksService.updateBook(bookID, bookName, available ,publishYear,url)
    }
    const url = `${window.location.pathname}`
    return (
        <div>
            <NewHead />
            <Books 
            listOfBooks={books}
            DeleteBook={DeleteBook}
            authorsList={authors}
            genresList={genres}
            suppliersList={supplier}
            InsertRental={InsertRental}
            InsertBook={InsertBook}
            updateBook = {updateBook}
            />
            <Paginationn numberOfPages={numberOfPages}  url="books"/>
        </div>
    )
}

export default BooksContainer;
