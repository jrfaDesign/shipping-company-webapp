import styled from 'styled-components'
import { minWidth, maxWidth } from 'styles/theme';

interface StyledMenuContainerProps {
  isOpen: boolean;
}

export const Container = styled.div`
  ${minWidth} {
    display: flex;
    align-items: center;
  }
`
export const MenuContainer = styled.div<StyledMenuContainerProps>`

  z-index: 1;
  transition: all 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
  
  ${minWidth} {
  }

  ${maxWidth} {
    width: 200px;
    height: 100%;
    padding: 10px;

    background: ${({ theme }) => theme.backgroundDarkerMobile};
    width: 70%;
    position: fixed;
    top: 0;
    left: 0;
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};

    padding: 20px;
  }
`

export const OpenButtonContainer = styled.div`
  margin-right: 20px;
  ${minWidth} {
    display: none;
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






