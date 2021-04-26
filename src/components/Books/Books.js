import React, { Component } from 'react'
import Book from './Book'

export default class Books extends Component {
    render() {
        return (
            <div className="list">
                {  this.props.listOfBooks.map(book => {
                    return (
                        <Book book={book} />
                    )
                })
                }
            </div>
        )
    }
}


