import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

export default function PrayerIstisqa() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#1565c0' }}>
        صلاة الاستسقاء
      </Typography>

      {/* صورة */}
      <Box
        component="img"
        src="https://vip2099.wordpress.com/wp-content/uploads/2012/02/d8b5d984d8a7d8a9-d8a7d984d8a7d8b3d8aad8b3d982d8a7d8a1-d8b3d984d98ad985-d8b9d8a7d982d984d8afd8b9d8a7d8a1.jpg"
        alt="صلاة الاستسقاء"
        sx={{
          width: '100%',
          maxHeight: 400,
          objectFit: 'cover',
          borderRadius: 3,
          my: 3,
        }}
      />

      {/* تعريف الصلاة */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#2e7d32' }}>
          🌧 ما هي صلاة الاستسقاء؟
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          <strong>صلاة الاستسقاء</strong> هي صلاة نافلة تُؤدى عند انقطاع المطر وجفاف الأرض، لطلب السقيا من الله تعالى. وهي سنة مؤكدة عن النبي ﷺ عندما أجدبت الأرض وتأخر المطر. 
        </Typography>
      </Paper>

      {/* حكمها ووقتها */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#6a1b9a' }}>
          ⚖️ حكمها ووقتها:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          هي <strong>سنة مؤكدة</strong> عند الحاجة، وتُصلى في أي وقت غير أوقات النهي. الأفضل أن تُصلى ضُحى، بعد طلوع الشمس وارتفاعها قيد رمح، وهو نفس وقت صلاة العيد.
        </Typography>
      </Paper>

      {/* كيفية أداء الصلاة */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#00838f' }}>
          🧎‍♂️ كيفية أداء صلاة الاستسقاء:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          • ركعتان تُصليان جماعة في المصلى (أو في المسجد عند الحاجة).<br />
          • تُشبه صلاة العيد في الأداء.<br />
          • في الركعة الأولى: 7 تكبيرات بعد تكبيرة الإحرام.<br />
          • في الركعة الثانية: 5 تكبيرات بعد تكبيرة القيام.<br />
          • يُقرأ في الأولى سورة الفاتحة وسورة <strong>الأعلى</strong>، وفي الثانية <strong>الغاشية</strong> أو ما تيسر.<br />
          • ثم بعد الصلاة، يخطب الإمام خطبة واحدة أو خطبتين، يدعو الناس للتوبة والاستغفار.<br />
          • يُكثر من <strong>الاستغفار والدعاء بنزول المطر</strong>، ورفع اليدين في الدعاء سنة.
        </Typography>
      </Paper>

      {/* سنن وآداب */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#ef6c00' }}>
          🕊 سنن وآداب صلاة الاستسقاء:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          • الخروج بتذلل وخشوع.<br />
          • ترك الزينة والتجمل.<br />
          • التوبة من الذنوب، ورد المظالم، وكثرة الصدقة.<br />
          • إخراج النساء والأطفال والبهائم، كما كان يفعل النبي ﷺ.<br />
          • الدعاء بصدق ويقين، ورفع اليدين.
        </Typography>
      </Paper>

      {/* أحاديث عن الاستسقاء */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#283593' }}>
          📜 من أحاديث صلاة الاستسقاء:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          عن عبد الله بن زيد رضي الله عنه قال:  
          <em> "خرج النبي ﷺ إلى المصلى فاستسقى، فاستقبل القبلة وقلب رداءه، وصلى ركعتين" </em>  
          (رواه البخاري ومسلم).
        </Typography>
      </Paper>

      {/* دعاء الاستسقاء */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#2e7d32' }}>
          📿 من أدعية الاستسقاء:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          <em>
            "اللهم اسقِ عبادك وبهائمك، وانشر رحمتك، وأحيي بلدك الميت"
          </em> <br />
          "اللهم أغثنا، اللهم أغثنا، اللهم أغثنا"
        </Typography>
      </Paper>

      {/* المصادر */}
<Typography variant="body2" align="center" sx={{ mt: 4, color: '#888' }}>
        📝 المصادر: صحيح البخاري 1013، مسلم 894، موقع الإسلام سؤال وجواب، الموسوعة الفقهية الكويتية.
      </Typography>
    </Container>
  );
}