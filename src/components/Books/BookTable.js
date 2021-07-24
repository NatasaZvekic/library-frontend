import React, { Component } from 'react'
export default class Book extends Component {

    deleteBook(id) {
        console.log("De;ete " + id)
        // this.props.deleteBook(id)
    }

    createRental(bookID) {
        console.log("booksID " + bookID)
    }

    render() {
        return (
            this.props.listOfBooks.map(book => {
                return (
                    <table style={{ width: '70%', marginTop: '70px', backgroundColor: '#f2e6ff' }}>
                        <tr>
                            <th style={{ width: '40%' }}></th>
                            <th style={{ width: '50%' }}> {book.bookName}  </th>
                            <th style={{ width: '10%' }}>
                                <svg onClick={() => this.props.openDialogForUpdate(book)}
                                    style={{ cursor: 'pointer', display: localStorage.getItem("role") === "admin" ? 'block' : 'none' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16"> <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                </svg>
                            </th>
                        </tr>

                        <tr>
                            <td rowspan="5">  <img className="blokPhoto" src={book.url} /></td>
                            <td>By {book.authorName} {book.authorLastName}</td>
                            <td>
                                <svg onClick={() => this.props.openDialogForDelete(book.bookID)}
                                    style={{ cursor: 'pointer', display: localStorage.getItem("role") === "admin" ? 'block' : 'none' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" /> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                </svg>
                            </td>
                        </tr>

                        <tr>
                            <td>PublishYear: {book.publishYear}</td>
                        </tr>
                        <tr>
                            <td>Available: {book.available}</td>
                        </tr>
                        <tr>
                            <td>Price: {book.price} RSD</td>
                        </tr>
                        <tr>
                            {localStorage.getItem("role") === "user" ?
                                <button onClick={() => this.props.openDialogForInsertRental(book)} class="btn btn-primary">Add book to card</button>
                                : ''}
                        </tr>
                        <tr>

                        </tr>
                    </table>

                )
            })

        )
    }
}
