import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import "./App.css";
import ScrollToTop from "./components/utils/ScrollToTop";
import { ThemeProvider } from "styled-components";
import theme from "./Theme";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
