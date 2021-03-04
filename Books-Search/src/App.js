import React, { useState } from 'react';
import axios from "axios"
import "./App.css";
import Header from './Header';
import Footer from './Footer';


const App = () => {
  let API_URL = `https://www.googleapis.com/books/v1/volumes`;
  

  const [books, setBooks] = useState({ items: [] });
  const [searchTerm, setSearchTerm] = useState("");

  // Ajax call to api using axios to wrap it in the "result" variable
  const fetchBooks = async () => {
    const result = await axios.get(`${API_URL}?q=${searchTerm}`);
    setBooks(result.data)
  }
  
  const bookAuthors = authors => {
    
    if(authors.length <= 2) {
      authors = authors.join(" and ");
    } else if (authors.length > 2) {
      let lastAuthor = " and " + authors.slice(-1);
      authors.pop();
      authors = authors.join(", ");
      authors += lastAuthor;
    }
    return authors;
  }
  // Submit
  const onSubmitHandler = (e) => {
    // Prevent the page from reloading on form submission
    e.preventDefault();
    // Call fetchBooks
    fetchBooks();
  }

  // Sets the state of the searchTerm
  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  }
  // What's displayed on the page
  return (
    // Section containing everything on the page
    <section>
      {/* Header component */}
      <Header/>
      {/* Form containing the input for book titles */}
      <form onSubmit={onSubmitHandler}>
        <label>
          <span>Search for books <i class="fas fa-arrow-right"></i> </span>
          <input
            type="search"
            placeholder="Catcher in the Rye"
            value={searchTerm}
            onChange={onInputChange}
          />
          <button type="submit">Search</button>
        </label>
      </form>
      <ul>
        {
          books.items.map((book, index) => {
            return (
              <li key={index}>
                <div>
                  <img alt={`${book.volumeInfo.title} book`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
                  <div>
                    <h3>{book.volumeInfo.title}</h3>
                    <p>{ bookAuthors(book.volumeInfo.authors) }</p>
                    <p>{book.volumeInfo.publishedDate}</p>
                  </div>
                </div>
                <hr />
              </li>
            );
          })
        }
      </ul>
      <Footer/>
    </section>
  );
};

export default App;