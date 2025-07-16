import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const PrayerEid = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      {/* العنوان */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#0d47a1' }}
      >
        صلاة العيد
      </Typography>

      {/* صورة */}
      <Box
        component="img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROpwr2IK0XZ_gvivwtPgw6trrriyqo-rWHBQ&s"
        alt="صلاة العيد"
        sx={{
          width: '100%',
          maxHeight: 400,
          objectFit: 'cover',
          borderRadius: 3,
          my: 3,
        }}
      />

      {/* التعريف والأحكام */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          <strong>صلاة العيد</strong> هي صلاة جهرية تؤدى ركعتين في يومي عيد الأضحى والفطر بعد ارتفاع الشمس بمقدار رمح، وتنتهي وقتها قبل الزوال 
        </Typography>
      </Paper>

      {/* كيفية الأداء */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#6a1b9a' }}>
          🧎‍♂️ كيف تؤدى صلاة العيد؟
        </Typography>
        <Box component="ol" sx={{ pl: 3, fontSize: '1.1rem', lineHeight: 2 }}>
          <li>النية والتكبير الإحرام.</li>
          <li>في الركعة الأولى: بعد تكبيرة الإحرام، يكبر الإمام 6 أو 7 تكبيرات رفع اليدين، ثم يقرأ الفاتحة وسورة مثل الأعلى أو قاف ().</li>
          <li>الركوع والسجود كما في الصلاة العادية.</li>
          <li>في الركعة الثانية: يكبر الإمام عند القيام 5 تكبيرات، ثم يقرأ الفاتحة وسورة مثل الغاشية أو القمر ().</li>
        </Box>
      </Paper>

      {/* الخطبة */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#283593' }}>
          🕌 الخُطبة بعد الصلاة
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          بعد الانتهاء من الصلاة، يلقي الإمام خطبتين، الأولى بعد الصلاة مباشرة، والثانية في بعض المذاهب كالحنابلة والمالكية ().
        </Typography>
      </Paper>

      {/* السنن والاستحبابات */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#2e7d32' }}>
          🌟 السنن المرافقة لصلاة العيد
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          • الغُسل والتطيب ولبس أجمل الثياب ().<br/>
          • التكبير جهرًا في طريق المسجد والعودة ().<br/>
          • يُستحب إقامة الصلاة في مصلى العيد خارج المسجد إن أمكن ().
        </Typography>
      </Paper>

      {/* المذاهب المختلفة */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#ef6c00' }}>
          🔢 اختلاف عدد التكبيرات حسب المذهب
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2 }}>
          • المذاهب المالكية والشافعية والحنابلة: 7 تكبيرات في الأولى، 5 في الثانية ().<br/>
          • الحنفية: 3 تكبيرات إضافية فقط ().
        </Typography>
      </Paper>

      {/* ختام */}
      <Typography variant="body2" align="center" sx={{ mt: 4, color: '#888' }}>
        ✨ بعد صلاة العيد والخطبة، يستحب التهاني وذِكر الله، وتعمُّ البركة والتراحم بين المسلمين. كل عام وأنتم بخير عيدكم مبارك 😊
      </Typography>
    </Container>
  );
};

export default PrayerEid;