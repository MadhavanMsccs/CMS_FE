import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Sidebar from './Sidebar';

const LibraryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 300px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;
`;

const SearchBar = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  width: 50%;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const BookList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  width: 100%;
`;

const BookItem = styled.div`
  flex: 1 1 150px;
  margin: 10px;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    flex: 1 1 120px;
  }

  @media (max-width: 480px) {
    flex: 1 1 100px;
  }
`;

const BookTitle = styled.span`
  font-weight: bold;
  margin-top: 5px;
  text-align: center;
`;

const BookAuthor = styled.span`
  margin: 5px 0;
  color: #555;
  text-align: center;
`;

const BookImage = styled.img`
  width: 100px;
  height: 150px;
  margin-bottom: 10px;
  border-radius: 4px;

  @media (max-width: 768px) {
    width: 80px;
    height: 120px;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 90px;
  }
`;

const StudentLibrary = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <LibraryContainer>
      <Sidebar />
      <Title>Student Library</Title>
      <SearchBar
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <BookList>
        {filteredBooks.map((book, index) => (
          <BookItem key={index}>
            <BookImage src={book.image} alt={book.title} />
            <BookTitle>{book.title}</BookTitle>
            <BookAuthor>by {book.author}</BookAuthor>
          </BookItem>
        ))}
      </BookList>
    </LibraryContainer>
  );
};

export default StudentLibrary;
