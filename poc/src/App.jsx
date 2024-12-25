import React, { useState } from "react";
import { Container } from "@mui/material";
import BookForm from "./components/BookForm";
import UploadedBooks from "./components/UploadedBooks";
import Recommendations from "./components/Recommendations";

const App = () => {
  const initialBooks = [
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
  ];

  const [books, setBooks] = useState(initialBooks);

  const addBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <BookForm addBook={addBook} />
      <UploadedBooks books={books} />
      <Recommendations books={books} />
    </Container>
  );
};

export default App;
