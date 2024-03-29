import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import BookList from './BookList';
import CreateRental from './CreateRental'
import InsertDialog from './InsertDialog'

const Books = (props) => {
    let history = useHistory()
    const [bookName, setBookName] = useState('');
    const [showInsertRentalDialog, setDialogForInsertRental] = useState(false)
    const [showInsertBookDialog, setDialogForInsertBook] = useState(false)
    const [showPaymentDialog, setPaymentDialog] = useState(false)

    const submit = () => {
        if (bookName != '') {
            history.push(`/books?bookName=${bookName}`);
        }
    }
    const onChange = (e) => {
        setBookName(e.target.value)
    }

    const closeInsertRentalDialog = () => {
        setDialogForInsertRental(false)
    }
    const closeInsertDialog = () => {
        setDialogForInsertBook(false)
    }
    const openDialogForInsertRental = () => {
        setDialogForInsertRental(true)
    }
    const openDialogForInsertBook = () => {
        setDialogForInsertBook(true)
    }

    const InsertRental = (id) => {
        props.InsertRental(id)
        closeInsertRentalDialog()
    }
    const insertBook = (bookName, supplierID, available, genreID, authorID, publishYear, url, price) => {
        props.InsertBook(bookName, supplierID, available, genreID, authorID, publishYear, url, price)
        closeInsertDialog()
        setDialogForInsertBook(false)
    }
    const openDialogForPayment = () => {
        setPaymentDialog(true)
    }
    const closeDialogForPayment = () => {
        setPaymentDialog(false)
    }
    return (
        <body style={{ backgroundColor: '#f2e6ff' }}>
            <div className="searchBox">
                <input
                    className="searchInput"
                    type="text"
                    placeholder="Enter book title you are looking for.."
                    onChange={onChange}
                />
                <svg onClick={submit} style={{ marginLeft: '-30px', cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                {localStorage.getItem("role") === "admin" ?
                    <button onClick={openDialogForInsertBook} className="createRental"> Add book
                        <svg style={{ marginLeft: '6px', marginBottom: '4px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z" />
                        </svg>
                    </button> : ''}
            </div>
            <BookList style={{ backgroundColor: '#f2e6ff' }}
                listOfBooks={props.listOfBooks}
                DeleteBook={props.DeleteBook}
                authorsList={props.authorsList}
                genresList={props.genresList}
                suppliersList={props.suppliersList}
                updateBook={props.updateBook}
                add={props.add}
                InsertRental={InsertRental}>
            </BookList>
            <CreateRental
                openDialogForInsertRental={showInsertRentalDialog}
                closeInsertRentalDialog={closeInsertRentalDialog}
                listOfBooks={props.listOfBooks}
                InsertRental={InsertRental}   >
            </CreateRental>
            <InsertDialog
                showInsertBookDialog={showInsertBookDialog}
                insertBook={insertBook}
                genresList={props.genresList}
                openPayment={openDialogForPayment}
                suppliersList={props.suppliersList}
                authorsList={props.authorsList}
                closeInsertDialog={closeInsertDialog} >
            </InsertDialog>
        </body>
    )
}
export default Books
