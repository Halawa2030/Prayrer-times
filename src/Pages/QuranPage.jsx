
import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Divider,
  Paper,
  Container,
  CircularProgress,
  Alert,
  Card,
  CardContent,
  Grid,
  Zoom,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel
} from '@mui/material';
import Navbar from '../Pages/Navbar';
import FooterNavbar from '../Pages/FooterNavbar';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PersonIcon from '@mui/icons-material/Person';

const reciters = [
  { id: 'ar.alafasy', name: 'مشاري العفاسي' },
  { id: 'ar.husary', name: 'محمود الحصري' },
  { id: 'ar.minshawi', name: 'محمد المنشاوي' },
  { id: 'ar.mahermuaiqly', name: 'ماهر المعيقلي' }
];

export default function QuranPage() {
  const theme = useTheme();
  const [surahs, setSurahs] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [verses, setVerses] = useState([]);
  const [loadingSurahs, setLoadingSurahs] = useState(true);
  const [loadingVerses, setLoadingVerses] = useState(false);
  const [error, setError] = useState(null);
  const [playingAudio, setPlayingAudio] = useState(null);
  const [currentAyahPlaying, setCurrentAyahPlaying] = useState(null);
  const [reciter, setReciter] = useState('ar.alafasy');
  const [isPlayingSurah, setIsPlayingSurah] = useState(false);

  useEffect(() => {
    stopAudio();
    const fetchSurahs = async () => {
      try {
        const response = await axios.get('https://api.alquran.cloud/v1/surah');
        setSurahs(response.data.data);
        setLoadingSurahs(false);
      } catch (err) {
        setError('حدث خطأ أثناء تحميل السور');
        setLoadingSurahs(false);
      }
    };
    fetchSurahs();
  }, []);

  useEffect(() => {
    const fetchVerses = async () => {
      if (!selectedSurah) return;
      stopAudio();
      setLoadingVerses(true);
      try {
        const response = await axios.get(
          `https://api.alquran.cloud/v1/surah/${selectedSurah.number}/${reciter}`
        );
        setVerses(response.data.data.ayahs);
        setLoadingVerses(false);
      } catch (err) {
        setError('حدث خطأ أثناء تحميل الآيات');
        setLoadingVerses(false);
      }
    };
    fetchVerses();
  }, [selectedSurah?.number, reciter]);

  const stopAudio = () => {
    if (playingAudio) {
      playingAudio.pause();
      setPlayingAudio(null);
    }
    setCurrentAyahPlaying(null);
    setIsPlayingSurah(false);
  };

  const playAudio = (url, index) => {
    stopAudio();
    const audio = new Audio(url);
    audio.play().then(() => {
      setPlayingAudio(audio);
      setCurrentAyahPlaying(index);
    }).catch((err) => {
      console.error('فشل تشغيل الصوت:', err);
    });
  };

  const playSurah = async () => {
    if (!verses.length) return;
    stopAudio();
    setIsPlayingSurah(true);
    let current = 0;

    const playNext = () => {
      if (current >= verses.length) {
        setPlayingAudio(null);
        setCurrentAyahPlaying(null);
        setIsPlayingSurah(false);
        return;
      }

      const audio = new Audio(verses[current].audio);
      setPlayingAudio(audio);
      setCurrentAyahPlaying(current);

      audio.onended = () => {
        current++;
        playNext();
      };

      audio.onerror = () => {
        current++;
        playNext();
      };

      audio.play().catch(() => {
        current++;
        playNext();
      });
    };

    playNext();
  };

  return (
    <Box>
      <Navbar />
      <Container maxWidth="md" style={{ marginTop: 30, direction: 'rtl' }}>
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel id="reciter-select-label">
            <Box display="flex" alignItems="center">
              <PersonIcon sx={{ mr: 1 }} />
              اختر القارئ
            </Box>
          </InputLabel>
          <Select
            labelId="reciter-select-label"
            id="reciter-select"
            value={reciter}
            label="اختر القارئ"
            onChange={(e) => {
              stopAudio();
              setReciter(e.target.value);
            }}
            sx={{
              backgroundColor: theme.palette.mode === 'dark' ? '#1c1c1c' : '#fff',
              borderRadius: 2,
              fontWeight: 'bold'
            }}
          >
            {reciters.map((reciter) => (
              <MenuItem key={reciter.id} value={reciter.id}>
                {reciter.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {loadingSurahs && <CircularProgress />}
        {error && <Alert severity="error">{error}</Alert>}

        {!selectedSurah && (
          <Grid container spacing={2}>
            {surahs.map((surah, idx) => (
              <Grid item xs={12} key={surah.number}>
                <Zoom in={true}>
                  <Card
                    sx={{ cursor: 'pointer' }}
                    onClick={() => {
                      stopAudio();
                      setSelectedSurah(surah);
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" align="center">
                        {`${idx + 1}. ${surah.name}`}
                      </Typography>
                    </CardContent>
                  </Card>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        )}

        {selectedSurah && (
          <Box>
            <Button
              variant="contained"
              startIcon={<ArrowBackIcon />}
              onClick={() => {
                stopAudio();
                setSelectedSurah(null);
              }}
              sx={{ mb: 2 }}
            >
              الرجوع للسور
            </Button>

            <Box textAlign="center" mb={2}>
              <Button
                variant="outlined"
                color={isPlayingSurah ? 'error' : 'primary'}
                startIcon={isPlayingSurah ? <PauseIcon /> : <VolumeUpIcon />}
                onClick={() => {
                  if (isPlayingSurah) {
                    stopAudio();
                  } else {
                    playSurah();
                  }
                }}
              >
                {isPlayingSurah ? 'إيقاف السورة' : 'تشغيل السورة كاملة'}
              </Button>
            </Box>

            <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
              <Typography variant="h4" align="center" gutterBottom>
                {selectedSurah.name}
              </Typography>
            </Paper>

            <Divider sx={{ my: 2 }} />

            {loadingVerses ? (
              <CircularProgress />
            ) : (
              verses.map((ayah, index) => (
                <Paper
                  key={ayah.number}
                  sx={{
                    p: 2,
                    mb: 2,
                    backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#f9f9f9'
                  }}
                >
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                      {ayah.text}
                    </Typography>
                    <IconButton
                      onClick={() => {
                        if (currentAyahPlaying === index) {
                          stopAudio();
                        } else {
                          playAudio(ayah.audio, index);
                        }
                      }}
                    >
                      {currentAyahPlaying === index ? <PauseIcon /> : <PlayArrowIcon />}
                    </IconButton>
                  </Box>
                </Paper>
              ))
            )}
          </Box>
        )}
      </Container>
      <FooterNavbar />
    </Box>
  );
}
