

import React from 'react';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Prayer from './Prayer';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';
import { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/dist/locale/ar';
import Navbar from '../Pages/Navbar';

moment.locale('ar');

export default function MainContent() {
  const [timings, setTiming] = useState({
    Fajr: '04:20',
    Dhuhr: '11:50',
    Asr: '15:18',
    Sunset: '18:03',
    Maghrib: '18:03',
    Isha: '19:33'
  });
  const [Days, setDays] = useState('');
  const [Day, setDay] = useState('');
  const [nextPrayerindex, setNextPrayerindex] = useState(0);
  const [remaingTime, setRemaingTime] = useState('');

  const [selescCity, setSelectCity] = useState({
    displayName: 'طنطا',
    apiNmae: 'Tanta'
  });

  const avalibalCity = [
    { displayName: 'طنطا', apiNmae: 'Tanta' },
    { displayName: 'القاهره', apiNmae: 'Cairo' },
    { displayName: 'الاسكندريه', apiNmae: 'Alexandria' },
    { displayName: 'المنصوره', apiNmae: 'Mansoura' },
    { displayName: 'الزقازيق', apiNmae: 'Zagazig' },
    { displayName: 'دمنهور', apiNmae: 'Damanhur' },
    { displayName: 'الغردقه', apiNmae: 'Hurghada' },
    { displayName: 'المنيا', apiNmae: 'Minya' },
    { displayName: 'اسيوط', apiNmae: 'Asyut' },
    { displayName: 'اسوان', apiNmae: 'Aswan' },
    { displayName: 'الجيزه', apiNmae: 'Giza' },
    { displayName: 'الاسماعليه', apiNmae: 'Ismailia' },
    { displayName: 'بورسعيد', apiNmae: 'Port Said' },
    { displayName: 'الفيوم', apiNmae: 'Fayoum' },
    { displayName: 'قنا', apiNmae: 'Qena' },
    { displayName: 'شرم الشيخ', apiNmae: 'Sharm El-Sheikh' },
    { displayName: 'بني سويف', apiNmae: 'Beni Suef' }
  ];

  const prayerArray = [
    { key: 'Fajr', displayName: 'الفجر' },
    { key: 'Dhuhr', displayName: 'الظهر' },
    { key: 'Asr', displayName: 'العصر' },
    { key: 'Maghrib', displayName: 'المغرب' },
    { key: 'Isha', displayName: 'العشاء' }
  ];

  const getTiming = async () => {
    try {
      const resData = await axios.get(
        `https://api.aladhan.com/v1/timingsByCity?city=${selescCity.apiNmae}&country=Egypt`
      );
      setTiming(resData.data.data.timings);
    } catch (err) {
      console.error('Failed to fetch timings:', err);
    }
  };

  useEffect(() => {
    getTiming();
  }, [selescCity]);

  const setupCountdownTimer = () => {
    const momentNow = moment();
    let Prayerindex = 0;

    if (momentNow.isAfter(moment(timings['Fajr'], 'HH:mm')) && momentNow.isBefore(moment(timings['Dhuhr'], 'HH:mm'))) {
      Prayerindex = 1;
    } else if (momentNow.isAfter(moment(timings['Dhuhr'], 'HH:mm')) && momentNow.isBefore(moment(timings['Asr'], 'HH:mm'))) {
      Prayerindex = 2;
    } else if (momentNow.isAfter(moment(timings['Asr'], 'HH:mm')) && momentNow.isBefore(moment(timings['Maghrib'], 'HH:mm'))) {
      Prayerindex = 3;
    } else if (momentNow.isAfter(moment(timings['Maghrib'], 'HH:mm')) && momentNow.isBefore(moment(timings['Isha'], 'HH:mm'))) {
      Prayerindex = 4;
    } else {
      Prayerindex = 0;
    }

    setNextPrayerindex(Prayerindex);

    const nextPrayerTime = timings[prayerArray[Prayerindex].key];
    const nextPrayerTimeMoment = moment(nextPrayerTime, 'HH:mm');
    let remaining = nextPrayerTimeMoment.diff(momentNow);

    if (remaining < 0) {
      const midnight = moment('23:59:59', 'HH:mm:ss').diff(momentNow);
      const fajrToMidnight = nextPrayerTimeMoment.diff(moment('00:00:00', 'HH:mm:ss'));
      remaining = midnight + fajrToMidnight;
    }

    const duration = moment.duration(remaining);
    setRemaingTime(`${duration.hours()} : ${duration.minutes()} : ${duration.seconds()}`);
  };

  useEffect(() => {
    const now = moment();
    setDays(now.format('Do  MMM  YYYY '));
    setDay(now.format('dddd'));

    const interval = setInterval(() => {
      setupCountdownTimer();
    }, 1000);

    return () => clearInterval(interval);
  }, [timings]);

  const handleCityChange = (event) => {
    const cityObject = avalibalCity.find(city => city.apiNmae === event.target.value);
    setSelectCity(cityObject);
  };

  return (
    <>
      <Navbar />
      <Grid container spacing={10} justifyContent="center">
        <Grid item xs={6}>
          <div style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '8px', textAlign: 'center', margin: '10px' }}>
            <h2 style={{ color: '#3c998dff' }}>{Day} : {Days}</h2>
            <h1 style={{ color: '#3c998dff' }}>{selescCity.displayName}</h1>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ backgroundColor: '#e0e0e0', padding: '10px', borderRadius: '8px', textAlign: 'center', margin: '10px' }}>
            <h2 style={{ color: '#3c998dff' }}>متبقي حتى صلاة {prayerArray[nextPrayerindex].displayName}</h2>
            <h1 style={{ direction: 'ltr', color: '#3c998dff' }}>{remaingTime}</h1>
          </div>
        </Grid>
      </Grid>

      <Divider />

      <Stack className='prayer-container' direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} style={{ display: 'flex', margin: '10px' }}>
        <Box><Prayer title="الفجر" time={timings?.Fajr} id="1" route="fajer" imagg="https://img.youm7.com/large/202309181239373937.jpg" /></Box>
        <Box><Prayer title="الظهر" time={timings?.Dhuhr} id="2" route="duher" imagg="https://hyatoky.com/mwfiles/thumbs/fit630x300/13090/1610015500/%D9%85%D8%AA%D9%89_%D9%8A%D9%83%D9%88%D9%86_%D9%88%D9%82%D8%AA_%D8%A7%D9%84%D8%B2%D9%88%D8%A7%D9%84.jpg" /></Box>
        <Box><Prayer title="العصر" time={timings?.Asr} id="3" route="asr" imagg="https://blog.ajsrp.com/wp-content/uploads/2025/05/%D8%A3%D9%87%D9%85%D9%8A%D8%A9-%D8%B5%D9%84%D8%A7%D8%A9-%D8%A7%D9%84%D8%B9%D8%B5%D8%B1-696x398.jpeg" /></Box>
        <Box><Prayer title="المغرب" time={timings?.Maghrib} route="maghrab" imagg="https://i.pinimg.com/736x/22/44/ee/2244ee86d36c8ddb3c3e668c7ff4d205.jpg" /></Box>
        <Box><Prayer title="العشاء" time={timings?.Isha} route="isha" imagg="https://blog.ajsrp.com/wp-content/uploads/2025/05/%D9%88%D9%82%D8%AA-%D8%AE%D8%B1%D9%88%D8%AC-%D8%B5%D9%84%D8%A7%D8%A9-%D8%A7%D9%84%D8%B9%D8%B4%D8%A7%D8%A1.jpeg" /></Box>
      </Stack>

      <Stack direction="row" justifyContent={'center'} style={{ margin: '30px' }}>
        <FormControl style={{ width: '30%' }}>
          <InputLabel id="demo-simple-select-label">المدينة</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selescCity.apiNmae}
            onChange={handleCityChange}
          >
            {avalibalCity.map((city) => (
              <MenuItem value={city.apiNmae} key={city.apiNmae}>{city.displayName}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>

      <Divider />
    </>
  );
}
