import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
  ${reset};
  a {
    text-decoration:none;
    color:inherit;
  }
  * {
    box-sizing: border-box;
    color: white;
  }
  body {
    font-size:14px;
    background-color:rgba(20,20,20,1);
    padding-top: 60px;
  }
`;

export default globalStyles;