import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { Route, Routes } from "react-router-dom";
import Calculator from "./components/Calculator";
import About from "./components/About";
import History from "./components/History";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{maxWidth: '100%'}}>
        <Header />
        <Box sx={{ width: {xs: "95%"}, mx: "auto", mt: {xs: 1, md: 3}, display: "flex", justifyContent: 'center', gap: 2 }}>
          <Menu />
          <Routes>
            <Route path="/" element={<Calculator />} />
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
