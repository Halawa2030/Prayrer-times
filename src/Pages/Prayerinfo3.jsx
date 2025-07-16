
import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const PrayerAsr = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      {/* العنوان */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#ef6c00' }}
      >
        صلاة العصر
      </Typography>

      {/* صورة */}
      <Box
        component="img"
        src={"https://blog.ajsrp.com/wp-content/uploads/2025/05/%D8%A3%D9%87%D9%85%D9%8A%D8%A9-%D8%B5%D9%84%D8%A7%D8%A9-%D8%A7%D9%84%D8%B9%D8%B5%D8%B1-696x398.jpeg"}
        alt="صلاة العصر"
        sx={{
          width: '100%',
          maxHeight: 400,
          objectFit: 'cover',
          borderRadius: 3,
          my: 3,
        }}
      />

      {/* عدد الركعات ووقت الصلاة */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#6d4c41' }}>
          🕌 عدد الركعات ووقت الصلاة:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          صلاة العصر تتكون من أربع ركعات فرض، وهي صلاة سرّية. يبدأ وقتها عندما يصبح ظل كل شيء مثله بعد فيء الزوال، ويمتد حتى غروب الشمس. ينتهي وقت الفضيلة عند اصفرار الشمس، ويُكره تأخيرها لغير عذر.
        </Typography>
      </Paper>


      {/* فضل صلاة العصر */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#2e7d32' }}>
          🌟 فضل صلاة العصر:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          • قال رسول الله ﷺ: <em>"من صلى البردين دخل الجنة"</em>، والبردان هما الفجر والعصر<br />
          • قال ﷺ: <em>"يتعاقبون فيكم ملائكة بالليل وملائكة بالنهار، ويجتمعون في صلاة الفجر وصلاة العصر"</em><br />
          • تُعد من أعظم الصلوات أجرًا، وملائكة النهار والليل تجتمع فيها.
        </Typography>
      </Paper>

      {/* الصلاة الوسطى */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#5d4037' }}>
          ⚖️ الصلاة الوسطى:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          يعتقد كثير من العلماء أن صلاة العصر هي "الصلاة الوسطى" المذكورة في قوله تعالى:<br />
          <em>﴿حَافِظُوا عَلَى الصَّلَوَاتِ وَالصَّلَاةِ الْوُسْطَى﴾ [البقرة: 238]</em>
        </Typography>
      </Paper>

      {/* سبب التسمية */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#6a1b9a' }}>
          🕰️ سبب التسمية:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          سُمّيت بهذا الاسم لأنها تُؤدى في وقت العصر، أي الوقت الذي يطول فيه ظل الأشياء ويبدأ ميل الشمس نحو الغروب.
        </Typography>
      </Paper>

      {/* التحذير من تركها */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#c62828' }}>
          ⚠️ التحذير من تركها:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          • قال النبي ﷺ: <em>"من ترك صلاة العصر فقد حبط عمله"</em><br />
          • وقال ﷺ: <em>"الذي تفوته صلاة العصر كأنما وتر أهله وماله"</em>، أي نقص منه أهله وماله.
        </Typography>
      </Paper>

      {/* أذكار بعد صلاة العصر */}
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4, color: '#2e7d32' }}>
        🧿 أذكار بعد صلاة العصر:
      </Typography>

      <Box component="ul" sx={{ pl: 3, lineHeight: 2, fontSize: '1.1rem' }}>
        <li>الاستغفار ثلاثًا: <em>"أستغفر الله، أستغفر الله، أستغفر الله"</em>.</li><li>دعاء ختم الصلاة: <em>"اللهم أنت السلام ومنك السلام، تباركت يا ذا الجلال والإكرام"</em>.</li>
        <li>قراءة آية الكرسي: <em>﴿اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ...﴾</em>.</li>
        <li>التسبيح 33 مرة، التحميد 33 مرة، التكبير 34 مرة.</li>
        <li>قراءة الإخلاص، الفلق، الناس.</li>
        <li>الدعاء بما أحببت من خيري الدنيا والآخرة.</li>
      </Box>

      <Typography variant="body2" sx={{ fontSize: '1rem', mt: 2, color: '#757575' }}>
        <em>💡 تُقال الأذكار بترتيبٍ وطمأنينة، وهي سبب لمغفرة الذنوب ورفع الدرجات.</em>
      </Typography>
    </Container>
  );
};

export default PrayerAsr;