import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

export default function PrayerQiyamAlLayl() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      {/* العنوان */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#4a148c' }}
      >
        صلاة قيام الليل
      </Typography>

      {/* صورة */}
      <Box
        component="img"
        src="https://media.gemini.media/img/large/2018/10/4/2018_10_4_23_24_17_949.jpg"
        alt="قيام الليل"
        sx={{
          width: '100%',
          maxHeight: 400,
          objectFit: 'cover',
          borderRadius: 3,
          my: 3,
        }}
      />

      {/* التعريف */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#6a1b9a' }}>
          🌙 ما هي صلاة قيام الليل؟
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          قيام الليل هو كل صلاة تؤدى في الليل بعد صلاة العشاء وحتى أذان الفجر، ويشمل التهجد والتراويح والوتر وغيرها من النوافل.
          <br />
          قال تعالى: <em>"وَمِنَ اللَّيْلِ فَتَهَجَّدْ بِهِ نَافِلَةً لَكَ"</em> [الإسراء: 79]
        </Typography>
      </Paper>

      {/* فضلها */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#2e7d32' }}>
          🌟 فضل قيام الليل:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          • من أعظم القربات إلى الله<br />
          • سبب لمغفرة الذنوب ورفع الدرجات<br />
          • تقرّب العبد إلى ربه في أوقات الصفاء<br />
          • يورث نورًا في الوجه والقلب<br />
          • امتدح الله به المؤمنين في قوله:  
          <em>"كَانُوا قَلِيلًا مِّنَ اللَّيْلِ مَا يَهْجَعُونَ"</em> [الذاريات: 17]
        </Typography>
      </Paper>

      {/* وقتها وعدد ركعاتها */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0277bd' }}>
          🕰 وقتها وعدد ركعاتها:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          يبدأ وقت قيام الليل بعد صلاة العشاء وينتهي بطلوع الفجر. <br />
          لا حد لعدد ركعاتها، لكن الأفضل ألا تزيد عن 11 أو 13 ركعة، اقتداءً بالنبي ﷺ.
          <br />
          عن عائشة رضي الله عنها:  
          <em>"ما كان رسولُ اللهِ ﷺ يزيدُ في رمضانَ ولا في غيرِه على إحدى عشرةَ ركعةً"</em> — [البخاري ومسلم]
        </Typography>
      </Paper>

      {/* كيفية أدائها */}
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4, color: '#6a1b9a' }}>
        🧎‍♂️ كيفية أداء صلاة قيام الليل:
      </Typography>
      <Box component="ul" sx={{ pl: 3, lineHeight: 2, fontSize: '1.1rem' }}>
        <li>النية القلبية لقيام الليل (لا يُشترط التلفظ بها).</li>
        <li>الصلاة مثنى مثنى (كل ركعتين بتسليم).</li>
        <li>ختم الصلاة بركعة وتر واحدة.</li>
        <li>يُستحب الإطالة في القراءة والدعاء.</li>
        <li>يمكن استخدام أدعية مأثورة أو الدعاء بما في القلب.</li>
      </Box>

      {/* أفضل وقت لها */}
      <Paper elevation={3} sx={{ p: 3, mb: 4, mt: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f57c00' }}>
          ⏳ أفضل وقت لقيام الليل:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          أفضل وقت هو <strong>الثلث الأخير من الليل</strong>، أي ما قبل أذان الفجر بساعتين تقريبًا.
          <br />
          قال ﷺ:  
          <em>"ينزل ربنا تبارك وتعالى كل ليلة إلى السماء الدنيا حين يبقى ثلث الليل الآخر فيقول: هل من سائل؟..."</em> — [متفق عليه]
        </Typography>
      </Paper>

      {/* نصائح للمداومة */}
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4, color: '#009688' }}>
        💡 نصائح للمداومة على قيام الليل:
      </Typography>
      <Box component="ul" sx={{ pl: 3, lineHeight: 2, fontSize: '1.1rem' }}>
        <li>نم مبكرًا لتستيقظ بسهولة.</li>
        <li>ابدأ بركعتين فقط ثم زد تدريجيًا.</li>
        <li>اجعل لك وردًا ثابتًا من القرآن.</li><li>ادعُ الله في سجودك بما في قلبك.</li>
        <li>تذكر أن قيام الليل من صفات الصالحين.</li>
      </Box>

      {/* ملاحظة ختامية */}
      <Typography variant="body2" align="center" sx={{ mt: 4, color: '#777' }}>
        🌙 قيام الليل باب عظيم من أبواب القرب إلى الله، وهو دليل صدق المحبة والحرص على رضاه.
      </Typography>
    </Container>
  );
}