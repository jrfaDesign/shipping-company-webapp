import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        font-family: 'Poppins', sans-serif;
    }

    body {
        background:#FBFAFA;
    }

    h1{
        font-size:50px;
        color: #787778;
        font-weight: 700;
        margin:0;
    }

    h2{
        font-size:50px;
        color: #787778;
        font-weight: 700;
        margin:0;
    }

    h3{
        font-size:35px;
        color: #787778;
        font-weight: 700;
        margin:0;
    }

    h4{
        font-size:26px;
        color: #787778;
        font-weight: 500;
        margin:0;
    }

    h5{
        font-size:20px;
        color: #787778;
        font-weight: 500;
        margin:0;
    }

    p{
        font-size:16px;
        color: #787778;
        font-weight: 400;
        line-height: 24px;
        text-align: justify;
        
    } 

    /* width */
    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
  
    /* Track */
    ::-webkit-scrollbar-track {
      border-radius: 0px;
    }
  
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.scrollBar.main};
      border-radius: 0px;
    }
  
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.scrollBar.hover};
    }

    .css-wjdhjv{
        border:0px solid none;
    }

    .css-1arijsr-MuiSnackbar-root{
        top:120px !important;
    }

    .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root {
        padding-right: 70px !important;
        padding-top: 10px !important;
        padding-bottom: 10px !important;
    }


`;

export default GlobalStyles;
