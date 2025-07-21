

import React from 'react';
import { Box, Typography, Button, Card } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Prayer(props) {
  return (
    <Card
      sx={{
        width: '100%',
        height: {
          xs: 120,
          sm: 150,
          md: 150,
          lg: 150,
        },
        borderRadius: 3,
        overflow: "hidden",
        position: "relative",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${props.imagg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 1.5,
        boxShadow: 5,
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: 8,
        },
      }}
    >
      <Box sx={{
        backgroundColor: "rgba(0,0,0,0.5)",
        borderRadius: 1,
        p: { xs: 0.5, sm: 0.8 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        mt: 1,
      }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem', lg: '1.1rem' }, lineHeight: 1.2 }}
        >
          {props.title}
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem', lg: '1.3rem' }, lineHeight: 1.2 }}
        >
          {props.time}
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ textAlign: "center", mb: 1 }}>
        <Link to={`/prayer/${props.route}`} style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#208391",
              fontSize: { xs: '0.65rem', sm: '0.75rem' },
              px: { xs: 0.8, sm: 1.2 },
              py: { xs: 0.4, sm: 0.6 },
              minWidth: { xs: '70px', sm: '90px' },
              '&:hover': {
                backgroundColor: '#1a6f7b',
              },
            }}
          >
            اعرف أكثر
          </Button>
        </Link>
      </Box>
    </Card>
  );
}
