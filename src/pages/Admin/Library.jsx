import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Sidebar from './Sidebar';

const LibraryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 300px;
  padding: 20px; /* Added padding for better spacing */
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column; /* Stack inputs vertically */
  align-items: center; /* Center align the inputs */
`;

const Input = styled.input`
  width: 300px; /* Fixed width for inputs */
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 768px) {
    width: 80%; /* Responsive width for smaller screens */
  }

  @media (max-width: 480px) {
    width: 100%; /* Full width for very small screens */
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
`;

const BookList = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allows items to wrap to the next line */
  justify-content: center; /* Centers the items */
  padding: 10px;
  width: 100%;
`;

const BookItem = styled.div`
  flex: 1 1 150px; /* Allows items to grow and shrink */
  margin: 10px;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    flex: 1 1 120px; /* Adjust width for smaller screens */
  }

  @media (max-width: 480px) {
    flex: 1 1 100px; /* Adjust width for very small screens */
  }
`;

const BookTitle = styled.span`
  font-weight: bold;
  margin-top: 5px;
  text-align: center; /* Center-align text */
`;

const BookAuthor = styled.span`
  margin: 5px 0;
  color: #555;
  text-align: center; /* Center-align text */
`;

const BookImage = styled.img`
  width: 100px; /* Set a fixed width for images */
  height: 150px; /* Set a fixed height for images */
  margin-bottom: 10px;
  border-radius: 4px; /* Add some rounding to the image corners */

  @media (max-width: 768px) {
    width: 80px; /* Adjust width for smaller screens */
    height: 120px; /* Adjust height for smaller screens */
  }

  @media (max-width: 480px) {
    width: 60px; /* Adjust width for very small screens */
    height: 90px; /* Adjust height for very small screens */
  }
`;

const Library = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '', image: '' });

  useEffect(() => {
    axios.get('http://localhost:4000/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleAddBook = () => {
    axios.post('http://localhost:4000/books', newBook)
      .then(response => setBooks([...books, response.data]))
      .catch(error => console.error('Error adding book:', error));
  };

  return (
    <LibraryContainer>
      <Sidebar />
      <Title>Library Management - Computer Science Books</Title>
      <InputContainer>
        <Input type="text" name="title" placeholder="Title" value={newBook.title} onChange={handleInputChange} />
        <Input type="text" name="author" placeholder="Author" value={newBook.author} onChange={handleInputChange} />
        <Input type="text" name="image" placeholder="Image URL" value={newBook.image} onChange={handleInputChange} />
        <Button onClick={handleAddBook}>Add Book</Button>
      </InputContainer>
      <BookList>
        {books.map((book, index) => (
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

export default Library;
