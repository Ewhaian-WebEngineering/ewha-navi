import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --vh: 100%;
    margin: 0 auto;
    max-width: 390px;
    box-sizing: border-box;
    font-family: 'Pretendard';
  }
`;

export default GlobalStyle;
