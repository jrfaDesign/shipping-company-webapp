import HorizontalScrollContainer from "~/shared/containers/HorizontalScrollContainer";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { Orders, RegisteredUser } from "~/types/app";

import { OrdersTable, OrderContainer, Cell, Header } from "./styles";

import { TABLE_HEADER } from "./utils";

interface Props {
  tableType: "orders" | "users";
  data: (Orders | RegisteredUser)[];
}

const TableData = ({ tableType, data }: Props) => {
  function formatDate(dateString: String) {
    const date = new Date(dateString as any);
    const formattedDate = date.toLocaleDateString("en-GB");
    return formattedDate;
  }

  const getStatusClass = {
    Completed: "completed",
    Cancelled: "cancelled",
    "On the road": "on-the-road"
  };

  const getStatusLabel = {
    Completed: "Completa",
    Cancelled: "Cancelada",
    "On the road": "Em distribuição"
  };

  return (
    <div style={{ height: "100%", display: "flex" }}>
      <HorizontalScrollContainer width="100%" padding="0">
        <OrdersTable>
          <OrderContainer>
            {TABLE_HEADER[tableType].map((headerText) => (
              <Header key={headerText.label} width={headerText.width}>
                {headerText.label}
              </Header>
            ))}
          </OrderContainer>
          {tableType === "orders" && (
            <>
              {data.map((data: any) => (
                <OrderContainer key={data._id}>
                  <Cell>{formatDate(data.requestedDate as any)}</Cell>
                  <Cell>
                    <span className={`status ${getStatusClass[data.deliveryStatus]}`}>
                      {getStatusLabel[data.deliveryStatus]}
                    </span>
                  </Cell>
                  <Cell>{formatDate(data.deliveryDate as any)}</Cell>
                  <Cell>{data.weight} kg</Cell>
                  <Cell>{data.requestedClient} </Cell>
                  <Cell>{data.deliveryAddress}</Cell>
                  <Cell>{data.zip}</Cell>
                  <Cell>{data.state}</Cell>
                  <Cell
                    className="more-icon"
                    width="50px"
                    onClick={() => console.log("Send User to detail page")}
                  >
                    <MoreHorizIcon />
                  </Cell>
                </OrderContainer>
              ))}
            </>
          )}
          {tableType === "users" && (
            <>
              {data.map((data: any) => (
                <OrderContainer key={data._id}>
                  <Cell>{data._id}</Cell>
                  <Cell width="300px">
                    {data.name} {data.lastName}
                  </Cell>

                  <Cell width="350px">{data.company}</Cell>
                  <Cell>{data.contact}</Cell>
                  <Cell width="450px">{data.email} </Cell>
                  <Cell
                    className="more-icon"
                    width="50px"
                    onClick={() => console.log("Send User to detail page")}
                  >
                    <MoreHorizIcon />
                  </Cell>
                </OrderContainer>
              ))}
            </>
          )}
        </OrdersTable>
      </HorizontalScrollContainer>
    </div>
  );
};

export default TableData;
