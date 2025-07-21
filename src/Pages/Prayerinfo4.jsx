import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";

const PrayerMaghrib = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      {/* العنوان */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#d84315" }}
      >
        صلاة المغرب
      </Typography>

      {/* صورة */}
      <Box
        component="img"
        src="https://i.pinimg.com/736x/22/44/ee/2244ee86d36c8ddb3c3e668c7ff4d205.jpg"
        alt="صلاة المغرب"
        sx={{
          width: "100%",
          maxHeight: 400,
          objectFit: "cover",
          borderRadius: 3,
          my: 3,
        }}
      />

      {/* معلومات عامة عن الصلاة */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: "#ef6c00" }}>
          🕌 عدد الركعات ووقتها:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
          صلاة المغرب هي رابع الصلوات المفروضة، وأول صلاة ليلية. تتكون من{" "}
          <strong>ثلاث ركعات</strong>، تُؤدى جهرًا، ويتخللها تشهد أوسط بعد
          الركعة الثانية وتشهد أخير في نهاية الركعة الثالثة.
          <br />
          <br />
          يبدأ وقتها من غروب الشمس إلى غياب الشفق الأحمر. قال النبي ﷺ:{" "}
          <em>"وقت صلاة المغرب إذا غابت الشمس ما لم يسقط الشفق"</em>.
          <br />
          ويُستحب تعجيلها في أول وقتها:{" "}
          <em>"لا تزال أمتي بخير ما لم يؤخروا المغرب حتى تشتبك النجوم"</em>.
        </Typography>
      </Paper>

      {/* فضل الصلاة */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: "#2e7d32" }}>
          🌟 فضل صلاة المغرب:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 2 }}>
          • يُقال إنها الساعة التي تاب الله فيها على آدم عليه السلام.
          <br />
          • من صلّاها محتسبًا ثم سأل الله شيئًا، أُعطيَه.
          <br />• نور بين الصلاتين وراحة في القلب لمن حافظ عليها.
        </Typography>
      </Paper>

      {/* سبب التسمية */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: "#6d4c41" }}>
          🕯️ سبب التسمية:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
          سُمّيت "المغرب" لأن وقتها يبدأ مع <strong>غروب الشمس</strong>، أي عند
          مغيبها. وهذا يتوافق مع معناها اللغوي.
        </Typography>
      </Paper>

      {/* كيفية أداء الصلاة */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "bold", mt: 4, color: "#d84315" }}
        >
          🧎‍♂️ كيفية أداء صلاة المغرب:
        </Typography>

        <Box component="ul" sx={{ pl: 3, lineHeight: 2, fontSize: "1.1rem" }}>
          <li>
            الطهارة: الوضوء الشرعي مع التأكد من طهارة البدن والثياب والمكان.
          </li>
          <li>
            ستر العورة: الرجل ما بين السرة والركبة، والمرأة كل بدنها عدا الوجه
            والكفين.
          </li>
          <li>استقبال القبلة.</li>
          <li>النية القلبية.</li>
          <li>
            تكبيرة الإحرام: <em>"الله أكبر"</em>.
          </li>
          <li>الركعة الأولى: الفاتحة وسورة، ثم الركوع، ثم السجود مرتين.</li>
          <li>
            الركعة الثانية: مثل الأولى، ثم <strong>التشهد الأول</strong>.
          </li>
          <li>
            الركعة الثالثة: قراءة الفاتحة فقط، ثم الركوع والسجود، ثم{" "}
            <strong>التشهد الأخير والصلاة على النبي</strong>.
          </li>
          <li>التسليم يمينًا ويسارًا.</li>
        </Box>
      </Paper>
      {/* الأذكار بعد الصلاة */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "bold", mt: 4, color: "#2e7d32" }}
        >
          🧿 أذكار بعد صلاة المغرب:
        </Typography>

        <Box component="ul" sx={{ pl: 3, lineHeight: 2, fontSize: "1.1rem" }}>
          <li>
            <em>"أستغفر الله"</em> ثلاث مرات.
          </li>
          <li>
            <em>
              "اللهم أنت السلام، ومنك السلام، تباركت يا ذا الجلال والإكرام"
            </em>
            .
          </li>
          <li>
            قراءة <strong>آية الكرسي</strong>.
          </li>
          <li>
            قراءة <strong>المعوذات</strong> (الإخلاص، الفلق، الناس) ثلاث مرات.
          </li>
          <li>
            <em>"لا إله إلا الله وحده لا شريك له..."</em> عشر مرات.
          </li>
          <li>
            التسبيح: 33 مرة <em>سبحان الله</em>، 33 مرة <em>الحمد لله</em>، 34
            مرة <em>الله أكبر</em>.
          </li>
        </Box>
      </Paper>
      {/* ملاحظة ختامية */}
      <Typography variant="body2" align="center" sx={{ mt: 4, color: "#888" }}>
        ✨ الأذكار بعد الصلاة تقوي صلتك بالله، وتملأ قلبك طمأنينة، فاحرص عليها
        دائمًا.
      </Typography>
    </Container>
  );
};

export default PrayerMaghrib;
