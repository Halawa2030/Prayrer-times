import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const AzkarWake = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      {/* العنوان */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#0d47a1' }}
      >
        أذكار الاستيقاظ
      </Typography>

      {/* صورة */}
      {/* <Box
        component="img"
        src=""
        alt="أذكار الاستيقاظ"
        sx={{
          width: '100%',
          maxHeight: 400,
          objectFit: 'cover',
          borderRadius: 3,
          my: 3,
        }}
      /> */}

      {/* فضل الأذكار */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#1565c0' }}>
          🌞 فضل أذكار الاستيقاظ:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          • بداية يومك بذكر الله يمنحك بركة وراحة<br />
          • يطرد الكسل والشيطان<br />
          • يذكّرك بهدف اليوم ويقوّي عزيمتك<br />
          • سبب لمغفرة الذنوب وطمأنينة القلب
        </Typography>
      </Paper>

      {/* الأذكار */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#6a1b9a' }}>
          📿 الأذكار بعد الاستيقاظ من النوم:
        </Typography>
        <Box component="ul" sx={{ pl: 3, fontSize: '1.1rem', lineHeight: 2 }}>
          <li>
            <strong>الحمد لله الذي أحيانا بعد ما أماتنا وإليه النشور.</strong>
          </li>
          <li>
            قراءة آخر آيتين من سورة آل عمران:{" "}
            <em>"إن في خلق السماوات والأرض..."</em>
          </li>
          <li>
            <strong>لا إله إلا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شيء قدير</strong> (مرة واحدة أو أكثر)
          </li>
          <li>
            دعاء بداية اليوم: <em>اللهم إني أسألك خير هذا اليوم، فتحه، ونصره، ونوره، وبركته، وهداه</em>
          </li>
          <li>
            <strong>اللهم اجعل أول هذا اليوم صلاحًا، وأوسطه فلاحًا، وآخره نجاحًا</strong>
          </li>
        </Box>
      </Paper>

      {/* ملاحظة ختامية */}
      <Typography variant="body2" align="center" sx={{ mt: 4, color: '#888' }}>
        ✨ اجعل بداية يومك نورًا بذكر الله، وتوكل عليه في كل خطواتك.
      </Typography>
    </Container>
  );
};

export default AzkarWake;
