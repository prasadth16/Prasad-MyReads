import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import * as bookapi from "./BooksAPI.js"
import PropTypes from "prop-types";

class SearchBooks extends Component {
    static propTypes = {
        booksOnShelf: PropTypes.array
    }
    state = {
        searchQuery: "",
        searchedBooks: []
    }

    updateQuery = (query) => {
        this.setState(() => ({
            searchQuery: query
        }))
        this.updateSearch(query)
    }
    updateSearch = (query) => {
        if (query) {
            bookapi.search(query).then((searchedResults) => {
                if (!(searchedResults.error)) {

                    this.setState(() => ({
                        searchedBooks: searchedResults
                    }))
                }
                else {
                    this.setState({
                        searchedBooks: []
                    })
                }
            })
        }
        else {
            this.setState({
                searchedBooks: []
            })
        }
    }

    updateBookShelf = ((book, shelf) => (
        bookapi.update(book, shelf)
    ))

    render() {

        return (

            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search" />
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={this.state.searchQuery} onChange={(event) => this.updateQuery(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searchedBooks.map(book => {
                            let currentShelf = "none";

                            this.props.booksOnShelf.map((currentShlefBook) => {


                                if (book.id === currentShlefBook.id) {
                                    currentShelf = currentShlefBook.shelf;
                                }

                            });

                            return (<li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        {book.imageLinks != undefined && (
                                            <div className="bookcoverpage" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }} />)}
                                        <div className="book-shelf-changer">

                                            <select onChange={(event) => this.updateBookShelf(book, event.target.value)} value={currentShelf} >
                                                <option value="move" disabled >Move to...</option>
                                                <option value="currentlyReading" >Currently Reading</option>
                                                <option value="none">None</option>
                                                <option value="wantToRead" >Want to Read</option>
                                                <option value="read">Read</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title"><p>{book.title}</p></div>
                                    <div className="authordiv">
                                        <div className="book-authors">
                                            {book.authors}
                                        </div>
                                    </div>
                                </div>
                            </li>)
                        })}
                    </ol>
                </div>
            </div>)
    }
}
export default SearchBooks