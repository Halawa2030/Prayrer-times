import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const AzkarEvening = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      {/* العنوان */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#0d47a1' }}
      >
        أذكار المساء
      </Typography>

      {/* صورة */}
      {/* <Box
        component="img"
        src=""
        alt="أذكار المساء"
        sx={{
          width: '100%',
          maxHeight: 400,
          objectFit: 'cover',
          borderRadius: 3,
          my: 3,
        }}
      /> */}

      {/* مقدمة */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#1565c0' }}>
          ✨ فضل أذكار المساء:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          • حماية من الشيطان <br />
          • طمأنينة للقلب <br />
          • حفظ من كل سوء <br />
          • أجر عظيم ورفعة في الدرجات <br />
          • سبب لمحبة الله وذكره للعبد فيمن عنده
        </Typography>
      </Paper>

      {/* الأذكار */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#6a1b9a' }}>
          📿 أذكار المساء:
        </Typography>
        <Box component="ul" sx={{ pl: 3, fontSize: '1.1rem', lineHeight: 2 }}>
          <li>آية الكرسي</li>
          <li>قراءة سور: الإخلاص، الفلق، الناس (3 مرات)</li>
          <li>
            "أمسينا وأمسى الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له..."
          </li>
          <li>"اللهم إني أمسيت أشهدك، وأشهد حملة عرشك..." (3 مرات)</li>
          <li>"رضيت بالله ربًا، وبالإسلام دينًا، وبمحمد ﷺ نبيًا" (3 مرات)</li>
          <li>"اللهم ما أمسى بي من نعمة، أو بأحد من خلقك..."</li>
          <li>"اللهم عافني في بدني، اللهم عافني في سمعي..." (3 مرات)</li>
          <li>"اللهم إني أعوذ بك من الكفر والفقر، وأعوذ بك من عذاب القبر" (3 مرات)</li>
          <li>"يا حي يا قيوم برحمتك أستغيث، أصلح لي شأني كله..."</li>
          <li>"أمسينا على فطرة الإسلام، وكلمة الإخلاص..."</li>
          <li>"اللهم إني أسألك العفو والعافية..."</li>
          <li>"اللهم صلِّ وسلم على نبينا محمد" (10 مرات)</li>
        </Box>
      </Paper>

      {/* ملاحظة ختامية */}
      <Typography variant="body2" align="center" sx={{ mt: 4, color: '#888' }}>
        🌙 اجعل أذكار المساء جزءًا من روتينك اليومي، فهي حصنك من كل شر وتزيدك قربًا من الله.
      </Typography>
    </Container>
  );
};

export default AzkarEvening;
