import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Loader from './Loader';
import { getBooks } from '../services/booksService';

// Styled components
const StyledCard = styled(Card)({
  width: '100%',
  height: '100%',
});

const StyledCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '120%', // 3:2 aspect ratio for rectangular media
  objectFit: 'cover',
});

/**
 * ListBooks component fetches and displays a list of books categorized by genre.
 * Each book is displayed as a card with a link to its detailed page.
 * Shows a loading spinner while fetching data and a message if no books are available.
 *
 * @returns {JSX.Element} The rendered ListBooks component.
 */
const ListBooks = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Fetches book data from the API and updates the component state.
   * Logs the fetched data and handles errors during the fetch operation.
   */
  const fetchBooksData = async () => {
    try {
      const response = await getBooks();
      console.log('Fetched books:', response); // Log the fetched books
      setBooks(response);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching books data:', error.message); // Log any fetch errors
    }
  };

  useEffect(() => {
    fetchBooksData(); // Fetch books data on component mount
  }, []);

  // Categorize books by their category
  const categorizedBooks = books.reduce((acc, book) => {
    const category = book.category?.toLowerCase() || 'other';
    if (!acc[category]) acc[category] = [];
    acc[category].push(book);
    return acc;
  }, {});

  // Define the order of categories
  const orderedCategories = ['children', 'teen', 'adult', 'fantasy'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {isLoading ? (
        <Loader /> // Display loader while fetching data
      ) : (
        books.length === 0 ? (
          <Typography variant="h6" color="textSecondary" align="center">
            No books available // Message if no books are found
          </Typography>
        ) : (
          orderedCategories.map((category) => (
            <div key={category}>
              <Grid container spacing={2} justifyContent="space-evenly">
                {categorizedBooks[category]?.map((book) => (
                  <Grid item xs={6} sm={4} md={2} key={book.name}>
                    <StyledCard>
                      <CardActionArea component={Link} to={book.name}>
                        <StyledCardMedia image={book.img} title={book.name} />
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="h2" align="center">
                            {book.name}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Author: {book.author}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </StyledCard>
                  </Grid>
                ))}
              </Grid>
            </div>
          ))
        )
      )}
    </div>
  );
};

export default ListBooks;
