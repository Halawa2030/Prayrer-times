


import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const PrayerDhuhr = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      {/* العنوان */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#ef6c00' }}
      >
        صلاة الظهر
      </Typography>

      {/* صورة */}
      <Box
        component="img"
        src="https://hyatoky.com/mwfiles/thumbs/fit630x300/13090/1610015500/%D9%85%D8%AA%D9%89_%D9%8A%D9%83%D9%88%D9%86_%D9%88%D9%82%D8%AA_%D8%A7%D9%84%D8%B2%D9%88%D8%A7%D9%84.jpg"
        alt="صلاة الظهر"
        sx={{
          width: '100%',
          maxHeight: 400,
          objectFit: 'cover',
          borderRadius: 3,
          my: 3,
        }}
      />

      {/* تعريف ووقت الصلاة */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f57c00' }}>
          🕰️ عدد الركعات ووقت الصلاة:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          صلاة الظهر هي ثاني الصلوات المفروضة في اليوم، وتتكون من <strong>أربع ركعات</strong> تُؤدى سرًا.
          يبدأ وقتها من <strong>زوال الشمس</strong> عن وسط السماء إلى أن يصير <strong>ظل كل شيء مثله</strong>، ويمتد إلى دخول وقت العصر.
        </Typography>
      </Paper>

      {/* فضل صلاة الظهر */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#2e7d32' }}>
          🌟 فضل صلاة الظهر:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          • من أعظم الصلوات التي يُستجار فيها بالله من النار.<br />
          • قال ﷺ: <em>«ثم صلِّ، فإن الصلاة مشهودة»</em><br />
          • قال ﷺ: <em>"أما صلاة الظهر إذا زالت الشمس، يسبح كل شيء لربه..."</em><br />
          • نور في الدنيا والآخرة، ومكفرة للسيئات.<br />
          • <em>«من صلى أربعًا قبل الظهر وأربعًا بعدها حرّمه الله على النار»</em> – الترمذي<br />
          • هي أول صلاة فرضت بعد المعراج.<br />
          • أداؤها وقت اللهو علامة على الإيمان: <em>﴿إن الصلاة كانت على المؤمنين كتابًا موقوتًا﴾</em>
        </Typography>
      </Paper>

      {/* أسماؤها وسننها */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#6a1b9a' }}>
          📝 أسماء وسنن صلاة الظهر:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          • تُعرف أيضًا باسم: <em>الأولى</em> و<em>الهجير</em>.<br />
          • السنة الراتبة: ركعتان أو أربع قبلها، وركعتان بعدها.<br />
          • عن عائشة: <em>"كان لا يدع أربعًا قبل الظهر وركعتين قبل الغداة"</em>.
        </Typography>
      </Paper>

      {/* كيفية أداء صلاة الظهر */}
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4, color: '#ef6c00' }}>
        🧎‍♂️ كيفية أداء صلاة الظهر:
      </Typography>
      <Box component="ul" sx={{ pl: 3, lineHeight: 2, fontSize: '1.1rem' }}>
        <li>الطهارة الكاملة للبدن والثياب والمكان.</li>
        <li>ستر العورة حسب الشروط الشرعية.</li>
        <li>استقبال القبلة.</li>
        <li>النية القلبية لأداء صلاة الظهر.</li>
        <li>تكبيرة الإحرام: <em>"الله أكبر"</em>.</li>
        <li>دعاء الاستفتاح، ثم قراءة الفاتحة وسورة قصيرة (في أول ركعتين).</li>
        <li>الركوع: <em>"سبحان ربي العظيم"</em> ثلاثًا.</li>
        <li>الرفع من الركوع: <em>"سمع الله لمن حمده، ربنا ولك الحمد"</em>.</li>
        <li>سجدتان مع الدعاء بينهما.</li>
        <li>التشهد بعد الركعتين الأوليين.</li>
        <li>الركعتان الثالثة والرابعة بالفاتحة فقط.</li><li>التشهد الأخير، ثم التسليم يمينًا ويسارًا.</li>
      </Box>

      {/* الأذكار بعد الصلاة */}
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4, color: '#2e7d32' }}>
        🧿 أذكار بعد صلاة الظهر:
      </Typography>
      <Box component="ul" sx={{ pl: 3, lineHeight: 2, fontSize: '1.1rem' }}>
        <li>الاستغفار ثلاثًا: <em>"أستغفر الله، أستغفر الله، أستغفر الله"</em>.</li>
        <li><em>"اللهم أنت السلام ومنك السلام..."</em>.</li>
        <li>قراءة <strong>آية الكرسي</strong>: <em>﴿اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ...﴾</em></li>
        <li>التسبيح 33، التحميد 33، التكبير 34 مرة.</li>
        <li>قراءة الإخلاص، الفلق، والناس.</li>
        <li>الدعاء بما شئت من خيري الدنيا والآخرة.</li>
      </Box>

      {/* ملاحظة ختامية */}
      <Typography variant="body2" align="center" sx={{ mt: 4, color: '#888' }}>
        ✨ الأذكار بعد الصلاة تقوي صلتك بالله، وتملأ قلبك طمأنينة، فاحرص عليها دائمًا.
      </Typography>
    </Container>
  );
};

export default PrayerDhuhr;
