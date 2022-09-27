import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
};

body {
    margin: 0;
};

`;

export const ContentContainer = styled.div`
    width: 100%;
    margin: auto;
    overflow: hidden;
    
    @media screen and (min-width: 600px) {
        border-radius: 10px;
        box-shadow: 0 0 10px grey;
        width: calc(200px + 55%);
    }
`;