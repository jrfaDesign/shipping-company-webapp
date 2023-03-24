import styled from 'styled-components'
import { minWidth, maxWidth } from 'styles/theme';

export const Container = styled.div`

    ${minWidth}{
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

   ${maxWidth}{
        height: 70vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

`


export const TitleText = styled.h2`
  color:#00DC82;
`