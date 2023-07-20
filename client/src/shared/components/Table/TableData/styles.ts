import styled from "styled-components";

interface CellProps {
  width?: string;
}

export const OrdersTable = styled.div``;

export const Header = styled.div<CellProps>`
  margin: 0 auto;
  width ${(props) => props.width ?? "170px"}  ;
  color: ${({ theme }) => theme.colors.lightBlue};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding:5px 20px 5px 10px;

`;

export const OrderContainer = styled.div`
  display: flex;
  padding: 18.5px 40px;
  border-bottom: 1px solid #989ba5;
  cursor: pointer;

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
  width ${(props) => props.width ?? "170px"} ;
  color: ${({ theme }) => theme.text}
  padding:5px 20px 5px 10px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  .status{
        border-radius: 10px;
        padding: 4px 7px;
    }

  .completed{
      color: #4caf50;
      background-color: rgba(76, 175, 80,0.1);

  }
  .cancelled{
      color: #F80A0A;
      background-color: rgba(248, 10, 10,0.1);

  }
  .on-the-road{
      color: rgb(248, 197, 10);
      background-color: rgba(248, 197, 10,0.1);
  }

`;
