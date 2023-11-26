import "./App.css";
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "components/main/Main.jsx";
import Footer from "./components/footer/Footer";
import Oportunity from "components/oportunity/Oportunity";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header id="weare" />
        <Hero />
        <Main />
        <Oportunity id='oportunity' />
        <Footer />
        <ScrollToTop smooth />
      </div>
    </ThemeProvider>
  );
}

export default App;
