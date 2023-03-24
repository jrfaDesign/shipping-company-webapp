import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        font-family: 'Montserrat', sans-serif;
    }

    body {
        background:#FBFAFA;
    }

    h1{
        font-size:50px;
        color: white;
        font-weight: 700;
        margin:0;
    }

    h2{
        font-size:50px;
        color: white;
        font-weight: 700;
        margin:0;
    }

    h3{
        font-size:35px;
        color: white;
        font-weight: 700;
        margin:0;
    }

    h4{
        font-size:26px;
        color: white;
        font-weight: 500;
        margin:0;
    }

    h5{
        font-size:20px;
        color: white;
        font-weight: 500;
        margin:0;
    }

    p{
        font-size:14px;
        color: white;
        font-weight: 400;
        line-height: 22px;
        
    }


`;

export default GlobalStyles;
