

// import * as React from 'react';
// import { useNavigate } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import Tooltip from '@mui/material/Tooltip';
// import Container from '@mui/material/Container'; 
// import { Avatar } from '@mui/material';
// import profialimage from '../images/avatar.1.1.jpg' // صورتك الشخصية


// export default function MenuAppBar() {
//   const [anchorPrayerEl, setAnchorPrayerEl] = React.useState(null);
//   const navigate = useNavigate();

//   const handlePrayerMenu = (event) => {
//     setAnchorPrayerEl(event.currentTarget);
//   };

//   const handlePrayerClose = () => {
//     setAnchorPrayerEl(null);
//   };

//   const goToPrayer = (path) => {
//     handlePrayerClose();
//     navigate(path);
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" sx={{ backgroundColor: '#57bfdfff', boxShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
//         <Container maxWidth="lg">
//           <Toolbar>

//             <Tooltip title="السنن والنوافل" placement="bottom-start" arrow>
//               <IconButton
//                 size="large"
//                 edge="start"
//                 color="inherit"
//                 aria-label="menu"
//                 onClick={handlePrayerMenu}
//               >
//                 <MenuIcon />
//               </IconButton>
//             </Tooltip>

            

//             <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
//               <Typography variant="h4" component="div">
//                 مواقيت الصلاة
//               </Typography>
//             </Box>

//             <IconButton
//               size="large"
//               // aria-label="account of current user"
//               onClick={() => navigate('/profile')}
//               color="inherit"
//             ><Avatar alt="Ashraf Halawa" src={profialimage}   sx={{ width: 40, height: 40 }}/>
//               {/* <AccountCircle /> */}
//             </IconButton>

//             <Menu
//               id="prayer-menu"
//               anchorEl={anchorPrayerEl}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorPrayerEl)}
//               onClose={handlePrayerClose}
//             >
//               <Typography
//                 variant="subtitle1"
//                 sx={{
//                   fontWeight: 'bold',
//                   px: 2,
//                   pt: 1,
//                   pb: 1,
//                   color: '#1998d2ff',
//                 }}
//               >
//                 السنن والنوافل
//               </Typography>
//               <MenuItem onClick={() => goToPrayer('/Duha')}>صلاة الضحي  </MenuItem>
//               <MenuItem onClick={() => goToPrayer('/Witer')}>صلاة الوتر  </MenuItem>
//               <MenuItem onClick={() => goToPrayer('/Tarahwee')}>صلاة التراويح  </MenuItem>
//               <MenuItem onClick={() => goToPrayer('/Tahajjud')}>صلاة التهجد</MenuItem>
//               <MenuItem onClick={() => goToPrayer('/Quiam')}>صلاة قيام الليل  </MenuItem>
//               <MenuItem onClick={() => goToPrayer('/istikhaarah')}>صلاة الاستخارة</MenuItem>
//               <MenuItem onClick={() => goToPrayer('/repentance')}>صلاة التوبة</MenuItem>
//               <MenuItem onClick={() => goToPrayer('/need')}>صلاة الحاجة</MenuItem>
//               <MenuItem onClick={() => goToPrayer('/Masjid')}>صلاة تحيه المسجد  </MenuItem>
//               <MenuItem onClick={() => goToPrayer('/tasbeeh')}>صلاة الجنازه</MenuItem>
//               <MenuItem onClick={() => goToPrayer('/eid')}>صلاة العيد</MenuItem>
//               <MenuItem onClick={() => goToPrayer('/istisqa')}>صلاة الاستثقاء</MenuItem>
//               <MenuItem onClick={() => goToPrayer('/Kusoff')}>صلاة الكسوف والخسوف </MenuItem>
//             </Menu>

//           </Toolbar>
//         </Container>
//       </AppBar>
//     </Box>
//   );
// }







///////////////////////////////////////////////////////////////////////////////
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuBookIcon from '@mui/icons-material/MenuBook'; // أيقونة الأذكار
import MosqueIcon from '@mui/icons-material/Mosque';     // أيقونة الصلاة
import { Avatar, Container, MenuItem, Menu, Tooltip } from '@mui/material';
import profialimage from '../images/avatar.jpg';

