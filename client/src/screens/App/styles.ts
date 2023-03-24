import styled from "styled-components";
import { minWidth, maxWidth } from 'styles/theme';

export const AppContainer = styled.div`
    background: ${({ theme }) => theme.background};

    ${minWidth}{
        min-height:100vh;
    }
    ${maxWidth}{
        min-height:100vh;
    }
`

