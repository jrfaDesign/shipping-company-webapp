import React from "react";
import { Order } from "~/types/app";
import { ViewOptionsType } from "../..";
import { DataContainer, OrderContainer, OrderData, ShipperName } from "./styles";

import dayjs from "dayjs";
import { STATUS_LABEL } from "~/shared/components/Table/TableData/utils";

interface Props {
  option: ViewOptionsType;
  orders: Order[];
}

const DataView = ({ option, orders }: Props) => {
  const getDaysFromToday = (date: string) => {
    const currentDate = dayjs();
    const inputDate = dayjs(date);

    const daysDifference = inputDate.diff(currentDate, "day");

    if (daysDifference === 0) {
      return "Hoje";
    } else if (daysDifference < 0) {
      return `${Math.abs(daysDifference)} dias atrás`;
    } else {
      return `Faltam ${daysDifference} dias `;
    }
  };

  const getColorStatus = (date: string, order: Order) => {
    const currentDate = dayjs();
    const inputDate = dayjs(date);

    const daysDifference = inputDate.diff(currentDate, "day");
    if (option === "requestedDate") {
      if (daysDifference >= 5 && daysDifference <= 1) {
        return "yellow01";
      } else if (daysDifference === 0) {
        return `green01`;
      } else {
        return `red01`;
      }
    } else if (option === "deliveryDate") {
      if (daysDifference >= 5) {
        return "green01";
      } else if (daysDifference < 5 && daysDifference >= 2) {
        return `yellow01`;
      } else {
        return `red01`;
      }
    } else if (option === "lastStatusChangeDate") {
      const positiveDate = Math.abs(daysDifference);
      if (order.deliveryStatus === "Completed") {
        return "green01";
      } else if (positiveDate <= 3) {
        return `green01`;
      } else if (positiveDate > 3 && positiveDate <= 8) {
        return `yellow01`;
      } else if (positiveDate > 8) {
        return `red01`;
      }
    } else {
      return "grey02";
    }
  };

  return (
    <DataContainer>
      {orders?.map((order) => {
        const selectedOptionData = order[option] as string;
        return (
          <OrderContainer key={order._id}>
            <ShipperName>{`${order.shipper.name} - ${
              STATUS_LABEL[order.deliveryStatus]
            }`}</ShipperName>
            <OrderData color={getColorStatus(selectedOptionData, order) ?? "grey02"}>
              {getDaysFromToday(selectedOptionData)}
            </OrderData>
          </OrderContainer>
        );
      })}
    </DataContainer>
  );
};

export default DataView;
