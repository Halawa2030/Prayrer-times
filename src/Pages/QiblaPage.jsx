import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, CircularProgress, Alert, IconButton, Tooltip, useTheme } from '@mui/material';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import qibla from 'qibla';
import Navbar from '../Pages/Navbar';
import FooterNavbar from '../Pages/FooterNavbar';

const QiblaPage = () => {
  const theme = useTheme();
  const [qiblaDirection, setQiblaDirection] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getQiblaDirection = () => {
    setLoading(true);
    setError(null);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const direction = qibla(latitude, longitude);
          setQiblaDirection(direction);
          setLoading(false);
        },
        (err) => {
          console.error("Geolocation error:", err);
          setLoading(false);
          switch (err.code) {
            case err.PERMISSION_DENIED:
              setError("تم رفض إذن الوصول إلى الموقع الجغرافي. يرجى تفعيله في إعدادات المتصفح.");
              break;
            case err.POSITION_UNAVAILABLE:
              setError("معلومات الموقع الجغرافي غير متوفرة.");
              break;
            case err.TIMEOUT:
              setError("انتهى وقت طلب الموقع الجغرافي.");
              break;
            default:
              setError("حدث خطأ غير معروف أثناء الحصول على الموقع الجغرافي.");
              break;
          }
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      setLoading(false);
      setError("متصفحك لا يدعم الموقع الجغرافي.");
    }
  };

  useEffect(() => {
    getQiblaDirection();
  }, []);

  return (
    <>
      <Navbar />
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 'calc(100vh - 120px)',
          p: 2,
          bgcolor: 'background.default',
          color: 'text.primary',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            textAlign: 'center',
            bgcolor: 'background.paper',
            borderRadius: '16px',
            maxWidth: '500px',
            width: '100%',
            boxShadow: theme.shadows[6],
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', mb: 3 }}>
            اتجاه القبلة
          </Typography>

          {loading ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <CircularProgress sx={{ color: 'primary.main' }} />
              <Typography variant="body1">جارٍ تحديد موقعك وحساب اتجاه القبلة...</Typography>
            </Box>
          ) : error ? (
            <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>
          ) : qiblaDirection !== null ? (
            <Box>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                اتجاه القبلة:
              </Typography>
              <Typography variant="h3" sx={{ color: 'secondary.main', mb: 3, direction: 'ltr' }}>
                 ${qiblaDirection.toFixed(2)}°
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Typography variant="body1">
                  الدرجة هي من الشمال الجغرافي (0°).
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  (الشرق 90°، الجنوب 180°، الغرب 270°)
                </Typography>
              </Box>
              <Box
                sx={{
                  width: '100px',
                  height: '100px',
                  bgcolor: 'primary.main',
                  borderRadius: '50%',
                  mx: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: `rotate(${qiblaDirection}deg)`,
                  transition: 'transform 0.5s ease-out',
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Kaaba_icon.svg/1200px-Kaaba_icon.svg.png"
                  alt="Kaaba Icon"
                  style={{ width: '60%', height: '60%', filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'none' }}
                />
              </Box>
            </Box>
          ) : (
            <Typography variant="body1">
              لا يمكن تحديد اتجاه القبلة.
            </Typography>
          )}

          <Tooltip title="تحديد الموقع وإعادة الحساب">
            <IconButton
              onClick={getQiblaDirection}
              sx={{ mt: 3, color: 'primary.main' }}
              disabled={loading}
            >
              <MyLocationIcon sx={{ fontSize: '2.5rem' }} />
            </IconButton>
          </Tooltip>
        </Paper>
      </Box>
      <FooterNavbar />
    </>
  );
};

export default QiblaPage;