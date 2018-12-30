# MyReads Project

This is the final assessment project for Udacity's React Fundamentals course.

#About MyReads Application
This web application has two pages. The shelf page has below three shelfs.
* Currently Reading- Shows all the books which are being read currently.
* Wanted to Read- Shows all the books which are marked as wanted to read.
* Read- These are all the books which are already read by the users.
This page has a link which takes to search page.
Search page has a text box where we can type a search query to search book avaiable. 
It will show all the books matching the query. There is an back arrow image clicking which takes to the shelf page.

#Dependecies installed 
* react-router-dom
* prop-types
* react
* react-dom

# To Start the Project

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the main component which has composition of three components. Does not have it's own state.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    |── index.js # You should not need to modify this file. It is used for DOM rendering only.
    |__ MyReads.js #This is the root of your app and has it's own state.
    |__ ReadAlready.js #This is a component to render Read shelf. Has it's own state.
    |__ CurrentlyReading.js #This is a component to render Currently Reading shelf and has it's own state.
    |__ WantedToRead.js #This component renders wanted to Read shelf and has it's own shelf.
    |__ Search.js #This component is used to search the new books and add them to any of the shelf if required.
```

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
