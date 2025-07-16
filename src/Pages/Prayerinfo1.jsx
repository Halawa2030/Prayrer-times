


import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const PrayerFajr = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      {/* العنوان */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#0d47a1' }}
      >
        صلاة الفجر
      </Typography>

      {/* صورة */}
      <Box
        component="img"
        src={"https://img.youm7.com/large/202309181239373937.jpg"}
        alt="صلاة الفجر"
        sx={{
          width: '100%',
          maxHeight: 400,
          objectFit: 'cover',
          borderRadius: 3,
          my: 3,
        }}
      />

      {/* وقت الصلاة */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#1565c0' }}>
          🕰 وقت صلاة الفجر:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          يبدأ وقت صلاة الفجر من انشقاق الفجر الصادق إلى طلوع الشمس. يُستحب التغليس؛ أي أداؤها في أول وقتها. <br />
          قال النبي ﷺ: <em>"مَن أَدْرَكَ مِنَ الصُّبْحِ رَكْعَةً قَبْلَ أَنْ تَطْلُعَ الشَّمْسُ، فقَدْ أَدْرَكَ الصُّبْحَ"</em>.
        </Typography>
      </Paper>

      {/* عدد الركعات والسنن */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#6a1b9a' }}>
          🕌 عدد ركعاتها وسننها:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          صلاة الفجر ركعتان فريضة، ويسبقها ركعتان سنة مؤكدة. <br />
          يُستحب في الفريضة قراءة سور طويلة، وفي السنة قراءة <strong>سورة الكافرون</strong> في الركعة الأولى، و<strong>سورة الإخلاص</strong> في الثانية.
        </Typography>
      </Paper>

      {/* فضل صلاة الفجر */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#2e7d32' }}>
          🌟 فضل صلاة الفجر:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          • البراءة من النفاق<br />
          • الدخول في ذمة الله<br />
          • تعدل قيام الليل<br />
          • سبب لدخول الجنة<br />
          • ركعتا السنة خير من الدنيا وما فيها
        </Typography>
      </Paper>

      {/* عجائب صلاة الفجر */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#00838f' }}>
          ✨ من عجائب صلاة الفجر:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          • نور تام يوم القيامة لمن يمشي في الظلام إلى المسجد<br />
          • شهادة الملائكة لصلاة الفجر<br />
          • فيها حفظ من الله طول اليوم<br />
          • من حافظ عليها دخل الجنة
        </Typography>
      </Paper>

      {/* كيفية أداء صلاة الفجر */}
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4, color: '#6a1b9a' }}>
        🧎‍♂️ كيفية أداء صلاة الفجر:
      </Typography>

      <Box component="ul" sx={{ pl: 3, lineHeight: 2, fontSize: '1.1rem' }}>
        <li>النية القلبية واستقبال القبلة مع الطهارة.</li>
        <li>تكبيرة الإحرام وقول: <strong>"الله أكبر"</strong>.</li>
        <li>وضع اليد اليمنى على اليسرى فوق الصدر.</li>
        <li>دعاء الاستفتاح ثم الفاتحة وسورة بعدها جهرًا.</li>
        <li>الركوع وقول: <strong>"سبحان ربي العظيم"</strong> ثلاثًا.</li>
        <li>الرفع من الركوع: <strong>"سمع الله لمن حمده - ربنا ولك الحمد"</strong>.</li>
        <li>السجود مرتين مع الجلوس والدعاء بين السجدتين.</li>
        <li>الركعة الثانية مثل الأولى تمامًا.</li>
        <li>التشهد والصلاة الإبراهيمية.</li>
        <li>الدعاء قبل السلام.</li>
        <li>التسليم يمينًا ويسارًا.</li>
        <li><strong>ملاحظة:</strong> الخشوع واستحضار القلب أساس الصلاة.</li></Box>

      {/* البشائر العشر */}
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4, color: '#ef6c00' }}>
        🌹 البشائر العشر لمن حافظ على الفجر:
      </Typography>

      <Box component="ul" sx={{ pl: 3, lineHeight: 2, fontSize: '1.1rem' }}>
        <li>نور تام يوم القيامة</li>
        <li>حفظ الله في النهار</li>
        <li>شهادة الملائكة</li>
        <li>أجر قيام الليل</li>
        <li>دخول الجنة</li>
        <li>راحة وطمأنينة</li>
        <li>تفريج الكروب</li>
        <li>بركة في الرزق</li>
        <li>رفعة في الدرجات</li>
        <li>النجاة من النار</li>
      </Box>

      {/* أذكار بعد صلاة الفجر */}
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4, color: '#2e7d32' }}>
        📿 أذكار بعد صلاة الفجر:
      </Typography>

      <Box component="ul" sx={{ pl: 3, lineHeight: 2, fontSize: '1.1rem' }}>
        <li>"لا إله إلا الله وحده لا شريك له..." (10 مرات)</li>
        <li>"اللهم أجرني من النار" (7 مرات)</li>
        <li>أذكار الصباح: "أصبحنا وأصبح الملك لله..."</li>
        <li>آية الكرسي، والإخلاص، والفلق، والناس (3 مرات)</li>
        <li>الاستغفار والدعاء بما شاء</li>
        <li>الصلاة على النبي ﷺ</li>
        <li>"سيد الاستغفار"</li>
      </Box>
            {/* ملاحظة ختامية */}
            <Typography variant="body2" align="center" sx={{ mt: 4, color: '#888' }}>
              ✨ الأذكار بعد الصلاة تقوي صلتك بالله، وتملأ قلبك طمأنينة، فاحرص عليها دائمًا.
            </Typography>
    </Container>
  );
};

export default PrayerFajr;