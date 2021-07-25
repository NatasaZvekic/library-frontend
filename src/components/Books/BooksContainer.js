import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router';
import Books from './Books';
import BooksService from './BooksService';
import Paginationn from '../commonComponents/Pagination';
import NewHead from '../Header/HeaderTwo';
import AuthorService from '../Authors/AuthorService'
import GenreService from '../Genres/GenreService'
import SupplierService from '../Suppliers/SupplierService'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

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
        AuthorService.getAllAuthors().then((data) => {
            setAuthors(data.data)
        })
        GenreService.getAllGenres().then((data) => {
            setGenres(data.data)
        })
        SupplierService.getAllSuppliers().then((data) => {
            setSuppliers(data.data)
        })
    })
    
    const DeleteBook = async (id) => {
        await   BooksService.DeleteBook(id)
        .then((data) => {

        })
        .catch(function (error) {
            toast.error("Recond can not be deleted!", { position: toast.POSITION.TOP_CENTER })
        })
    }

    const InsertRental = (bookID) => {
        BooksService.InsertRental(bookID)
    }

    const InsertBook = (bookName, supplierID, available, genreID, authorID, publishYear, url, price) => {
        BooksService.InsertBook(bookName, supplierID, available, genreID, authorID, publishYear, url, price)
    }

    const updateBook = (bookID, bookName, available, publishYear, url, price) => {
        BooksService.updateBook(bookID, bookName, available, publishYear, url, price)
    }
    const url = `${window.location.pathname}`
    return (
        <div style={{ backgroundColor: '#f2e6ff' }}>
            <NewHead />
            <Books style={{ backgroundColor: '#f2e6ff' }}
                listOfBooks={books}
                DeleteBook={DeleteBook}
                authorsList={authors}
                genresList={genres}
                suppliersList={supplier}
                InsertRental={InsertRental}
                InsertBook={InsertBook}
                updateBook={updateBook}
            />
            <Paginationn numberOfPages={numberOfPages} url="books" />
        </div>
    )
}

export default BooksContainer;
