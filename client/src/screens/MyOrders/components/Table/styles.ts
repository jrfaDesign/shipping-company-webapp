import styled from "styled-components";

interface CellProps {
  width: string;
}

export const OrdersTable = styled.div``;

export const Header = styled.div<CellProps>`
  margin: 0 auto;
  width ${(props) => props.width} ;
  color: ${({ theme }) => theme.colors.lightBlue};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const OrderContainer = styled.div`
  display: flex;
  padding: 20px 40px;
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
`;

export const Cell = styled.div<CellProps>`
  margin: 0 auto;
  width ${(props) => props.width} ;
  color: ${({ theme }) => theme.text}

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
