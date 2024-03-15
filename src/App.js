import "./App.css";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Theme from "./styles/Theme";
import { Route, Routes } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Intro from "./pages/Intro/Intro";
import Memo from "./pages/Memo";
import Header from './components/layout/Header';
import Footer from "./components/layout/Footer";



function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Header/>
      
      <Routes>
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/Intro" element={<Intro />} />
        <Route path="/Memo" element={<Memo />} />
      </Routes>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
