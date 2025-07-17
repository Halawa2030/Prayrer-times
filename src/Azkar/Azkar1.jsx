import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const AzkarMorning = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      {/* العنوان */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#0d47a1' }}
      >
        أذكار الصباح
      </Typography>

      {/* صورة */}
      {/* <Box
        component="img"
        src={""} 
        alt="أذكار الصباح"
        sx={{
          width: '100%',
          maxHeight: 400,
          objectFit: 'cover',
          borderRadius: 3,
          my: 3,
        }}
      /> */}

      {/* أذكار الصباح الرئيسية */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#1565c0' }}>
          🌅 أذكار الصباح:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          • "أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شيء قدير..."<br />
          • "اللهم بك أصبحنا، وبك أمسينا، وبك نحيا، وبك نموت، وإليك النشور."<br />
          • "رضيت بالله ربًا، وبالإسلام دينًا، وبمحمد ﷺ نبيًا." (3 مرات)<br />
          • "اللهم إني أصبحت أشهدك، وأشهد حملة عرشك، وملائكتك، وجميع خلقك أنك أنت الله لا إله إلا أنت..." (4 مرات)<br />
          • "اللهم ما أصبح بي من نعمة أو بأحد من خلقك فمنك وحدك لا شريك لك، فلك الحمد ولك الشكر."
        </Typography>
      </Paper>

      {/* أذكار التسبيح والاستغفار */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#2e7d32' }}>
          📿 تسبيح واستغفار:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          • "سبحان الله وبحمده" (100 مرة)<br />
          • "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شيء قدير" (100 مرة)<br />
          • "أستغفر الله وأتوب إليه" (100 مرة)<br />
          • "سيد الاستغفار: اللهم أنت ربي، لا إله إلا أنت، خلقتني وأنا عبدك..." (مرة واحدة)
        </Typography>
      </Paper>

      {/* المعوذات وآية الكرسي */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#6a1b9a' }}>
          📖 آيات وسور للحفظ والبركة:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          • آية الكرسي: "الله لا إله إلا هو الحي القيوم..."<br />
          • سورة الإخلاص (3 مرات)<br />
          • سورة الفلق (3 مرات)<br />
          • سورة الناس (3 مرات)
        </Typography>
      </Paper>

      {/* أدعية أخرى */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#00838f' }}>
          🤲 أدعية مستحبة:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          • "اللهم إني أسألك خير هذا اليوم، فتحه، ونصره، ونوره، وبركته، وهداه..."<br />
          • "اللهم إني أعوذ بك من الهم والحزن..."<br />
          • "اللهم عافني في بدني، اللهم عافني في سمعي، اللهم عافني في بصري..."<br />
          • "اللهم إني أعوذ بك من الكفر والفقر، وأعوذ بك من عذاب القبر، لا إله إلا أنت."
        </Typography>
      </Paper>

      {/* ملاحظة ختامية */}
      <Typography variant="body2" align="center" sx={{ mt: 4, color: '#888' }}>
        ✨ المداومة على أذكار الصباح تحفظك من كل شر، وتملأ يومك بركة وطمأنينة.
      </Typography>
    </Container>
  );
};

export default AzkarMorning;