export default function MenuAppBar() {
  const [anchorPrayerEl, setAnchorPrayerEl] = React.useState(null);
  const [anchorAzkarEl, setAnchorAzkarEl] = React.useState(null);
  const navigate = useNavigate();

  const handlePrayerMenu = (event) => {
    setAnchorPrayerEl(event.currentTarget);
  };

  const handleAzkarMenu = (event) => {
    setAnchorAzkarEl(event.currentTarget);
  };

  const handlePrayerClose = () => {
    setAnchorPrayerEl(null);
  };

  const handleAzkarClose = () => {
    setAnchorAzkarEl(null);
  };

  const goToPrayer = (path) => {
    handlePrayerClose();
    navigate(path);
  };

  const goToAzkar = (path) => {
    handleAzkarClose();
    navigate(path);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#57bfdfff', boxShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
        <Container maxWidth="lg">
          <Toolbar>

            {/* زر السنن والنوافل */}
            <Tooltip title="السنن والنوافل" placement="bottom-start" arrow>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="prayers"
                onClick={handlePrayerMenu}
              >
                <MosqueIcon />
              </IconButton>
            </Tooltip>

            {/* زر الأذكار والأدعية */}
            <Tooltip title="الأذكار والأدعية" placement="bottom-start" arrow>
              <IconButton size="large" color="inherit" onClick={handleAzkarMenu}>
                <MenuBookIcon />
              </IconButton>
            </Tooltip>

            {/* عنوان الموقع */}
            <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
              <Typography variant="h4" component="div">
                مواقيت الصلاة
              </Typography>
            </Box>

            {/* زر الملف الشخصي */}
            <IconButton size="large" onClick={() => navigate('/profile')} color="inherit">
              <Avatar alt="Ashraf Halawa" src={profialimage} sx={{ width: 40, height: 40 }} />
            </IconButton>

            {/* قائمة السنن والنوافل */}
            <Menu
              id="prayer-menu"
              anchorEl={anchorPrayerEl}
              open={Boolean(anchorPrayerEl)}
              onClose={handlePrayerClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', px: 2, pt: 1, pb: 1, color: '#1998d2ff' }}>
                السنن والنوافل
              </Typography>
              <MenuItem onClick={() => goToPrayer('/Duha')}>صلاة الضحى</MenuItem>
              <MenuItem onClick={() => goToPrayer('/Witer')}>صلاة الوتر</MenuItem>
              <MenuItem onClick={() => goToPrayer('/Tarahwee')}>صلاة التراويح</MenuItem>
              <MenuItem onClick={() => goToPrayer('/Tahajjud')}>صلاة التهجد</MenuItem>
              <MenuItem onClick={() => goToPrayer('/Quiam')}>قيام الليل</MenuItem>
              <MenuItem onClick={() => goToPrayer('/istikhaarah')}>الاستخارة</MenuItem>
              <MenuItem onClick={() => goToPrayer('/repentance')}>التوبة</MenuItem>
              <MenuItem onClick={() => goToPrayer('/need')}>الحاجة</MenuItem>
              <MenuItem onClick={() => goToPrayer('/Masjid')}>تحية المسجد</MenuItem>
              <MenuItem onClick={() => goToPrayer('/tasbeeh')}>الجنازة</MenuItem>
              <MenuItem onClick={() => goToPrayer('/eid')}>العيد</MenuItem>
              <MenuItem onClick={() => goToPrayer('/istisqa')}>الاستسقاء</MenuItem>
              <MenuItem onClick={() => goToPrayer('/Kusoff')}>الكسوف والخسوف</MenuItem>
            </Menu>

            {/* قائمة الأذكار والأدعية */}
            <Menu
              id="azkar-menu"
              anchorEl={anchorAzkarEl}
              open={Boolean(anchorAzkarEl)}
              onClose={handleAzkarClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', px: 2, pt: 1, pb: 1, color: '#1998d2ff' }}>
                الأذكار والأدعية
              </Typography>
              <MenuItem onClick={() => goToAzkar('/azkar/morning')}>أذكار الصباح</MenuItem>
              <MenuItem onClick={() => goToAzkar('/azkar/evening')}>أذكار المساء</MenuItem>
              <MenuItem onClick={() => goToAzkar('/azkar/sleep')}>أذكار النوم</MenuItem>
              <MenuItem onClick={() => goToAzkar('/azkar/wake-up')}>أذكار الاستيقاظ</MenuItem>
              <MenuItem onClick={() => goToAzkar('/azkar/after-prayer')}>أذكار بعد الصلاة</MenuItem>
              <MenuItem onClick={() => goToAzkar('/azkar/general')}>الأدعية اليومية</MenuItem>
            </Menu>

          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
