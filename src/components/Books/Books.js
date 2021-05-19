import { Modal, Button } from 'react-bootstrap'
import React, { Component, useState } from 'react'
import Book from './Book'
import { Link } from '@material-ui/core'
import { useHistory } from 'react-router-dom';

// export default class Books extends Component {

//     render() {
//         return (
//             <body>
//                 <div className="searchBox">
//                     <input 
//                     className="searchInput"
//                     type="text"
//                     placeholder="Enter book title you are looking for.."
//                     />
//                     <button  onClick={this.routeChange} className="searchButton">Search</button>
//                 </div>
//                 <div className="list">
//                     {this.props.listOfBooks.map(book => {
//                         return (
//                             <Book book={book} />
//                         )
//                     })
//                     }
//                 </div>
//             </body>
//         )
//     }
// }


const Books = (props) => {

    let history = useHistory()
    const [bookName, setBookName] = useState('');

    const submit = () => {
        if (bookName != '') {
            history.push(`/books?bookName=${bookName}`);
        }
    }
    const onChange = (e) => {
        setBookName(e.target.value)
    }
    return (
        <body>
            <div className="searchBox">
                <input
                    className="searchInput"
                    type="text"
                    placeholder="Enter book title you are looking for.."
                    onChange={onChange}
                />
                <button className="searchButton" onClick={submit}>Search</button>
            </div>
            <div className="list">
                {props.listOfBooks.map(book => {
                    return (
                        <Book book={book} />
                    )
                })
                }
            </div>
        </body>
    )
}
export default Books
