import "./App.css";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Theme from "./styles/Theme";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import Layout from "./pages/layout/Layout";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </ThemeProvider>
  );
}

export default App;
