import React, { Component } from "react";
import * as booksapi from "./BooksAPI.js";
import './App.css'
import PropTypes from "prop-types";

class ReadAlready extends Component {

    static propTyes = {
        needStateRefresh: PropTypes.func
    }
    state = {
        shelfBooks: []
    }

    updateBookShelf = ((book, shelf) => {
        booksapi.update(book, shelf);
        this.props.needStateRefresh(true);
    })

    componentDidMount() {
        booksapi.getAll().then((shelfBooks) => {
            let booksOnThisShelf = shelfBooks.filter(book => book.shelf === "read");
            this.setState({

                shelfBooks: booksOnThisShelf
            })
        })
    }
    componentDidUpdate() {
        booksapi.getAll().then((shelfBooks) => {
            let booksOnThisShelf = shelfBooks.filter(book => book.shelf === "read");
            if (booksOnThisShelf.length != this.state.shelfBooks.length) {
                this.setState({
                    shelfBooks: booksOnThisShelf
                })
            }
        })
    }
    render() {
        return (

            <div className="bookshelf-books">

                <ol className="books-grid">
                    {this.state.shelfBooks.map(book => (
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="bookcoverpage" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }} />
                                    <div className="book-shelf-changer">
                                        <select onChange={(event) => this.updateBookShelf(book, event.target.value)} value={book.shelf}>
                                            <option value="move" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title"><p>{book.title}</p></div>
                                <div className="authordiv">
                                    {book.authors}
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>

        );

    }
}
export default ReadAlready;