import styled from "styled-components";
import { tablet, laptop, maxLaptop } from "~/styles/theme";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.superLightBlue};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 20px 18px;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${laptop} {
    flex-direction: row;
  }
`;
export const TextOptionsContainer = styled.div`
  ${maxLaptop} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
  }
  ${laptop} {
    margin-right: 20px;
  }
`;

export const SearchInputContainer = styled.div`
  display: flex;
  width: 100%;

  .fgqEij {
    padding: 14px 10px;
  }
  ${laptop} {
    max-width: 600px;
  }
`;

export const TotalText = styled.span`
  color: #6b6e7f;

  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
