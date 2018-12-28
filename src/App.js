import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './App.css'
import CurrentlyReading from "./CurrentlyReading";
import WantedToRead from "./WantedToRead.js";
import ReadAlready from "./ReadAlready.js";
import PropTypes from "prop-types";

class BooksApp extends Component {
  static propTypes={
    setFetchReqState:PropTypes.func
  }
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>

              <CurrentlyReading needStateRefresh={this.props.setFetchReqState}/>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>

              <WantedToRead needStateRefresh={this.props.setFetchReqState}/>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>

              <ReadAlready needStateRefresh={this.props.setFetchReqState}/>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a Book</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default BooksApp
