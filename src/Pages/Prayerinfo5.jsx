import React from 'react'
import { Container, Typography, Box, Divider, Paper } from '@mui/material';


export default function Prayerinfo5() {
  return (
  <Container maxWidth="md" style={{ marginTop: '30px', marginBottom: '50px', direction: 'rtl' }}>
      
      {/* العنوان */}
      <Typography variant="h3" align="center" fontWeight="bold" gutterBottom>
        صلاة العشاء
      </Typography>

      {/* صورة */}
      <Box textAlign="center" my={3}>
        <img
          src="https://img.youm7.com/large/202309181239373937.jpg"
          alt="صلاة العشاء"
          style={{ width: '100%', borderRadius: '10px', maxHeight: '400px', objectFit: 'cover' }}
        />
      </Box>

      <Divider sx={{ my: 4 }} />




      



      {/* عدد الركعات ووقتها */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#6a1b9a' }}>
          🕌 عدد الركعات ووقت الصلاة:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          صلاة العشاء تتكون من أربع ركعات فرض. يبدأ وقتها من مغيب الشفق الأحمر (انتهاء وقت صلاة المغرب)
          ويمتد إلى منتصف الليل. يجوز تأخيرها إلى ما قبل الفجر، لكن الأفضل أداؤها في وقتها.
        </Typography>
      </Paper>

      {/* فضل صلاة العشاء */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#2e7d32' }}>
          🌟 فضل صلاة العشاء:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          • من صلى العشاء في جماعة فكأنما قام نصف الليل<br />
          • ومن صلى العشاء والفجر في جماعة كان كمن قام الليل كله<br />
          • نور للمسلم في الدنيا والآخرة<br />
          • سبب في مغفرة الذنوب وتكفير السيئات
        </Typography>
      </Paper>


      {/* كيفية أداء صلاة العشاء */}
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4, color: '#6a1b9a' }}>
        🧎‍♂️ كيفية أداء صلاة العشاء:
      </Typography>

      <Box component="ul" sx={{ pl: 3, lineHeight: 2, fontSize: '1.1rem' }}>
        <li>النية القلبية مع الطهارة واستقبال القبلة.</li>
        <li>تكبيرة الإحرام ورفع اليدين وقول: <strong>"الله أكبر"</strong>.</li>
        <li>دعاء الاستفتاح، ثم الفاتحة وسورة بعدها في الركعتين الأوليين.</li>
        <li>الركوع مع قول: <strong>"سبحان ربي العظيم"</strong> ثلاثًا.</li>
        <li>الرفع من الركوع: <strong>"سمع الله لمن حمده - ربنا ولك الحمد"</strong>.</li>
        <li>السجود مرتين مع الجلوس بينهما والدعاء.</li>
        <li>الركعة الثانية مثل الأولى ثم التشهد الأول.</li>
        <li>الركعتان الثالثة والرابعة بقراءة الفاتحة فقط.</li>
        <li>التشهد الأخير والصلاة الإبراهيمية، ثم التسليم يمينًا ويسارًا.</li>
      </Box>
</Paper>
      {/* الأذكار بعد الصلاة */}
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4, color: '#2e7d32' }}>
        🧿 أذكار بعد صلاة العشاء:
      </Typography>

      <Box component="ul" sx={{ pl: 3, lineHeight: 2, fontSize: '1.1rem' }}>
        <li>الاستغفار ثلاثًا، ثم: <em>"اللهم أنت السلام، ومنك السلام..."</em>.</li>
        <li>ذكر: <em>"لا إله إلا الله وحده لا شريك له..."</em> بعد الصلاة.</li>
        <li>التسبيح 33 مرة، التحميد 33 مرة، التكبير 33 مرة.</li>
        <li>دعاء: <em>"اللهم أعني على ذكرك وشكرك وحسن عبادتك"</em>.</li>
        <li>قراءة المعوذتين: <strong>سورتي الفلق والناس</strong>.</li>
        <li>الصلاة على النبي، والدعاء بما شاء المسلم.</li>
        <li>أدعية عامة مثل: <em>"اللهم إني أعوذ بك من الكفر والفقر..."</em>.</li>
      </Box>
</Paper>
      {/* دعاء لقضاء الحوائج */}
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4, color: '#6d4c41' }}>
        🤲 دعاء بعد العشاء لقضاء الحوائج:
      </Typography>

      <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
        • يا مقيل العثرات، ياقاضي الحاجات اقضِ حاجتي وفرج كربتي، وارزقني من حيث لا أحتسب.<br />
        • اللهم يسر لي رزقًا حلالًا، وعجل لي به، واغنني عن السؤال.<br />
        • سبحان من قسم الأرزاق ولم ينس أحدًا، اجعل يدي عليا بالعطاء.<br />
• يا من إليه المستند وعليه المعتمد، أنعشني واجبرني واهدني لصالح الأعمال.
      </Typography></Paper>
            {/* ملاحظة ختامية */}
            <Typography variant="body2" align="center" sx={{ mt: 4, color: '#888' }}>
              ✨ الأذكار بعد الصلاة تقوي صلتك بالله، وتملأ قلبك طمأنينة، فاحرص عليها دائمًا.
            </Typography>
      </Container>
  )
}
