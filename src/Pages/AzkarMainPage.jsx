import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import Navbar from './Navbar'; // تأكد من المسار الصحيح للNavbar
import Divider from '@mui/material/Divider';

export default function AzkarMainPage() {
  const navigate = useNavigate();

  const azkarCategories = [
    { title: "أذكار الصباح", description: "أذكار تقال في الصباح", path: "/azkar/morning" },
    { title: "أذكار المساء", description: "أذكار تقال في المساء", path: "/azkar/evening" },
    { title: "أذكار النوم", description: "أذكار تقال قبل النوم", path: "/azkar/sleep" },
    { title: "أذكار الاستيقاظ", description: "أذكار تقال عند الاستيقاظ", path: "/azkar/wake-up" },
    { title: "أذكار بعد الصلاة", description: "أذكار تقال بعد الصلوات المفروضة", path: "/azkar/after-prayer" },
    { title: "أذكار متنوعة", description: "مجموعة من الأذكار المتنوعة", path: "/azkar/general" },
  ];

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ color: '#57bfdfff', fontWeight: 'bold', mb: 4 }}>
          الأذكار والأدعية
        </Typography>
        <Divider sx={{ my: 4, borderColor: '#ccc' }} />
        <Grid container spacing={4} justifyContent="center">
          {azkarCategories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 3,
                  boxShadow: 6,
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 10,
                  },
                  backgroundColor: '#e3f2fd'
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
                  <Typography variant="h5" component="h2" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
                    {category.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {category.description}
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2, textAlign: 'center' }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#1976d2',
                      '&:hover': { backgroundColor: '#115293' },
                    }}
                    onClick={() => navigate(category.path)}
                  >
                    عرض الأذكار
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}