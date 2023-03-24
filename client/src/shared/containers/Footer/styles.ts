import styled from 'styled-components'
import { minWidth, maxWidth } from 'styles/theme';



export const Wrapper = styled.footer`
    background: ${({ theme }) => theme.cardBackgroundColor};
    box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.25);
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    text-align: center;  

    ${minWidth} {
      height: 10vh;
    }
    ${maxWidth} {
      padding: 15px 0px;
    }
`

export const Nav = styled.nav`
  a {
    display: block;
    padding: 10px;
    color: white;
    text-decoration: none;
  }

  ${minWidth} {
    display: flex;
    flex-direction: row;
  }
`


export const FoterContainer = styled.div`
  padding: 0px 50px;
  display: flex;
  align-items:center;

  ${minWidth} {
    justify-content: space-between;
    height: 100%;
  }

  ${maxWidth} {
    padding: 0px 50px;
    justify-content: center;
  }
  


`

export const FooterText = styled.h4`
  color:#00DC82;
`