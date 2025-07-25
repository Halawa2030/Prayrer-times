


import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import moment from "moment";
import "moment/dist/locale/ar";
import Prayer from "./Prayer";
import Navbar from "../Pages/Navbar";
import FooterNavbar from "../Pages/FooterNavbar";
import { Typography, IconButton, Dialog, DialogTitle, DialogContent, useTheme } from "@mui/material";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import TasbeehCounter from "../Pages/TasbeehCounter";

moment.locale("ar");

export default function MainContent() {
  const theme = useTheme();

  const [timings, setTiming] = useState({
    Fajr: "04:20",
    Dhuhr: "11:50",
    Asr: "15:18",
    Sunset: "18:03",
    Maghrib: "18:03",
    Isha: "19:33",
  });
  const [Days, setDays] = useState("");
  const [Day, setDay] = useState("");
  const [nextPrayerindex, setNextPrayerindex] = useState(0);
  const [remaingTime, setRemaingTime] = useState("");

  const [selescCity, setSelectCity] = useState({
    displayName: "طنطا",
    apiNmae: "Tanta",
  });

  const [openCityDialog, setOpenCityDialog] = useState(false);

  const avalibalCity = [
    { displayName: "طنطا", apiNmae: "Tanta" },
    { displayName: "القاهره", apiNmae: "Cairo" },
    { displayName: "الاسكندريه", apiNmae: "Alexandria" },
    { displayName: "المنصوره", apiNmae: "Mansoura" },
    { displayName: "الزقازيق", apiNmae: "Zagazig" },
    { displayName: "دمنهور", apiNmae: "Damanhur" },
    { displayName: "الغردقه", apiNmae: "Hurghada" },
    { displayName: "المنيا", apiNmae: "Minya" },
    { displayName: "اسيوط", apiNmae: "Asyut" },
    { displayName: "اسوان", apiNmae: "Aswan" },
    { displayName: "الجيزه", apiNmae: "Giza" },
    { displayName: "الاسماعليه", apiNmae: "Ismailia" },
    { displayName: "بورسعيد", apiNmae: "Port Said" },
    { displayName: "الفيوم", apiNmae: "Fayoum" },
    { displayName: "قنا", apiNmae: "Qena" },
    { displayName: "شرم الشيخ", apiNmae: "Sharm El-Sheikh" },
    { displayName: "بني سويف", apiNmae: "Beni Suef" },
  ];

  const prayerArray = [
    { key: "Fajr", displayName: "الفجر" },
    { key: "Dhuhr", displayName: "الظهر" },
    { key: "Asr", displayName: "العصر" },
    { key: "Maghrib", displayName: "المغرب" },
    { key: "Isha", displayName: "العشاء" },
  ];

  const getTiming = async () => {
    try {
      const resData = await axios.get(
        `https://api.aladhan.com/v1/timingsByCity?city=${selescCity.apiNmae}&country=Egypt`
      );
      setTiming(resData.data.data.timings);
    } catch (err) {
      console.error("Failed to fetch timings:", err);
    }
  };

  useEffect(() => {
    getTiming();
  }, [selescCity]);

  const setupCountdownTimer = () => {
    const momentNow = moment();
    let Prayerindex = 0;
    const times = {
      Fajr: moment(timings["Fajr"], "HH:mm"),
      Dhuhr: moment(timings["Dhuhr"], "HH:mm"),
      Asr: moment(timings["Asr"], "HH:mm"),
      Maghrib: moment(timings["Maghrib"], "HH:mm"),
      Isha: moment(timings["Isha"], "HH:mm"),
    };

    if (momentNow.isAfter(times.Fajr) && momentNow.isBefore(times.Dhuhr)) {
      Prayerindex = 1;
    } else if (momentNow.isAfter(times.Dhuhr) && momentNow.isBefore(times.Asr)) {
      Prayerindex = 2;
    } else if (momentNow.isAfter(times.Asr) && momentNow.isBefore(times.Maghrib)) {
      Prayerindex = 3;
    } else if (momentNow.isAfter(times.Maghrib) && momentNow.isBefore(times.Isha)) {
      Prayerindex = 4;
    } else if (momentNow.isAfter(times.Isha)) {
      Prayerindex = 0;
    }

    setNextPrayerindex(Prayerindex);

    let nextPrayerTimeMoment = times[prayerArray[Prayerindex].key];

    if (Prayerindex === 0 && momentNow.isAfter(times.Isha)) {
      nextPrayerTimeMoment.add(1, "day");
    }

    let remaining = nextPrayerTimeMoment.diff(momentNow);

    const duration = moment.duration(remaining);
    setRemaingTime(
      `${String(duration.hours()).padStart(2, "0")} : ${String(duration.minutes()).padStart(2, "0")} : ${String(duration.seconds()).padStart(2, "0")}`
    );
  };

  useEffect(() => {
    const now = moment();
    setDays(now.format("Do MMM YYYY "));
    setDay(now.format("dddd"));

    const interval = setInterval(() => {
      setupCountdownTimer();
    }, 1000);

    return () => clearInterval(interval);
  }, [timings]);

  const handleCityChange = (event) => {
    const cityObject = avalibalCity.find(
      (city) => city.apiNmae === event.target.value
    );
    setSelectCity(cityObject);
    setOpenCityDialog(false);
  };

  const handleOpenCityDialog = () => {
    setOpenCityDialog(true);
  };

  const handleCloseCityDialog = () => {
    setOpenCityDialog(false);
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />

      <Box component="main" flexGrow={1}>
        <Grid container spacing={1} justifyContent="center" alignItems="stretch" sx={{ px: { xs: 1, sm: 2 }, mt: 2, width: '100%' }}>
          <Grid item xs={12} sm={6} md={6}>
            <Box
              sx={{
                bgcolor: 'background.paper',
                p: { xs: 1, sm: 1.5, md: 2 },
                borderRadius: 2,
                textAlign: "center",
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow: 3,
              }}
            >
              <Typography variant="h6" sx={{ color: 'primary.main', margin: '0' }}>
                {Day} : {Days}
              </Typography>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Typography variant="h4" sx={{ color: 'text.primary', margin: '0' }}>
                  {selescCity.displayName}
                </Typography>
                <IconButton onClick={handleOpenCityDialog} sx={{ ml: 1, color: 'text.primary' }}>
                  <LocationCityIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Box
              sx={{
                bgcolor: 'background.paper',
                p: { xs: 1, sm: 1.5, md: 2 },
                borderRadius: 2,
                textAlign: "center",
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow: 3,
              }}
            >
              <Typography variant="h6" sx={{ color: 'primary.main', margin: '0' }}>
                متبقي حتى صلاة {prayerArray[nextPrayerindex].displayName}
              </Typography>
              <Typography variant="h4" sx={{ direction: "ltr", color: 'text.primary', margin: '0' }}>
                {remaingTime}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 1.3, borderColor: 'text.secondary', width: '90%', maxWidth: 'md', alignSelf: 'center' }} />

        <Grid container spacing={2} justifyContent="center" sx={{ px: { xs: 1, sm: 2 }, width: '100%', mb: 3 }}>
          {prayerArray.map((prayer, index) => (
            <Grid item xs={6} sm={4} md={2.4} key={prayer.key}>
              <Prayer
                title={prayer.displayName}
                time={timings[prayer.key]}
                id={index + 1}
                route={prayer.key.toLowerCase()}
                imagg="https://img.youm7.com/large/202309181239373937.jpg" // أو استخدم الصور الأصلية لو عاوز
              />
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: -.75, borderColor: 'text.secondary', width: '90%', maxWidth: 'md', alignSelf: 'center' }} />

        <TasbeehCounter />
      </Box>

      <FooterNavbar />

      <Dialog open={openCityDialog} onClose={handleCloseCityDialog}>
        <DialogTitle sx={{ textAlign: 'right', color: 'primary.main', fontWeight: 'bold' }}>
          اختر المدينة
        </DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="city-select-label">المدينة</InputLabel>
            <Select
              labelId="city-select-label"
              id="city-select"
              value={selescCity.apiNmae}
              label="المدينة"
              onChange={handleCityChange}
            >
              {avalibalCity.map((city) => (
                <MenuItem key={city.apiNmae} value={city.apiNmae}>
                  {city.displayName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
