import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
        --primary: rgba(150, 0, 255, 1);
        --secondary: rgba(255, 180, 200, 1);
        --primary-black: rgba(30, 40, 50, 1);
        --primary-black-opac: rgba(30, 40, 50, 0.75);
        --primary-white: rgba(251, 253, 255, 1);     
        --primary-gray: rgba(60, 70, 80, 1);
        --secondary-gray: rgba(230, 240, 250, 1);
        --secondary-gray-opac: rgba(230, 240, 250, 0.5);
        --alert-primary: rgba(255, 0, 100, 1);
        --alert-secondary: rgba(222, 1, 86, 1);
      }

*, *::before, *::after {
    box-sizing: border-box;
    margin:0;
    padding:0;
}

body{
    font-family: monospace;
    background-color: var(--primary-white);
    color: var(--primary-black);
}`;

export default GlobalStyle;
