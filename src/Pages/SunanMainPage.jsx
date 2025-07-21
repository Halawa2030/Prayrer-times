import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import Navbar from './Navbar'; 
import Divider from '@mui/material/Divider';

export default function SunanMainPage() {
  const navigate = useNavigate();

  const sunanCategories = [
    { title: "صلاة الضحى", description: "سنة مؤكدة لها فضل عظيم", path: "/Duha" },
    { title: "صلاة الوتر", description: "آخر صلاة الليل، تختم بها قيامك", path: "/Witer" },
    { title: "صلاة التراويح", description: "صلاة قيام الليل في رمضان", path: "/Tarahwee" },
    { title: "صلاة التهجد", description: "صلاة نافلة تؤدى في جوف الليل", path: "/Tahajjud" },
    { title: "قيام الليل", description: "العبادة في جزء من الليل", path: "/Quiam" },
    { title: "صلاة الاستخارة", description: "طلب الخيرة من الله في أمر مباح", path: "/istikhaarah" },
    { title: "صلاة التوبة", description: "صلاة يؤديها العبد بعد الذنب", path: "/repentance" },
    { title: "صلاة الحاجة", description: "لطلب الحاجات من الله تعالى", path: "/need" },
    { title: "تحية المسجد", description: "صلاة ركعتين عند دخول المسجد", path: "/Masjid" },
    { title: "صلاة الجنازة", description: "صلاة على الميت قبل الدفن", path: "/tasbeeh" },
    { title: "صلاة العيد", description: "صلاة خاصة بعيدي الفطر والأضحى", path: "/eid" },
    { title: "صلاة الاستسقاء", description: "لطلب نزول المطر من الله", path: "/istisqa" },
    { title: "صلاة الكسوف والخسوف", description: "تقال عند كسوف الشمس أو خسوف القمر", path: "/Kusoff" },
  ];

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ color: '#57bfdfff', fontWeight: 'bold', mb: 4 }}>
          السنن والنوافل
        </Typography>
        <Divider sx={{ my: 4, borderColor: '#ccc' }} />
        <Grid container spacing={4} justifyContent="center">
          {sunanCategories.map((category, index) => (
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
                  backgroundColor: '#e8f5e9'
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
                  <Typography variant="h5" component="h2" gutterBottom sx={{ color: '#388e3c', fontWeight: 'bold' }}>
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
                      backgroundColor: '#388e3c',
                      '&:hover': { backgroundColor: '#2e7d32' },
                    }}
                    onClick={() => navigate(category.path)}
                  >
                    اعرف أكثر
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