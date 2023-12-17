import styled from "styled-components";
import { desktop, mobile, tablet, tabletsecond } from "~/styles/theme";

export const DataContainer = styled.div`
  overflow: auto;
  width: 100%;
  height: 100%;

  padding: 0px 5px;
  ${mobile} {
    max-height: 300px;
  }
  ${tablet} {
    height: 55%;
    max-height: 100%;
  }
  ${tabletsecond} {
    height: 75%;
  }

  ${desktop} {
    height: 420px;
  }
`;

export const OrderContainer = styled.div`
  display: flex;
  align-items: flex-end;

  justify-content: space-between;
  padding: 5px 2px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black02};

  :last-child {
    border-bottom: 0px solid ${({ theme }) => theme.colors.black02};
  }
`;

export const ShipperName = styled.div`
  font-size: 12px;
`;

interface OrderDataColor {
  color: "green01" | "red01" | "yellow01" | "grey02";
}

export const OrderData = styled.div<OrderDataColor>`
  font-size: 12px;
  font-weight: 500;
  background: ${(props) => props.theme.data[props.color]};
  border-radius: 8px;
  padding: 4px 8px;
  width: 40%;
  display: flex;
  justify-content: flex-end;
  white-space: nowrap;
`;
