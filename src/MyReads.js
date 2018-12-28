import React, { Component } from 'react'
import { Route } from "react-router-dom";
import './App.css'
import SearchBooks from "./Search";
import BooksApp from "./App.js";
import * as bookapi from "./BooksAPI.js"
class MyReads extends Component {
    state = {
        searchedBooks: [],
        needFetch: false
    }
    componentDidMount() {
        bookapi.getAll().then((shelfBooks) => {
            this.setState({
                searchedBooks: shelfBooks
            });
        })
    }
    setFetchRequired = ((needFetch) => {
        this.setState({
            needFetch: needFetch
        }
        )
    })
    componentDidUpdate() {
        bookapi.getAll().then((shelfBooks) => {
            this.setState({
                searchedBooks: shelfBooks
            });
        })
    }
    render() {
        return (
            <div>
                <Route path="/search" exact strict render={() => <SearchBooks booksOnShelf={this.state.searchedBooks} />} />
                <Route path="/" exact strict render={() => (<BooksApp setFetchReqState={this.setFetchRequired} />)} />
            </div>
        )
    }
}
export default MyReads