import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const PrayerTawbah = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      {/* العنوان */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#0d47a1' }}
      >
        صلاة التوبة
      </Typography>

      {/* صورة */}
      <Box
        component="img"
        src="https://www.islamweb.net/PicStore/Random/1550048115_225169.jpg"
        alt="صلاة التوبة"
        sx={{
          width: '100%',
          maxHeight: 400,
          objectFit: 'cover',
          borderRadius: 3,
          my: 3,
        }}
      />

      {/* التعريف ومشروعيتها */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          <strong>صلاة التوبة</strong> هي ركعتان يُصليهما المسلم بعد ارتكاب الذنب، بقصد طلب المغفرة من الله. وهي سنة مؤكدة عند جمهور العلماء، مستندة إلى حديث عن أبي بكر رضي الله عنه قال إن النبي ﷺ ذكر: <em>“ما من عبد يذنب ذنبًا ثم يتطهر… ثم يصلي ركعتين ثم يستغفر الله”</em> فغُفر له 
        </Typography>
      </Paper>

      {/* كيفية الأداء */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#6a1b9a' }}>
          🧎‍♂️ كيف تصلي صلاة التوبة؟
        </Typography>
        <Box component="ul" sx={{ pl: 3, fontSize: '1.1rem', lineHeight: 2 }}>
          <li><strong>الطهارة والنية:</strong> توضّأ طهارة صحيحة، ونيّة التوبة من الذنب.</li>
          <li><strong>أداء الركعتين:</strong> تصلي ركعتين كأي نافلة، تقرأ الفاتحة وما تيسر من القرآن.</li>
          <li><strong>الاستغفار:</strong> بعد التسليم، يكثر المصلي من الاستغفار.</li>
        </Box>
      </Paper>

      {/* الوقت وموانعها */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#283593' }}>
          🕰 متى تُصلّى صلاة التوبة؟
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          تُصلى فور التوبة في أي وقت من الليل أو النهار، حتى في أوقات الكراهة إن كان السبب هو التوبة. لكن لا يصح أن تُقبل التوبة عند حلول الآجل أو غسق الموت أو طلوع الشمس من مغربها ().
        </Typography>
      </Paper>

      {/* فضلها وشروط التوبة */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#2e7d32' }}>
          🌟 فضل صلاة التوبة وأثرها
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          • تطهر من الذنب وتزيله إن كانت التوبة صادقة ().<br/>
          • إن صلّاها ثم استغفر، غُفر له كما جاء في الأحاديث ().<br/>
          • تستحب بعدها الأعمال الصالحة مثل الصدقة، لقول الله ﴿وَإِنِّي لَغَفَّارٌ...﴾ ().
        </Typography>
      </Paper>

      {/* قراءة السور */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#ef6c00' }}>
          📖 ماذا يُقرأ فيها؟
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          لا تخصّص بصيغة معينة، افتُرِض أن تقرأ ما تيسر من القرآن، لكن بعض العلماء يرون استحباب قراءتي <strong>سورة الإخلاص</strong> و<strong>الكافرون</strong> أو آية التوبة من آل عمران ().
        </Typography>
      </Paper>

      {/* ملاحظة ختامية */}
      <Typography variant="body2" align="center" sx={{ mt: 4, color: '#888' }}>
        ✨ إذا تاب قلبك وعزمت على عدم العودة، فهذه الصلاة باب مغفرة ورحمة، فاتّخذها عادة مع كل ذنب. والله أعلم.
      </Typography>
    </Container>
  );
};

export default PrayerTawbah;