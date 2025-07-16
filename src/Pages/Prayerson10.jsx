import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

export default function PrayerWitr() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#4a148c' }}>
        صلاة الوتر
      </Typography>

      <Box
        component="img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBCQns3QQ7aQORXBsZgngiaf1NfEIolQRqHA&s"
        alt="صلاة الوتر"
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
          🌙 ما هي صلاة الوتر؟
        </Typography>
        <Typography variant="body1">
          <strong>صلاة الوتر</strong> هي صلاة تُختم بها صلوات الليل، وسُمّيت "وترًا" لأنها تُصلى بعدد فردي من الركعات، وهي من أعظم النوافل وأحبّها إلى الله.
        </Typography>
      </Paper>

      {/* حكمها وفضلها */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#ad1457' }}>
          ⭐️ حكمها وفضلها:
        </Typography>
        <Typography variant="body1">
          • <strong>سنة مؤكدة</strong> عن النبي ﷺ، وداوم عليها في السفر والحضر.<br />
          • قال ﷺ: <em>"إن الله وتر يحب الوتر، فأوتروا يا أهل القرآن"</em> (رواه الترمذي).<br />
          • وقال ﷺ: <em>"أحب الصلاة إلى الله صلاة داود، كان ينام نصف الليل، ويقوم ثلثه، وينام سدسه"</em> (رواه البخاري).
        </Typography>
      </Paper>

      {/* وقتها */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0277bd' }}>
          ⏰ وقت صلاة الوتر:
        </Typography>
        <Typography variant="body1">
          يبدأ وقتها من <strong>بعد صلاة العشاء</strong> حتى <strong>طلوع الفجر</strong>. ويُستحب تأخيرها لمن يثق أنه سيقوم الليل.
        </Typography>
      </Paper>

      {/* عدد الركعات */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#ef6c00' }}>
          🔢 كم عدد ركعات الوتر؟
        </Typography>
        <Typography variant="body1">
          • أقلها ركعة واحدة، وهذا هو الحد الأدنى.<br />
          • يمكن صلاتها 3 أو 5 أو 7 أو أكثر ما دام العدد فرديًا.<br />
          • عن عائشة رضي الله عنها: <em>"كان رسول الله ﷺ لا يزيد في رمضان ولا غيره على إحدى عشرة ركعة"</em> (رواه البخاري).
        </Typography>
      </Paper>

      {/* كيفية أدائها */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#388e3c' }}>
          🧎‍♂️ كيفية أداء صلاة الوتر:
        </Typography>
        <Typography variant="body1">
          • يمكن صلاتها ركعة واحدة فقط.<br />
          • أو تُصلى ركعتين، ثم يُسلم، ثم ركعة واحدة.<br />
          • ويجوز أيضًا ثلاث ركعات متصلة، مثل صلاة المغرب، لكن بدون تشهد أوسط.<br />
          • يُستحب الدعاء في الركعة الأخيرة بـ<em>دعاء القنوت</em>.
        </Typography>
      </Paper>

      {/* دعاء القنوت */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0097a7' }}>
          📖 ماذا يُقال في دعاء القنوت؟
        </Typography>
        <Typography variant="body1">
          <em>
            "اللهم اهدني فيمن هديت، وعافني فيمن عافيت، وتولني فيمن توليت، وبارك لي فيما أعطيت،
            وقني شر ما قضيت، فإنك تقضي ولا يُقضى عليك، إنه لا يذل من واليت، تباركت ربنا وتعاليت."
          </em>
        </Typography>
      </Paper>

      {/* سؤال شائع */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#6d4c41' }}>
          ❓ هل يجب الوتر كل يوم؟
        </Typography>
        <Typography variant="body1">
          لا يجب، لكنه من <strong>أفضل السنن الراتبة</strong>، وتركه باستمرار يُعدّ تفريطًا. كان النبي ﷺ لا يتركه حتى في السفر.
        </Typography>
      </Paper>
      {/* المصادر */}
<Typography variant="body2" align="center" sx={{ mt: 4, color: '#888' }}>
        📝 المصادر: صحيح مسلم 1163، البخاري 1120، تفسير ابن كثير، الإسلام سؤال وجواب، فتاوى اللجنة الدائمة.
      </Typography>
    </Container>
  );
}