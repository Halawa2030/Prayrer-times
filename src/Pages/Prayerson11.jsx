import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

export default function PrayerDuha() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#f57c00' }}>
        صلاة الضحى
      </Typography>

      <Box
        component="img"
        src="https://www.edarabia.com/ar/wp-content/uploads/2020/04/what-duha-prayer-learn-about-7-most-important-aspects-of-it.jpg"
        alt="صلاة الضحى"
        sx={{
          width: '100%',
          maxHeight: 400,
          objectFit: 'cover',
          borderRadius: 3,
          my: 3,
        }}
      />

      {/* تعريف */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#ef6c00' }}>
          ☀️ ما هي صلاة الضحى؟
        </Typography>
        <Typography variant="body1">
          <strong>صلاة الضحى</strong> هي نافلة تؤدى في وقت الضحى، وهو الوقت الذي يبدأ بعد ارتفاع الشمس قدر رمح (حوالي 15 دقيقة بعد الشروق) وحتى قبيل الظهر. وتُعرف أيضًا بـ <em>صلاة الأوابين</em> (أي كثيري الرجوع إلى الله).
        </Typography>
      </Paper>

      {/* فضلها */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#d84315' }}>
          🌟 فضل صلاة الضحى:
        </Typography>
        <Typography variant="body1">
          • قال النبي ﷺ: <em>"يصبح على كل سلامى من أحدكم صدقة... ويجزئ عن ذلك ركعتان يركعهما من الضحى"</em> (رواه مسلم).<br />
          • وقال ﷺ: <em>"من حافظ على الضحى غفرت له ذنوبه، وإن كانت مثل زبد البحر"</em> (رواه ابن ماجه وحسنه الألباني).
        </Typography>
      </Paper>

      {/* وقتها */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#6d4c41' }}>
          🕰️ متى وقت صلاة الضحى؟
        </Typography>
        <Typography variant="body1">
          يبدأ من بعد شروق الشمس بـ15-20 دقيقة، ويمتد حتى قبيل أذان الظهر. <br />
          وأفضل وقتها حين تشتد الشمس وترتفع أكثر (أي قبل الظهر بساعة تقريبًا).
        </Typography>
      </Paper>

      {/* عدد الركعات */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#388e3c' }}>
          🔢 كم عدد ركعاتها؟
        </Typography>
        <Typography variant="body1">
          • أقلها ركعتان.<br />
          • وأكثرها 8 ركعات (وقيل 12).<br />
          • كان النبي ﷺ يصلي أحيانًا 4 ركعات، وأحيانًا أكثر بحسب وقته.
        </Typography>
      </Paper>

      {/* كيفية أدائها */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#1976d2' }}>
          🧎‍♂️ كيف تُصلَّى صلاة الضحى؟
        </Typography>
        <Typography variant="body1">
          • تُصلى ركعتين ركعتين، مثل باقي النوافل.<br />
          • لا يوجد دعاء مخصوص فيها.<br />
          • يُستحب فيها قراءة سور مثل <strong>الشمس، والضحى، والليل</strong>.
        </Typography>
      </Paper>

      {/* هل تُصلّى يوميًا؟ */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#9c27b0' }}>
          ❓ هل يجب صلاتها يوميًا؟
        </Typography>
        <Typography variant="body1">
          لا تجب، ولكنها سنة مؤكدة، وكان النبي ﷺ يحث عليها كثيرًا. ومن حافظ عليها كتب من الأوابين.
        </Typography>
      </Paper>

      {/* أحاديث */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#c2185b' }}>
          📜 من الأحاديث الواردة:
        </Typography>
        <Typography variant="body1">
          قال ﷺ: <em>"لا يُحافظ على صلاة الضحى إلا أواب، وهي صلاة الأوابين"</em> (رواه الطبراني وحسنه الألباني).
        </Typography>
      </Paper>

      {/* المصدر */}
      <Typography variant="body2" align="center" sx={{ mt: 4, color: '#888' }}>
        📚 المصادر: صحيح مسلم، سنن ابن ماجه، فتاوى ابن باز، الإسلام سؤال وجواب.
      </Typography>
    </Container>
  );
}