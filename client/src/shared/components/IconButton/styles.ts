import styled from "styled-components";

export const IconContainer = styled.div`
  display: flex;
  padding: 5px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};
  border-radius: 8px;
  svg {
    fill: ${({ theme }) => theme.colors.lightBlue};
  }

  :last-child {
    margin-right: 0px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.lightBlue};
    svg {
      fill: white;
    }
  }
`;
