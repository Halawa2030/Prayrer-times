import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const AzkarWakeUp = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#2e7d32' }}
      >
        أذكار الاستيقاظ
      </Typography>

      {/* الأذكار والأدعية بعد الاستيقاظ */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#388e3c' }}>
          ☀️ الأدعية بعد الاستيقاظ:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          • "الحمد لله الذي أحيانا بعد ما أماتنا وإليه النشور."<br /><br />
          • "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شيء قدير. سبحان الله، والحمد لله، ولا إله إلا الله، والله أكبر، ولا حول ولا قوة إلا بالله العلي العظيم، رب اغفر لي."<br /><br />
          • "الحمد لله الذي عافاني في جسدي، ورد عليّ روحي، وأذن لي بذكره."<br /><br />
          • "الحمد لله الذي ردّ عليّ روحي، وعافاني في جسدي، وأذن لي بذكره."
        </Typography>
      </Paper>

      {/* التسبيحات المستحبة بعد الاستيقاظ */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#00796b' }}>
          📿 أذكار التسبيح:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          • "سبحان الله" (33 مرة)<br />
          • "الحمد لله" (33 مرة)<br />
          • "الله أكبر" (34 مرة)
        </Typography>
      </Paper>

      {/* آيات وآداب الاستيقاظ */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#5d4037' }}>
          📖 آداب وسنن الاستيقاظ:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          • مسح أثر النوم عن الوجه باليد.<br />
          • الدعاء بالأذكار النبوية السابقة.<br />
          • السواك.<br />
          • الوضوء.<br />
          • صلاة ركعتين (إن أمكن).
        </Typography>
      </Paper>

      {/* ختام */}
      <Typography variant="body2" align="center" sx={{ mt: 4, color: '#888' }}>
        🌅 المداومة على هذه الأذكار تورث بركة في اليوم، وحفظ من الغفلة.
      </Typography>
    </Container>
  );
};

export default AzkarWakeUp;
