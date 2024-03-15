import './App.css';
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Theme from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <p style={{fontSize:"22px"}}>
      adlfjlasdlf
      </p>
    </ThemeProvider>
  );
}

export default App;
