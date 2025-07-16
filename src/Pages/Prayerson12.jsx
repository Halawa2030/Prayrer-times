import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

export default function PrayerMasjid() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#1565c0' }}>
        صلاة تحية المسجد
      </Typography>

      <Box
        component="img"
        src="https://i.imgur.com/fY9dfkC.jpg"
        alt="صلاة تحية المسجد"
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
        <Typography variant="h5" gutterBottom>
          🕌 ما هي تحية المسجد؟
        </Typography>
        <Typography variant="body1">
          <strong>تحية المسجد</strong> هي ركعتان يُستحب للمسلم أن يصليهما عند دخول المسجد قبل الجلوس، تعظيمًا للمسجد وامتثالًا لسنة النبي ﷺ.
        </Typography>
      </Paper>

      {/* حكمها */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          📌 حكم صلاة تحية المسجد:
        </Typography>
        <Typography variant="body1">
          سنة مؤكدة عند جمهور العلماء. ويُستحب أداؤها قبل الجلوس، إلا إذا كان وقت كراهة أو دخل والإمام يخطب.
        </Typography>
      </Paper>

      {/* الدليل */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          📖 الدليل من السنة:
        </Typography>
        <Typography variant="body1">
          قال النبي ﷺ: <em>"إذا دخل أحدكم المسجد، فلا يجلس حتى يُصلي ركعتين"</em> – رواه البخاري ومسلم.
        </Typography>
      </Paper>

      {/* عدد الركعات */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          🔢 كم عدد ركعات تحية المسجد؟
        </Typography>
        <Typography variant="body1">
          ركعتان فقط، ولا تُشرع بأكثر من ذلك. ويكفي فيهما قراءة الفاتحة وسورة قصيرة، أو حتى الفاتحة فقط إن ضاق الوقت.
        </Typography>
      </Paper>

      {/* متى تُصلّى */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          ⏰ متى تُصلّى؟
        </Typography>
        <Typography variant="body1">
          تُصلّى فور دخول المسجد، ما لم يكن في وقت من أوقات النهي الشديدة. وبعض العلماء أجازها حتى في أوقات الكراهة لأن النهي لا يشمل ذوات الأسباب.
        </Typography>
      </Paper>

      {/* متى لا تُصلّى */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          ❌ متى لا تُصلّى تحية المسجد؟
        </Typography>
        <Typography variant="body1">
          • إذا دخل المسلم والإمام يخطب الجمعة، فيُستحب أن يصليها خفيفة.<br />
          • إذا كان وقت كراهة شديد (مثل بعد العصر مباشرة عند بعض العلماء).<br />
          • إذا دخل المسلم والمسجد يقيم الصلاة، فالأفضل أن يدخل مع الجماعة.
        </Typography>
      </Paper>

      {/* الفرق بينها وبين صلاة الفرض */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          🔄 هل تُغني الفريضة عن تحية المسجد؟
        </Typography>
        <Typography variant="body1">
          نعم، إذا دخل المسلم المسجد ثم صلّى الفرض مباشرة، فإنه لا يحتاج لتحية المسجد؛ لأن الفرض يكفي عنها.
        </Typography>
      </Paper>

      {/* المصادر */}
      <Typography variant="body2" align="center" sx={{ mt: 4, color: '#888' }}>
        📚 المصادر: صحيح البخاري، صحيح مسلم، فتاوى اللجنة الدائمة، الإسلام سؤال وجواب.
      </Typography>
    </Container>
  );
}