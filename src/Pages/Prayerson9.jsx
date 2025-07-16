import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

export default function PrayerTaraweeh() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#4a148c' }}>
        صلاة التراويح
      </Typography>

      <Box
        component="img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThHDX6bgkASASACB4VutQUYhV-48RJrjVdIQ&s"
        alt="صلاة التراويح"
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
        <Typography variant="h5" gutterBottom sx={{ color: '#6a1b9a' }}>
          🌙 ما هي صلاة التراويح؟
        </Typography>
        <Typography variant="body1">
          <strong>صلاة التراويح</strong> هي صلاة تطوّع تؤدى في ليالي شهر رمضان بعد صلاة العشاء، وهي سنة مؤكدة، تُقام جماعة في المساجد أو فرديًا في البيت، وتُعد من أعظم القُربات في هذا الشهر المبارك.
        </Typography>
      </Paper>

      {/* فضلها وحكمها */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#ad1457' }}>
          ⭐️ فضلها وحكمها:
        </Typography>
        <Typography variant="body1">
          • <strong>سنة مؤكدة</strong> عن النبي ﷺ.<br />
          • من أفضل القربات في رمضان.<br />
          • قال ﷺ: <em>"من قام رمضان إيمانًا واحتسابًا غُفر له ما تقدم من ذنبه"</em> (رواه البخاري ومسلم).
        </Typography>
      </Paper>

      {/* وقتها */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0277bd' }}>
          ⏰ وقتها:
        </Typography>
        <Typography variant="body1">
          تُصلى بعد <strong>صلاة العشاء</strong> مباشرة، ويستمر وقتها إلى <strong>طلوع الفجر</strong>.
        </Typography>
      </Paper>

      {/* عدد الركعات */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#ef6c00' }}>
          🔢 كم عدد ركعات التراويح؟
        </Typography>
        <Typography variant="body1">
          • لا عدد محدد، والأفضل ألا يُشدد فيها.<br />
          • صلى النبي ﷺ التراويح 11 ركعة، كما في حديث عائشة رضي الله عنها.<br />
          • الصحابة صلّوها عشرين ركعة في عهد عمر بن الخطاب رضي الله عنه.<br />
          <em>قال الإمام النووي: كلاهما جائز، ولا إنكار في المختلف فيه.</em>
        </Typography>
      </Paper>

      {/* كيفية الصلاة */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#388e3c' }}>
          🧎‍♂️ كيفية أداء التراويح:
        </Typography>
        <Typography variant="body1">
          • تُصلى ركعتين ركعتين، ثم تُختم بـ <strong>صلاة الوتر</strong>.<br />
          • يستحب الإطالة في القراءة، خصوصًا لمن يصلي جماعة.<br />
          • يجوز القراءة من المصحف أثناء الصلاة.
        </Typography>
      </Paper>

      {/* فردًا أم جماعة؟ */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0097a7' }}>
          👤 هل تُصلى التراويح جماعة أم فردًا؟
        </Typography>
        <Typography variant="body1">
          • كلاهما جائز، لكن <strong>الأفضل جماعة</strong>، خصوصًا في المسجد.<br />
          • قال النبي ﷺ: <em>"من قام مع الإمام حتى ينصرف كُتب له قيام ليلة"</em> (رواه الترمذي وصححه الألباني).
        </Typography>
      </Paper>

      {/* المصدر */}
      <Typography variant="body2" align="center" sx={{ mt: 4, color: '#888' }}>
        📚 المصادر: صحيح البخاري، صحيح مسلم، الإسلام سؤال وجواب، فتاوى اللجنة الدائمة.
      </Typography>
    </Container>
  );
}