import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle<{ img?: null }>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${(props) => (props.img !== null ? `url(${props.img})` : '#212121')};
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Noto Sans KR', sans-serif;
  }

  :root {
    --black: #000;
    --white: rgba(255, 255, 255, 0.8);
    --background-layout: rgba(221, 215, 215, 0.2);
    --background-button: rgba(255, 255, 255, 0.2);
    --background-button-hover:rgba(255, 255, 255, 0.3);
    --border-color: rgba(255, 255, 255, 0);
    --border-color-hover: rgba(255, 255, 255, 0.5);
    --font-family: 'Noto-sans KR', sans-serif;
  }

`;
