import "./App.css";
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
// import Header from "./components/header/Header";
// import Hero from "./components/hero/Hero";
// import Main from "components/main/Main.jsx";
// import Footer from "./components/footer/Footer";
import Oportunity from "components/oportunity/Oportunity";
import Safety from "components/safety/Safety";
import ScrollToTop from "react-scroll-to-top";
// import Popup from "components/popup/Popup";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <Popup />
        <Header />
        <Hero />
        <Main /> */}
        <Safety />
        <Oportunity />
        {/* <Footer /> */}
        <ScrollToTop smooth />
      </div>
    </ThemeProvider>
  );
}

export default App;
