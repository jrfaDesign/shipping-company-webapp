import styled from "styled-components";
import { laptop } from "~/styles/theme";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100px;
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
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
  margin-right: 15px;
  svg {
    path {
      color: white;
    }
  }
`;

export const Label = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 12px;
  font-weight: 30;
  position: relative;
  top: 10px;
  right: -45px;
`;
export const Amount = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: 40px;
  font-weight: 500;

  ${laptop} {
    font-size: 45px;
  }
`;
