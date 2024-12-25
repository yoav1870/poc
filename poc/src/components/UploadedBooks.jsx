import { Box, Typography } from "@mui/material";

const UploadedBooks = ({ books }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Uploaded Books:
      </Typography>
      {books.length === 0 ? (
        <Typography>No books added yet.</Typography>
      ) : (
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              {book.title} by {book.author}
            </li>
          ))}
        </ul>
      )}
    </Box>
  );
};

export default UploadedBooks;
