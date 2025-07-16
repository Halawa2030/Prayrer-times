import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

export default function PrayerKusoofKhosoof() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#37474f' }}>
        صلاة الكسوف والخسوف
      </Typography>

      {/* صورة توضيحية */}
      <Box
        component="img"
        src="https://mediaaws.almasryalyoum.com/news/verylarge/2022/10/24/1927442_0.jpg"
        alt="كسوف الشمس"
        sx={{
          width: '100%',
          maxHeight: 400,
          objectFit: 'contain',
          borderRadius: 3,
          my: 3,
        }}
      />

      {/* تعريف الصلاة */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#6d4c41' }}>
          🌒 ما هي صلاة الكسوف والخسوف؟
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          <strong>صلاة الكسوف</strong> تُؤدى عند كسوف الشمس، و<em>صلاة الخسوف</em> عند خسوف القمر. وهي سنة مؤكدة عن النبي ﷺ تُؤدى عند حدوث الظاهرة الكونية، تضرعًا وخشوعًا لله.
        </Typography>
      </Paper>

      {/* الفرق بين الكسوف والخسوف */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#00897b' }}>
          🔭 الفرق بين الكسوف والخسوف:
        </Typography>
        <Typography variant="body1">
          • <strong>الكسوف:</strong> ظاهرة اختفاء ضوء الشمس جزئيًا أو كليًا.<br />
          • <strong>الخسوف:</strong> اختفاء ضوء القمر جزئيًا أو كليًا.<br />
          وكلاهما آيتان من آيات الله لتذكير الناس بعظمته وقدرته.
        </Typography>
      </Paper>

      {/* سببها ووقتها */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#5e35b1' }}>
          ⏰ وقت الصلاة:
        </Typography>
        <Typography variant="body1">
          تُصلّى صلاة الكسوف أو الخسوف <strong>عند بدء الظاهرة</strong> وتستمر حتى انتهائها. ولا تُعاد إذا انقضى الكسوف قبل أن تُصلّى.
        </Typography>
      </Paper>

      {/* حكمها */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#d84315' }}>
          📜 حكمها:
        </Typography>
        <Typography variant="body1">
          <strong>سنة مؤكدة</strong> باتفاق العلماء، وتُصلى في جماعة، ويُسن أن يُعظَّم الله فيها ويكثر الدعاء والاستغفار.
        </Typography>
      </Paper>

      {/* كيفية الصلاة */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#1e88e5' }}>
          🧎‍♂️ كيفية أداء صلاة الكسوف والخسوف:
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 2 }}>
          • تُصلى ركعتين، لكن بطريقة مختلفة عن المعتاد:<br />
          - في كل ركعة: <strong>قيامان، وقراءتان، وركوعان وسجدتان</strong>.<br />
          - يُطيل القراءة، والركوع، والسجود.<br />
          - تُقرأ الفاتحة وسورة طويلة (مثل البقرة، آل عمران).<br />
          - لا أذان لها ولا إقامة، لكن يُنادى لها: "الصلاة جامعة".
        </Typography>
      </Paper>

      {/* ما يقال فيها */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#7b1fa2' }}>
          📿 ما يُقال فيها:
        </Typography>
        <Typography variant="body1">
          • الإكثار من <strong>الدعاء والاستغفار</strong>.<br />
          • <strong>التهليل والتكبير</strong> والتسبيح.<br />
          • تُختم بخطبة قصيرة فيها تذكير بالله والتوبة.
        </Typography>
      </Paper>

      {/* الحديث */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#00695c' }}>
          📖 أحاديث واردة:
        </Typography>
        <Typography variant="body1">
          قال رسول الله ﷺ: <em>"إن الشمس والقمر آيتان من آيات الله، لا ينكسفان لموت أحد ولا لحياته، فإذا رأيتم ذلك فافزعوا إلى الصلاة"</em> (متفق عليه).
        </Typography>
      </Paper>

      {/* المصدر */}
<Typography variant="body2" align="center" sx={{ mt: 4, color: '#888' }}>
        📝 المصادر: صحيح البخاري (1041)، صحيح مسلم (901)، الإسلام سؤال وجواب، فتاوى اللجنة الدائمة.
      </Typography>
    </Container>
  );
}