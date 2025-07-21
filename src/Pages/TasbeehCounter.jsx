// import React, { useState } from 'react';
// import { Box, Typography, Button, IconButton, Paper, useTheme } from '@mui/material';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import RestartAltIcon from '@mui/icons-material/RestartAlt';

// export default function TasbeehCounter() {
//   const theme = useTheme();
//   const [count, setCount] = useState(0);
//   const [tasbeehText, setTasbeehText] = useState('سبحان الله');

//   const handleIncrement = () => {
//     setCount(prevCount => prevCount + 1);
//   };

//   const handleReset = () => {
//     setCount(0);
//   };

//   const tasbeehs = [
//     'سبحان الله',
//     'الحمد لله',
//     'الله أكبر',
//     'لا إله إلا الله',
//     'لا حول ولا قوة إلا بالله',
//     'أستغفر الله'
//   ];

//   const handleTasbeehChange = () => {
//     const currentIndex = tasbeehs.indexOf(tasbeehText);
//     const nextIndex = (currentIndex + 1) % tasbeehs.length;
//     setTasbeehText(tasbeehs[nextIndex]);
//     setCount(0); // إعادة تعيين العداد عند تغيير الذكر
//   };

//   return (
//     <Paper
//       elevation={3}
//       sx={{
//         p: 2,
//         mt: 4, // مسافة من الأعلى
//         mb: 4, // مسافة من الأسفل قبل شريط التنقل
//         mx: 'auto', // توسيط أفقي
//         maxWidth: 400, // تحديد أقصى عرض
//         width: '90%', // عرض مرن
//         textAlign: 'center',
//         bgcolor: 'background.paper',
//         borderRadius: '12px',
//         boxShadow: theme.shadows[3],
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         minHeight: 250, // ارتفاع أدنى للحفاظ على الشكل
//         border: `1px solid ${theme.palette.divider}` // حدود خفيفة
//       }}
//     >
//       <Typography variant="h5" sx={{ mb: 1, color: 'primary.main', fontWeight: 'bold' }}>
//         السبحة الإلكترونية
//       </Typography>

//       <Typography variant="h6" sx={{ mb: 2, color: 'text.secondary' }}>
//         {tasbeehText}
//       </Typography>

//       <Typography variant="h3" sx={{ mb: 2, fontWeight: 'bold', color: 'text.primary' }}>
//         {count}
//       </Typography>

//       <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, width: '100%' }}>
//         <Button
//           variant="contained"
//           onClick={handleIncrement}
//           sx={{
//             bgcolor: theme.palette.primary.main,
//             color: theme.palette.primary.contrastText,
//             '&:hover': {
//               bgcolor: theme.palette.primary.dark,
//             },
//             minWidth: 100,
//             py: 1.5,
//             borderRadius: '8px',
//           }}
//           startIcon={<AddCircleIcon />}
//         >
//           سبح
//         </Button>
//         <IconButton
//           onClick={handleReset}
//           sx={{
//             bgcolor: theme.palette.secondary.main,
//             color: theme.palette.secondary.contrastText,
//             '&:hover': {
//               bgcolor: theme.palette.secondary.dark,
//             },
//             borderRadius: '8px',
//             p: 1.5,
//           }}
//         >
//           <RestartAltIcon />
//         </IconButton>
//       </Box>

//       <Button
//         variant="outlined"
//         onClick={handleTasbeehChange}
//         sx={{
//           mt: 2,
//           color: 'text.secondary',
//           borderColor: theme.palette.divider,
//           '&:hover': {
//             borderColor: theme.palette.text.secondary,
//           },
//           textTransform: 'none',
//         }}
//       >
//         تغيير الذكر
//       </Button>
//     </Paper>
//   );
// }
import React, { useState } from 'react';
import { Box, Typography, Button, IconButton, Paper, useTheme } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

export default function TasbeehCounter({ sx }) { // استقبل الـ sx props
  const theme = useTheme();
  const [count, setCount] = useState(0);
  const [tasbeehText, setTasbeehText] = useState('سبحان الله');

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const tasbeehs = [
    'سبحان الله',
    'الحمد لله',
    'الله أكبر',
    'لا إله إلا الله',
    'لا حول ولا قوة إلا بالله',
    'أستغفر الله'
  ];

  const handleTasbeehChange = () => {
    const currentIndex = tasbeehs.indexOf(tasbeehText);
    const nextIndex = (currentIndex + 1) % tasbeehs.length;
    setTasbeehText(tasbeehs[nextIndex]);
    setCount(0);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        mt: 3,
        mx: 'auto',
        maxWidth: 400,
        width: '90%',
        textAlign: 'center',
        bgcolor: 'background.paper',
        borderRadius: '12px',
        boxShadow: theme.shadows[3],
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 200,
        border: `1px solid ${theme.palette.divider}`,
        ...sx // تطبيق الـ sx props المستلمة هنا، بما في ذلك mb: 0
      }}
    >
      <Typography variant="h5" sx={{ mb: 1, color: 'primary.main', fontWeight: 'bold' }}>
        السبحة الإلكترونية
      </Typography>

      <Typography variant="h6" sx={{ mb: 2, color: 'text.secondary' }}>
        {tasbeehText}
      </Typography>

      <Typography variant="h3" sx={{ mb: 2, fontWeight: 'bold', color: 'text.primary' }}>
        {count}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, width: '100%' }}>
        <Button
          variant="contained"
          onClick={handleIncrement}
          sx={{
            bgcolor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            '&:hover': {
              bgcolor: theme.palette.primary.dark,
            },
            minWidth: 100,
            py: 1.5,
            borderRadius: '8px',
          }}
          startIcon={<AddCircleIcon />}
        >
          سبح
        </Button>
        <IconButton
          onClick={handleReset}
          sx={{
            bgcolor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
            '&:hover': {
              bgcolor: theme.palette.secondary.dark,
            },
            borderRadius: '8px',
            p: 1.5,
          }}
        >
          <RestartAltIcon />
        </IconButton>
      </Box>

      <Button
        variant="outlined"
        onClick={handleTasbeehChange}
        sx={{
          mt: 2,
          color: 'text.secondary',
          borderColor: theme.palette.divider,
          '&:hover': {
            borderColor: theme.palette.text.secondary,
          },
          textTransform: 'none',
        }}
      >
        تغيير الذكر
      </Button>
    </Paper>
  );
}