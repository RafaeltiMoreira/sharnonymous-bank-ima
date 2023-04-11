<<<<<<< HEAD
import './global.module.css';
import { Router } from './Router';

export function App() {
  return (
      <Router />
=======
import "./global.module.css";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/theme/light";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
>>>>>>> 80470215f25d557f58a33486ab1f7393c720a440
  );
}
