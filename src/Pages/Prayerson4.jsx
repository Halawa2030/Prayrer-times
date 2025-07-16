import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const PrayerJanazah = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      {/* العنوان */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#0d47a1' }}
      >
        صلاة الجنازة
      </Typography>

      {/* صورة */}
      <Box
        component="img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOjQKIl6Ynx-wlydicXiZ41hP60RYYhPMIMw&s"
        alt="صلاة الجنازة"
        sx={{
          width: '100%',
          maxHeight: 400,
          objectFit: 'cover',
          borderRadius: 3,
          my: 3,
        }}
      />

      {/* التعريف وأحكامها */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          <strong>صلاة الجنازة</strong> هي صلاة مخصوصة تُؤدى على الميت المسلم (غير الشهيد) بعد تغسيله وتكفينه وقبل دفنه، وهي فرض كفاية، أي إذا قام بها بعض المسلمين سقط الإثم عن الباقين 
        </Typography>
      </Paper>

      {/* كيفية الأداء */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#6a1b9a' }}>
          🧎‍♂️ كيفية أداء صلاة الجنازة
        </Typography>
        <Box component="ol" sx={{ pl: 3, fontSize: '1.1rem', lineHeight: 2 }}>
          <li><strong>الطهارة والنية:</strong> يجب الطهارة وتحديد النية، نحو "أصلي على هذه الجنازة" ().</li>
          <li><strong>التكبيرات الأربع:</strong></li>
          <ul>
            <li>الأولى: "الله أكبر" ثم قراءة الفاتحة ().</li>
            <li>الثانية: "الله أكبر" ثم الصلاة على النبي ﷺ (الصلاة الإبراهيمية) ().</li>
            <li>الثالثة: "الله أكبر" ثم الدعاء للميت بنحو:  
              <em>اللهم اغفر لحينا وميتنا... ومن توفيته منا فتوّفه على الإيمان...</em> ().</li>
            <li>الرابعة: "الله أكبر" ثم يمكن الدعاء للمسلمين أو السكوت، ثم التسليم مرة واحدة ().</li>
          </ul>
        </Box>
      </Paper>

      {/* فضل الصلاة */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#283593' }}>
          🌟 فضل حضور الجنازة
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          عن أبي هريرة رضي الله عنه: "من شهد الجنازة حتى تصلي عليها فله قيراط، ومن شهدها حتى تدفن فله قيراطان" ().
        </Typography>
      </Paper>

      {/* ملاحظات إضافية */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#2e7d32' }}>
          📝 ملاحظات مهمة
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          • تُرفع اليدان عند كل تكبيرة واستحب الإسرار ولا تُركع ولا تسجد فيها ().  
          • الدعاء للميت بعد التكبيرة الثالثة ورد في السنة كما ثبت عن النبي ﷺ ().  
          • لا تشترط النية مسبقًا، يكفي نية فرض كفاية ().
        </Typography>
      </Paper>

      {/* ختام */}
      <Typography variant="body2" align="center" sx={{ mt: 4, color: '#888' }}>
        ✨ حضورك لصلاة الجنازة حقٌ أخوي وأجرك عند الله كبير، فاحرص عليه عند فقد مسلم إن شاء الله.
      </Typography>
    </Container>
  );
};

export default PrayerJanazah;