import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

export default function PrayerTahajjud() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#4a148c' }}>
        صلاة التهجد
      </Typography>

      {/* صورة */}
      <Box
        component="img"
        src="https://media.gemini.media/img/large/2018/10/4/2018_10_4_23_24_17_949.jpg"
        alt="صلاة التهجد"
        sx={{
          width: '100%',
          maxHeight: 400,
          objectFit: 'cover',
          borderRadius: 3,
          my: 3,
        }}
      />

      {/* تعريف الصلاة */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#2e7d32' }}>
          🌙 ما هي صلاة التهجد؟
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          <strong>صلاة التهجد</strong> هي من أفضل الصلوات النافلة، وتُؤدى في الليل بعد النوم. وهي من قيام الليل، لكنها تُختص بالاستيقاظ لأجل الصلاة، ولذلك سُميت تهجدًا.
        </Typography>
      </Paper>

      {/* حكمها ووقتها */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#1565c0' }}>
          ⏰ وقت صلاة التهجد:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          يبدأ وقتها من بعد صلاة العشاء وحتى طلوع الفجر، وأفضل وقتها هو **الثلث الأخير من الليل**، حيث ينزل الله تعالى إلى السماء الدنيا ويستجيب الدعاء.
        </Typography>
      </Paper>

      {/* فضل الصلاة */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#6a1b9a' }}>
          ⭐️ فضل صلاة التهجد:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          • قال تعالى: <em>"وَمِنَ اللَّيْلِ فَتَهَجَّدْ بِهِ نَافِلَةً لَّكَ عَسَىٰ أَن يَبْعَثَكَ رَبُّكَ مَقَامًا مَّحْمُودًا"</em> [الإسراء:79].<br />
          • وقال ﷺ: <em>"أفضل الصلاة بعد الفريضة، صلاة الليل"</em> (رواه مسلم).<br />
          • وكان النبي ﷺ لا يتركها، ويحث عليها بقوله: <em>"عليكم بقيام الليل؛ فإنه دأب الصالحين قبلكم..."</em> (رواه الترمذي).
        </Typography>
      </Paper>

      {/* كيفية الصلاة */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#00838f' }}>
          🧎‍♀️ كيفية أداء صلاة التهجد:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          • تُصلى ركعتين ركعتين، مع تسليم بعد كل ركعتين.<br />
          • تختم بـ <strong>ركعة وتر</strong> (إما واحدة، أو ثلاث، أو خمس...) حسب الاستطاعة.<br />
          • لا عدد محدد لركعاتها، لكن الأفضل أن تُصلى مثنى مثنى.<br />
          • كان النبي ﷺ يصلي غالبًا 11 ركعة أو 13 ركعة.
        </Typography>
      </Paper>

      {/* دعاء التهجد */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#ef6c00' }}>
          📿 دعاء مستحب في التهجد:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          من أجمل الأدعية التي وردت في تهجّد النبي ﷺ:
          <br />
          <em>
            "اللهم لك الحمد، أنت نور السماوات والأرض ومن فيهن... أنت الحق، ووعدك الحق، ولقاؤك حق، والجنة حق، والنار حق، والنبيون حق... فاغفر لي ما قدمت وما أخرت، أنت إلهي لا إله إلا أنت"
          </em> (رواه البخاري).
        </Typography>
      </Paper>

      {/* الفرق بين التهجد وقيام الليل */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#455a64' }}>
          ❓ الفرق بين التهجد وقيام الليل:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          • <strong>قيام الليل:</strong> يشمل كل صلاة أو ذكر أو دعاء بعد العشاء حتى الفجر، حتى لو لم ينم.<br />
          • <strong>التهجد:</strong> يكون بعد نوم ثم استيقاظ، فهو نوع مخصوص من قيام الليل.
        </Typography>
      </Paper>

      {/* المصادر */}
<Typography variant="body2" align="center" sx={{ mt: 4, color: '#888' }}>
        📝 المصادر: صحيح مسلم 1163، البخاري 1120، تفسير ابن كثير، الإسلام سؤال وجواب، فتاوى اللجنة الدائمة.
      </Typography>
    </Container>
  );
}