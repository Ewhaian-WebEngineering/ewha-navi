import { createGlobalStyle } from "styled-components";
import Pretendard from "../utils/font/Pretendard-Medium.woff2";
import PretendardBold from "../utils/font/Pretendard-Bold.woff2";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    src: url(${Pretendard}) format('woff2');
  }
  @font-face {
    font-family: 'Pretendard-Bold';
    src: url(${PretendardBold}) format('woff2');
  }
  * {
    --vh: 100%;
    margin: 0 auto;
    max-width: 390px;
    box-sizing: border-box;
    font-family: "Pretendard";
  }
`;

export default GlobalStyle;
