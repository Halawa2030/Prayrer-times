import React from 'react';
import { Box, Typography, Container, Paper, List, ListItem, ListItemButton, ListItemText, Link } from '@mui/material';
import Navbar from '../Pages/Navbar';
import FooterNavbar from '../Pages/FooterNavbar';
import { useTheme } from '@mui/material/styles';

export default function SearchPage() {
  const theme = useTheme();

  const searchEngines = [
    { name: 'جوجل (Google)', url: 'https://www.google.com' },
    { name: 'يوتيوب (YouTube)', url: 'https://www.youtube.com/' },
    { name: 'ويكيبيديا (Wikipedia)', url: 'https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%B5%D9%81%D8%AD%D8%A9_%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9' },
    { name: 'الباحث القرآني (Quran Search)', url: 'https://quran.ksu.edu.sa/search/' },
    { name: 'مكتبة نور (Noor Library)', url: 'https://www.noor-book.com/' },
    { name: 'إسلام ويب (Islamweb)', url: 'https://www.islamweb.net/' },
    { name: 'الدرر السنية (Dorar.net)', url: 'https://dorar.net/' },
    { name: 'المكتبة الشاملة (Shamela Library)', url: 'https://shamela.ws/' },
    { name: 'القرآن الكريم (AlQuran.cloud)', url: 'https://alquran.cloud/' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />

      <Container maxWidth="md" sx={{ flexGrow: 1, p: { xs: 2, sm: 3 }, mt: 3, mb: 3 }}>
        <Paper elevation={3} sx={{ p: { xs: 2, sm: 3 }, borderRadius: '12px', bgcolor: 'background.paper', boxShadow: theme.shadows[3] }}>
          <Typography variant="h5" sx={{ mb: 3, textAlign: 'center', color: 'primary.main', fontWeight: 'bold' }}>
            أفضل مواقع البحث والمصادر الإسلامية
          </Typography>

          <List>
            {searchEngines.map((site, index) => (
              <ListItem disablePadding key={index} sx={{ mb: 1 }}>
                <ListItemButton
                  component={Link}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderRadius: '8px',
                    transition: 'background-color 0.2s ease-in-out',
                    '&:hover': {
                      bgcolor: theme.palette.action.hover,
                    },
                  }}
                >
                  <ListItemText
                    primary={<Typography variant="h6" sx={{ color: 'text.primary' }}>{site.name}</Typography>}
                    sx={{ textAlign: 'right' }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Container>

      <FooterNavbar />
    </Box>
  );
}