import styled from "styled-components";
import { laptop } from "~/styles/theme";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

interface IconContainerProps {
  color: string;
}

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 65px;
  background-color: ${(props) => props.color};
  border-radius: 50px;
  margin-bottom: 10px;

  svg {
    path {
      color: white;
    }
  }
`;

export const Label = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 12px;
  font-weight: 300;
`;

export const Amount = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: 40px;
  font-weight: 500;

  ${laptop} {
    font-size: 45px;
  }
`;
