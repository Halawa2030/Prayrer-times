
import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const PrayerIstikhara = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      {/* العنوان */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#0d47a1' }}
      >
        صلاة الاستخارة
      </Typography>

      {/* صورة */}
      <Box
        component="img"
        src="https://mediaaws.almasryalyoum.com/news/verylarge/2020/10/16/1336028_0.jpg"
        alt="صلاة الاستخارة"
        sx={{
          width: '100%',
          maxHeight: 400,
          objectFit: 'cover',
          borderRadius: 3,
          my: 3,
        }}
      />

      {/* تعريف صلاة الاستخارة */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          <strong>صلاة الاستخارة</strong> هي صلاة يؤديها المسلم عندما يحتار في اتخاذ قرار بشأن أمر ما، ويسأل الله تعالى أن يختار له الخير. وهي <strong>سنة مؤكدة</strong> عن النبي ﷺ، وتعني طلب الخير من الله تعالى في أمرٍ ما.
        </Typography>
      </Paper>

      {/* كيفية أداء صلاة الاستخارة */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#6a1b9a' }}>
          🧎‍♂️ كيف تصلي صلاة الاستخارة بطريقة صحيحة؟
        </Typography>
        <Box component="ul" sx={{ pl: 3, fontSize: '1.1rem', lineHeight: 2 }}>
          <li><strong>النية:</strong> انوِ في قلبك أنك ستصلي صلاة الاستخارة لطلب الخير من الله في الأمر الذي يشغلك.</li>
          <li><strong>أداء الركعتين:</strong> صلِ ركعتين من غير الفريضة في أي وقت غير الأوقات المكروهة.</li>
          <li><strong>قراءة القرآن:</strong> في الركعة الأولى بعد الفاتحة، يُستحب قراءة <strong>سورة الكافرون</strong>، وفي الثانية <strong>سورة الإخلاص</strong>.</li>
          <li><strong>التسليم:</strong> سلّم كما تفعل في أي صلاة.</li>
          <li><strong>دعاء الاستخارة:</strong> بعد التسليم، ارفع يديك وقل:<br />
            <em>
              "اللهم إني أستخيرك بعلمك، وأستقدرك بقدرتك، وأسألك من فضلك العظيم..." (إلى آخر الدعاء).
            </em>
          </li>
          <li><strong>التوكل:</strong> افعل ما تراه ميسرًا بعد الاستخارة ولا تنتظر رؤيا أو علامة خاصة.</li>
        </Box>
      </Paper>

      {/* متى يقال الدعاء */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#283593' }}>
          🕰 متى يقال دعاء الاستخارة؟
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          دعاء الاستخارة يُقال بعد التسليم من الصلاة، لقوله ﷺ: <em>"ثم ليقل..."</em>، و"ثم" تفيد التراخي. والأفضل قوله بعد التسليم.
        </Typography>
      </Paper>

      {/* هل يجب رؤية رؤيا؟ */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#00838f' }}>
          🌙 هل من الضروري أن أرى رؤيا بعد الاستخارة؟
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          لا، فالرؤيا ليست شرطًا. العلامات قد تكون:<br />
          • انشراح الصدر<br />
          • تيسير أو تعسير الأمر<br />
          • صرف القلب عن الموضوع
        </Typography>
      </Paper>

      {/* كيف أعرف أن الأمر خير لي */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#2e7d32' }}>
          ✅ كيف أعرف أن الأمر خير لي بعد الاستخارة؟
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          إذا تيسّر الأمر وسار بسلاسة، فهو خير. وإن وُجدت عوائق تمنعك من إتمامه، فهو أيضًا خير، لأن الله صرفه عنك.
        </Typography>
      </Paper>

      {/* السور المستحبة */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#ef6c00' }}>
          📖 ما هي السور التي تُقرأ في صلاة الاستخارة؟
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          الركعة الأولى: <strong>الكافرون</strong><br />
          الركعة الثانية: <strong>الإخلاص</strong></Typography>
      </Paper>

      {/* قراءة الدعاء من الهاتف */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#6a1b9a' }}>
          📱 هل يجوز قراءة دعاء الاستخارة من الهاتف؟
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          نعم، لا بأس بقراءته من الهاتف أو ورقة إن لم تكن حافظًا له. والأفضل حفظه مع الخشوع.
        </Typography>
      </Paper>

      {/* أوقات النهي */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#d32f2f' }}>
          ⛔️ ما هي الأوقات المحرمة لصلاة الاستخارة؟
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          لا تجوز في أوقات النهي التالية:<br />
          • بعد صلاة الفجر حتى طلوع الشمس<br />
          • قبيل أذان الظهر أثناء الزوال<br />
          • بعد صلاة العصر حتى غروب الشمس
        </Typography>
      </Paper>

      {/* ملاحظة ختامية */}
      <Typography variant="body2" align="center" sx={{ mt: 4, color: '#888' }}>
        ✨ صلاة الاستخارة تزرع الطمأنينة في القلب، وتجعلك تسير في طريقك بثقة، فاحرص عليها دائمًا عند التردد.
      </Typography>
    </Container>
  );
};

export default PrayerIstikhara;

