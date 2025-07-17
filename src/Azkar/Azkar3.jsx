import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const AzkarSleep = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      {/* العنوان */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#0d47a1' }}
      >
        أذكار النوم
      </Typography>

      {/* صورة */}
      {/* <Box
        component="img"
        src=""
        alt="أذكار النوم"
        sx={{
          width: '100%',
          maxHeight: 400,
          objectFit: 'cover',
          borderRadius: 3,
          my: 3,
        }}
      /> */}

      {/* فضل أذكار النوم */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#1565c0' }}>
          🌙 فضل أذكار النوم:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          • نوم على ذكر وطهارة<br />
          • حفظ من الشيطان طوال الليل<br />
          • سبب للمغفرة والأمان<br />
          • يجعل نومك عبادة ويكتب لك الأجر<br />
          • يهيئ قلبك للسكينة والطمأنينة
        </Typography>
      </Paper>

      {/* الأذكار */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#6a1b9a' }}>
          📿 الأذكار عند النوم:
        </Typography>
        <Box component="ul" sx={{ pl: 3, fontSize: '1.1rem', lineHeight: 2 }}>
          <li>بسمك اللهم أموت وأحيا</li>
          <li>اللهم قني عذابك يوم تبعث عبادك</li>
          <li>اللهم أسلمت نفسي إليك، ووجهت وجهي إليك...</li>
          <li>قراءة آية الكرسي</li>
          <li>قراءة سور: الإخلاص، الفلق، الناس (3 مرات)</li>
          <li>سبحان الله (33 مرة)، الحمد لله (33 مرة)، الله أكبر (34 مرة)</li>
          <li>آخر آيتين من سورة البقرة</li>
          <li>الدعاء بما في قلبك قبل النوم</li>
        </Box>
      </Paper>

      {/* ملاحظة ختامية */}
      <Typography variant="body2" align="center" sx={{ mt: 4, color: '#888' }}>
        💤 احرص على أذكار النوم لتنام مطمئنًا ويظل قلبك متصلاً بالله حتى أثناء نومك.
      </Typography>
    </Container>
  );
};

export default AzkarSleep;
