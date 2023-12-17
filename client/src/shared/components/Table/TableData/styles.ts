import styled from "styled-components";
import { tablet } from "~/styles/theme";

interface CellProps {
  width?: string;
}

export const Container = styled.div`
  height: 100%;
  overflow: scroll;
`;

export const OrdersTable = styled.div``;

export const OrderContainer = styled.div`
  display: flex;
  padding: 7.8px 20px;
  border-bottom: 1px solid #989ba5;
  cursor: pointer;

  ${tablet} {
    font-size: 16px;
    padding: 18.2px 40px;
  }

  :last-child {
    border-bottom: 0px solid #989ba5;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.superLightBlue05};
    :first-child {
      background-color: white;
    }
  }

  .more-icon {
    padding: 1px;
    svg {
      border-radius: 20px;
      transition: all 0.2s;
      :hover {
        background-color: ${({ theme }) => theme.colors.grey02};
      }
    }
  }
`;

export const Cell = styled.div<CellProps>`

  width:160px ;
  color: ${({ theme }) => theme.text}
  padding:2px 5px 2px 5px;
  font-size: 12px;
  
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &.header{
    color: ${({ theme }) => theme.colors.lightBlue};
    font-weight: 600;
    display: flex;
    align-items: center;
  }
  
  ${tablet} {
    font-size: 16px;
    padding:5px 20px 5px 10px;
    width ${(props) => props.width ?? "160px"} ;
  }

  .status{
        border-radius: 10px;
        padding: 4px 7px;
    }

  .completed{
      color: ${({ theme }) => theme.data.green};
      background-color: ${({ theme }) => theme.data.green01};

  }
  .cancelled{
      color: ${({ theme }) => theme.data.red};
      background-color: ${({ theme }) => theme.data.red01};

  }
  .on-the-road{
      color: ${({ theme }) => theme.data.yellow};
      background-color: ${({ theme }) => theme.data.yellow01};
  }

`;
