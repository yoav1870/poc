import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

const Recommendations = ({ books }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (books.length > 0) {
      const fetchRecommendations = async () => {
        try {
          // Build query from book titles
          const query = books.map((book) => book.title).join("+");
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${query}`
          );

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          setRecommendations(data.items || []);
        } catch (error) {
          console.error("Failed to fetch recommendations:", error);
          setRecommendations([]);
        }
      };

      fetchRecommendations();
    }
  }, [books]);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Google Books Recommendations:
      </Typography>
      {recommendations.length === 0 ? (
        <Typography>No recommendations available yet.</Typography>
      ) : (
        <ul>
          {recommendations.map((book, index) => (
            <li key={index}>
              {book.volumeInfo.title} by{" "}
              {book.volumeInfo.authors?.join(", ") || "Unknown"}
            </li>
          ))}
        </ul>
      )}
    </Box>
  );
};

export default Recommendations;
