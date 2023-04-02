import { Button } from '@mui/material'
import { Typography } from '@mui/material';

import * as React from 'react';
import BookLayout from './BookLayout';


const backgroundImage =
  'https://media.istockphoto.com/id/1227235401/photo/stack-of-books-on-table-in-the-room.jpg?b=1&s=170667a&w=0&k=20&c=zB6q7tDiSbE0nQb1UrvY26BEc_x-tvb4LF_5gjfYBiA=';

export default function ProductHero() {
  return (
    <BookLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Enjoy your Holidays
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
       Read your Favorite books and explore more books here
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/signup"
        sx={{ minWidth: 200 }}
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </BookLayout>
  );
}