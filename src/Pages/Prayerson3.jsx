
import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const PrayerHajah = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      {/* العنوان */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#0d47a1' }}
      >
        صلاة الحاجة
      </Typography>

      {/* صورة */}
      <Box
        component="img"
        src="https://modo3.com/thumbs/fit630x300/93203/1580034643/%D9%83%D9%8A%D9%81%D9%8A%D8%A9_%D8%B5%D9%84%D8%A7%D8%A9_%D8%A7%D9%84%D8%AD%D8%A7%D8%AC%D8%A9_%D9%88%D8%AF%D8%B9%D8%A7%D8%A6%D9%87%D8%A7.jpg"
        alt="صلاة الحاجة"
        sx={{
          width: '100%',
          maxHeight: 400,
          objectFit: 'cover',
          borderRadius: 3,
          my: 3,
        }}
      />

      {/* تعريف ومشروعيتها */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          <strong>صلاة الحاجة</strong> هي ركعتان يُصلّيهما المسلم إذا احتاج لقضاء أمر دنيوي أو أخروي، وقد اتفق جمهور العلماء على استحبابها. يُسنُّ التوضؤ والإخلاص في النية، ثم يُصلي ركعتين ثم يدعو بما ورد فيها.  
        </Typography>
      </Paper>

      {/* كيفية الأداء */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#6a1b9a' }}>
          🧎‍♂️ كيف تصلي صلاة الحاجة؟
        </Typography>
        <Box component="ul" sx={{ pl: 3, fontSize: '1.1rem', lineHeight: 2 }}>
          <li><strong>النية:</strong> أن تنوي بقلبك صلاتها لقضاء الحاجة.</li>
          <li><strong>الوضوء:</strong> يستحب الصلاة على طهارة محاولة لقول "أحسن الوضوء". ()</li>
          <li><strong>أدائها:</strong> ركعتان من غير الفريضة، تُقرأ فيهما الفاتحة وما تيسر. ()</li>
          <li><strong>التشهد والتسليم.</strong></li>
        </Box>
      </Paper>

      {/* الصلاة على النبي والثناء */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#283593' }}>
          ✨ ما بعد الركعتين؟
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          بعد التسليم، يثنّي على الله ويصلي على النبي ﷺ مثل الصلاة الإبراهيمية، ثم يدعو بما ورد في الحديث: ()
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '1rem', fontStyle: 'italic', mt: 1 }}>
          “لا إله إلا الله الحليم الكريم، سبحان الله رب العرش العظيم، الحمد لله رب العالمين، أسألك موجبات رحمتك… ولا حاجة هي لك رضاً إلا قضيتها يا أرحم الراحمين”
        </Typography>
      </Paper>

      {/* دعاء الحاجة */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#2e7d32' }}>
          📿 دعاء صلاة الحاجة
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          الدعاء يبدأ بالثناء والصلاة على النبي، ثم قول:<br />
          <em>لا إله إلا الله الحليم الكريم... ولا حاجة هي لك رضاً إلا قضيتها يا أرحم الراحمين</em>, ثم يُعرَّج على ذكر الحاجة بالدعاء الصادق. ()
        </Typography>
      </Paper>

      {/* عدد الركعات وآراؤ العلماء */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#ef6c00' }}>
          🔢 عدد الركعات وأقوال العلماء
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          - الجمهور (الشافعية، المالكية، الحنابلة): ركعتان. ()<br />
          - الحنفية: يرون أربع ركعات. ()<br />
          - الغزالي ورويات أخرى: أحيانًا اثنتا عشرة ركعة، لكن الحديث ضعيف. ()
        </Typography>
      </Paper>

      {/* أوقات الاستحباب */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#00838f' }}>
          🕰 أوقات صلاة الحاجة
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          يستحب أداؤها في الثلث الأخير من الليل (قبل الفجر) أو أي وقت غير مكروه للصلاة – أي لا بعد الفجر مباشرة، ولا عند العصر أو عند الزوال.()
        </Typography>
      </Paper>

      {/* ملاحظة ختامية */}
      <Typography variant="body2" align="center" sx={{ mt: 4, color: '#888' }}>
        ✨ صلاة الحاجة وسيلة للتقرب إلى الله والتضرع إليه، فاستعن بها بصدق وتوكّل، والله أعلم.
      </Typography>
    </Container>
  );
};

export default PrayerHajah;