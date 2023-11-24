import "./App.css";
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Hero />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
