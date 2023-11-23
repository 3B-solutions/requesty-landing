import "./App.css";
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Hero />
      </div>
    </ThemeProvider>
  );
}

export default App;
