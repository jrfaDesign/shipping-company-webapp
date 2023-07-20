import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-left: auto;
`;

interface MenuIconContainerProps {
  filterMenuIsOpen: boolean;
  onClick: any;
}

export const MenuIconContainer = styled.div<MenuIconContainerProps>`
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  max-width: 25px;

  background-color: ${(props) =>
    props.filterMenuIsOpen ? props.theme.colors.lightBlue : props.theme.colors.white};
  padding: 10px;
  svg {
    fill: ${(props) =>
      props.filterMenuIsOpen ? props.theme.colors.white : props.theme.colors.lightBlue};
  }

  :hover {
    transition: all 0.2s ease;
    border: 1px solid ${({ theme }) => theme.colors.darkBlue};
    background-color: ${({ theme }) => theme.colors.lightBlue};

    svg {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;
