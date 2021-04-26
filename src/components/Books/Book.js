import React, { Component } from 'react'
export default class Book extends Component {

    render() {  
        return (
            <div>
                <div className="blok">
                    <img className="blokPhoto" src={this.props.book.url} />
                    <div className="blokDetail">
                        <div className="blokTitle">{this.props.book.bookName}</div>
                        <p className="blokAuthor">{this.props.book.authorName} {this.props.book.authorLastName}</p>
                        <p className="blokAuthor">{this.props.book.publishYear}</p>
                        <p className="blokAuthor">Available: {this.props.book.available}</p>
                    </div>
                   
                </div>
                <hr/>
            </div>
        )
    }
}
