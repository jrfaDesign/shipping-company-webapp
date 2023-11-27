import styled from "styled-components";
import { desktop, laptop, mobile } from "~/styles/theme";

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  width: 100%;
  padding: 20px 0px;
  p {
    padding: 10px 20px;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black02};
  border-top: 1px solid ${({ theme }) => theme.colors.black02};
  padding: 20px 0px;
  margin-bottom 20px;

  ${laptop}{
    flex-direction: row;
  }


`;

export const ButtonContainer = styled.div`
  width: 250px !important;
  margin-bottom: 20px;
`;
