import { height } from "@mui/system";
import React from "react";
import HorizontalScrollContainer from "~/shared/containers/HorizontalScrollContainer";
import { Orders } from "~/types/app";

import { OrdersTable, OrderContainer, Cell, Header } from "./styles";

interface Props {
  data: Orders[];
}

const Table = ({ data }: Props) => {
  //console.log(data);

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
            <Header width="200px">Data do Pedido</Header>
            <Header width="200px">Estado de Entrega</Header>
            <Header width="200px">Data de Entrega</Header>
            <Header width="200px">Cliente Destino</Header>
            <Header width="500px">Morada</Header>
            <Header width="200px">Código Postal</Header>
            <Header width="200px">Cidade</Header>
          </OrderContainer>
          {data.map((data) => (
            <OrderContainer key={data._id}>
              <Cell width="200px">{formatDate(data.requestedDate as any)}</Cell>
              <Cell width="200px">
                <span className={`status ${getStatusClass[data.deliveryStatus]}`}>
                  {getStatusLabel[data.deliveryStatus]}
                </span>
              </Cell>
              <Cell width="200px">{formatDate(data.deliveryDate as any)}</Cell>
              <Cell width="200px">{data.requestedClient}</Cell>
              <Cell width="500px">{data.deliveryAddress}</Cell>
              <Cell width="200px">{data.zip}</Cell>
              <Cell width="200px">{data.state}</Cell>
            </OrderContainer>
          ))}
        </OrdersTable>
      </HorizontalScrollContainer>
    </div>
  );
};

export default Table;
