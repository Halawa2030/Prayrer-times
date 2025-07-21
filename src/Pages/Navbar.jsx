
// import React from "react";
// import { AppBar, Toolbar, Typography, IconButton, Avatar, Box } from "@mui/material";
// import { useThemeContext } from "./ThemeContext"; // تأكد من استيراد ThemeContext
// import { useTheme } from "@mui/material/styles"; // تأكد من استيراد useTheme
// import SearchIcon from "@mui/icons-material/Search";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
// import Brightness7Icon from "@mui/icons-material/Brightness7";
// import { useNavigate } from "react-router-dom";
// import avatar from "../images/avatar.jpg";

// export default function Navbar() {
//   const { mode, toggleColorMode } = useThemeContext();
//   const theme = useTheme(); // استخدم useTheme للوصول إلى ألوان الثيم
//   const navigate = useNavigate();

//   return (
//     <AppBar
//       position="static"
//       sx={{
//         width: "100%",
//         bgcolor: theme.palette.primary.main, // لون الخلفية للـ AppBar من الثيم
//         color: theme.palette.primary.contrastText, // لون النص والأيقونات من الثيم
//       }}
//     >
//       <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//         {/* هذا هو الجانب الأيمن (Avatar) */}
//         <IconButton
//           size="large"
//           onClick={() => navigate("/profile")}
//           color="inherit" // هذا سيستخدم لون الـ AppBar (primary.contrastText)
//         >
//           <Avatar
//             alt="Ashraf Halawa"
//             src={avatar}
//             sx={{ width: 40, height: 40 }}
//           />
//         </IconButton>

//         {/* هذا هو منتصف النافبار (عنوان التطبيق) */}
//         <Box sx={{ flexGrow: 1, textAlign: "center" }}>
//           <Typography variant="h4" component="div">
//             مواقيت الصلاة
//           </Typography>
//         </Box>

//         {/* هذا هو الجانب الأيسر (أيقونة تبديل الوضع والبحث) */}
//         <div>
//           {/* أيقونة تبديل الوضع - تم نقلها هنا بجانب البحث */}
//           <IconButton onClick={toggleColorMode} color="inherit"> {/* هذا سيستخدم لون الـ AppBar */}
//             {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
//           </IconButton>

//           {/* أيقونة البحث - ستبقى كما هي */}
//           <IconButton
//             color="inherit" // هذا سيستخدم لون الـ AppBar
//             onClick={() => window.open("https://islamqa.info/ar", "_blank")}
//           >
//             <SearchIcon />
//           </IconButton>
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// }
import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Avatar, Box } from "@mui/material";
import { useThemeContext } from "./ThemeContext";
import { useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4"; 
import Brightness7Icon from "@mui/icons-material/Brightness7"; 
import { useNavigate } from "react-router-dom";
import avatar from "../images/avatar.jpg";

export default function Navbar() {
  const { mode, toggleColorMode } = useThemeContext(); 
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{
        width: "100%",
        bgcolor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        boxShadow: 3,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: { xs: 1, sm: 2 } }}>
        <IconButton
          size="large"
          onClick={() => navigate("/profile")}
          color="inherit"
        >
          <Avatar
            alt="Ashraf Halawa"
            src={avatar}
            sx={{ width: 40, height: 40 }}
          />
        </IconButton>

        <Box sx={{ flexGrow: 1, textAlign: "center", mx: { xs: 1, sm: 2 } }}>
          <Typography variant="h4" component="div">
            مواقيت الصلاة
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>


          

          <IconButton
            color="inherit"
            onClick={() => navigate("/search")}
          >
            <SearchIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}