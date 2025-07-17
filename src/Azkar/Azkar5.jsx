import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const AzkarAfterSalah = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      {/* العنوان */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#0d47a1' }}
      >
        أذكار بعد الصلاة
      </Typography>

      {/* صورة
      <Box
        component="img"
        src=""
        alt="أذكار بعد الصلاة"
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
        <Typography variant="h5" gutterBottom sx={{ color: '#2e7d32' }}>
          🌟 فضل أذكار بعد الصلاة:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          • تقوي العلاقة بينك وبين الله<br />
          • تجلب الطمأنينة والسكينة للقلب<br />
          • تغفر الذنوب وتمحو الخطايا<br />
          • تحفظك في يومك وتزيد بركته
        </Typography>
      </Paper>

      {/* الأذكار */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#6a1b9a' }}>
          📿 الأذكار بعد كل صلاة:
        </Typography>
        <Box component="ul" sx={{ pl: 3, fontSize: '1.1rem', lineHeight: 2 }}>
          <li>أستغفر الله (3 مرات)</li>
          <li>اللهم أنت السلام ومنك السلام تباركت يا ذا الجلال والإكرام</li>
          <li>لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير (مرة أو 10 أو 33 مرة)</li>
          <li>سبحان الله (33 مرة)، الحمد لله (33 مرة)، الله أكبر (33 مرة)، ثم تمام المئة: لا إله إلا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شيء قدير</li>
          <li>آية الكرسي: <em>"اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ..."</em></li>
          <li>سورة الإخلاص والفلق والناس (مرة أو ثلاث مرات)</li>
          <li>اللهم أعني على ذكرك وشكرك وحسن عبادتك</li>
        </Box>
      </Paper>

      {/* ملاحظة ختامية */}
      <Typography variant="body2" align="center" sx={{ mt: 4, color: '#888' }}>
        ✨ لا تنس أذكارك بعد كل صلاة، فهي حصنك وبركتك وأجرك بإذن الله.
      </Typography>
    </Container>
  );
};

export default AzkarAfterSalah;
