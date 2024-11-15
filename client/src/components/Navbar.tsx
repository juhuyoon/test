import React, { useState } from 'react';

const Navbar = () => {
  // State to control the visibility of the book list
  const [showBooks, setShowBooks] = useState(false);

  // Book titles (can be dynamic or fetched from an API)
  const books = [
    "Book 1: React for Beginners",
    "Book 2: Advanced JavaScript",
    "Book 3: TypeScript Essentials",
    "Book 4: Fullstack Development with Node.js"
  ];

  // Toggle book visibility on button click
  const toggleBooks = () => {
    setShowBooks((prevState) => !prevState);
  };

  return (
    <header className="display-flex justify-space-between align-center p-2 mint-green">
      <h1>Welcome Novel-Nook!</h1>
      <div className="button-group">
        {/* Login button */}
        <button className="login-btn" onClick={() => alert('Login clicked')}>
          Login
        </button>
        
        {/* Books button */}
        <button className="books-btn" onClick={toggleBooks}>
          Search
        </button>
      </div>

      {/* Conditionally render the books list */}
      {showBooks && (
        <div className="book-list-box">
          <h2>Books</h2>
          <ul>
            {books.map((book, index) => (
              <li key={index}>{book}</li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;


