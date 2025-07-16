

import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container'; 
import { Avatar } from '@mui/material';

export default function MenuAppBar() {
  const [anchorPrayerEl, setAnchorPrayerEl] = React.useState(null);
  const navigate = useNavigate();

  const handlePrayerMenu = (event) => {
    setAnchorPrayerEl(event.currentTarget);
  };

  const handlePrayerClose = () => {
    setAnchorPrayerEl(null);
  };

  const goToPrayer = (path) => {
    handlePrayerClose();
    navigate(path);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#57bfdfff', boxShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
        <Container maxWidth="lg">
          <Toolbar>

            <Tooltip title="السنن والنوافل" placement="bottom-start" arrow>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handlePrayerMenu}
              >
                <MenuIcon />
              </IconButton>
            </Tooltip>

            <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
              <Typography variant="h4" component="div">
                مواقيت الصلاة
              </Typography>
            </Box>

            <IconButton
              size="large"
              // aria-label="account of current user"
              onClick={() => navigate('/profile')}
              color="inherit"
            ><Avatar alt="Ashraf Halawa" src="/src/images/avatar.1.1.jpg"   sx={{ width: 40, height: 40 }}/>
              {/* <AccountCircle /> */}
            </IconButton>

            <Menu
              id="prayer-menu"
              anchorEl={anchorPrayerEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorPrayerEl)}
              onClose={handlePrayerClose}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 'bold',
                  px: 2,
                  pt: 1,
                  pb: 1,
                  color: '#1998d2ff',
                }}
              >
                السنن والنوافل
              </Typography>
              <MenuItem onClick={() => goToPrayer('/Duha')}>صلاة الضحي  </MenuItem>
              <MenuItem onClick={() => goToPrayer('/Witer')}>صلاة الوتر  </MenuItem>
              <MenuItem onClick={() => goToPrayer('/Tarahwee')}>صلاة التراويح  </MenuItem>
              <MenuItem onClick={() => goToPrayer('/Tahajjud')}>صلاة التهجد</MenuItem>
              <MenuItem onClick={() => goToPrayer('/Quiam')}>صلاة قيام الليل  </MenuItem>
              <MenuItem onClick={() => goToPrayer('/istikhaarah')}>صلاة الاستخارة</MenuItem>
              <MenuItem onClick={() => goToPrayer('/repentance')}>صلاة التوبة</MenuItem>
              <MenuItem onClick={() => goToPrayer('/need')}>صلاة الحاجة</MenuItem>
              <MenuItem onClick={() => goToPrayer('/Masjid')}>صلاة تحيه المسجد  </MenuItem>
              <MenuItem onClick={() => goToPrayer('/tasbeeh')}>صلاة الجنازه</MenuItem>
              <MenuItem onClick={() => goToPrayer('/eid')}>صلاة العيد</MenuItem>
              <MenuItem onClick={() => goToPrayer('/istisqa')}>صلاة الاستثقاء</MenuItem>
              <MenuItem onClick={() => goToPrayer('/Kusoff')}>صلاة الكسوف والخسوف </MenuItem>
            </Menu>

          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}