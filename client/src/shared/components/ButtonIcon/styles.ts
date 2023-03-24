import styled from "styled-components";

interface ButtonProps {
  margin?: string;
}

export const Button = styled.div<ButtonProps>`
  cursor: pointer;
  background: ${({ theme }) => theme.title};
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  border-radius: 20px;

  svg {
    fill: ${({ theme }) => theme.backgroundDark};
  }

  margin: ${props => (props.margin ? props.margin : "0")};
`;
