import {createGlobalStyle} from 'styled-components';
import backimage from './assets/img-03.jpg'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
       
    }

    body {
        overflow-x: hidden;
        display: flex;
        justify-content: center;
        width: 100%;
        background-image: url(${backimage});
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }
    
    html
     {
        font-size: 62.5%;
    }

    li {
        list-style: none;
    }

    @media (max-width: 768px) {
        html {
            font-size: 50%;
        }
    }
`;

export default GlobalStyle;