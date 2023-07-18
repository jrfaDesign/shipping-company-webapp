import styled from "styled-components";
import { desktop } from "~/styles/theme";

export const EbookContainer = styled.div`
  width: 200px;
  margin: 0 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${desktop} {
    margin: 0 20px;
  }
`;

export const ImageContainer = styled.div`
  margin-bottom: 15px;
  width: 200px;
  height: 270px;
  border-radius: 8px;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.2);

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const EbookTitle = styled.h4`
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  padding: 10px 0px;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Price = styled.div`
  margin-left: 15px;
  color: ${({ theme }) => theme.colors.grey06};
  font-size: 14px;
  text-decoration: line-through;
`;

export const PromoPrice = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.darkBlue};
  border-radius: 4px;
  padding: 4px 12px;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: 500;
  letter-spacing: 2px;
`;
