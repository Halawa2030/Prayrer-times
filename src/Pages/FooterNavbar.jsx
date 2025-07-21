// // src/components/FooterNavbar.js
// import React from "react";
// import { AppBar, Toolbar, IconButton, Box, Container } from "@mui/material"; 
// import { useNavigate } from "react-router-dom";

// import MenuBookIcon from '@mui/icons-material/MenuBook'; 
// import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic'; 
// import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'; 

// export default function FooterNavbar() {
//   const navigate = useNavigate();

//   return (
//   <Container>
//     <Box sx={{
//       display: 'flex',
//       justifyContent: 'center', // توسيط الـ AppBar داخل الـ Box
//       width: '100%', // تأكد من أن الـ Box يأخذ كامل العرض المتاح له
//       mt: 4, // مسافة علوية لتبعد عن المحتوى العلوي
//       px: { xs: 1, sm: 2 }, // إضافة padding أفقي ليتماشى مع باقي المحتوى
//     }}>
//       <AppBar position="static" color="primary" sx={{
//         // width: "100%", // لم نعد بحاجة لهذا هنا، لأن الـ Box الأب يحدد العرض
//         maxWidth: 'md', // تعيين أقصى عرض للـ AppBar ليكون مثل Container في App.js (md أو xl حسب تصميمك)
//         borderRadius: 2, // حواف دائرية
//         boxShadow: 6, // ظل خفيف
//       }}>
//         <Toolbar sx={{
//           display: "flex",
//           justifyContent: "space-around", // توزيع الأيقونات بالتساوي
//           minHeight: { xs: 56, sm: 64 }, // ارتفاع مناسب للشريط
//           // p: 0, // أزل أي padding افتراضي للـ Toolbar إذا كان يسبب مشكلة
//         }}>
//           {/* أيقونة الأذكار */}
//           <IconButton
//             color="inherit"
//             onClick={() => navigate("/azkar")}
//             title="الأذكار والأدعية"
//             sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
//           >
//             <LocalLibraryIcon sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }} />
//             <Box component="span" sx={{ fontSize: { xs: '0.6rem', sm: '0.75rem' }, mt: 0.5 }}>الأذكار</Box>
//           </IconButton>

//           {/* أيقونة السنن والنوافل */}
//           <IconButton
//             color="inherit"
//             onClick={() => navigate("/sunan")}
//             title="السنن والنوافل"
//             sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
//           >
//             <AutoAwesomeMosaicIcon sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }} />
//             <Box component="span" sx={{ fontSize: { xs: '0.6rem', sm: '0.75rem' }, mt: 0.5 }}>السنن</Box>
//           </IconButton>

//           {/* أيقونة المصحف */}
//           <IconButton
//             color="inherit"
//             onClick={() => navigate("/quran")}
//             title="المصحف الشريف"
//             sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
//           >
//             <MenuBookIcon sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }} />
//             <Box component="span" sx={{ fontSize: { xs: '0.6rem', sm: '0.75rem' }, mt: 0.5 }}>المصحف</Box>
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//     </Box>
//     </Container>
//   );
// }
import React from "react";
import { AppBar, Toolbar, IconButton, Box, useTheme, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import MenuBookIcon from '@mui/icons-material/MenuBook';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SearchIcon from '@mui/icons-material/Search';

export default function FooterNavbar() {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      mt: 'auto',
      mb: 0,
      px: { xs: 1, sm: 2 },
      pt: 2,
    }}>
      <AppBar position="static" sx={{
        bgcolor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        maxWidth: 'md',
        borderRadius: '16px 16px 0 0',
        boxShadow: 6,
      }}>
        <Toolbar sx={{
          display: "flex",
          justifyContent: "space-around",
          minHeight: { xs: 56, sm: 64 },
        }}>
          <IconButton
            onClick={() => navigate("/azkar")}
            title="الأذكار والأدعية"
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'inherit', p: { xs: 0.5, sm: 1 } }}
          >
            <LocalLibraryIcon sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }} />
            <Typography variant="caption" sx={{ fontSize: { xs: '0.6rem', sm: '0.75rem' }, mt: 0.5 }}>الأذكار</Typography>
          </IconButton>

          <IconButton
            onClick={() => navigate("/sunan")}
            title="السنن والنوافل"
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'inherit', p: { xs: 0.5, sm: 1 } }}
          >
            <AutoAwesomeMosaicIcon sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }} />
            <Typography variant="caption" sx={{ fontSize: { xs: '0.6rem', sm: '0.75rem' }, mt: 0.5 }}>السنن</Typography>
          </IconButton>


          <IconButton
            onClick={() => navigate("/quran")}
            title="المصحف الشريف"
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'inherit', p: { xs: 0.5, sm: 1 } }}
          >
            <MenuBookIcon sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }} />
            <Typography variant="caption" sx={{ fontSize: { xs: '0.6rem', sm: '0.75rem' }, mt: 0.5 }}>المصحف</Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}