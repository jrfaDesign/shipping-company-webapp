import React, { useState } from "react";
import Loading from "~/shared/components/Loading";
import { useAppSelector } from "~/store/hooks";
import { Order } from "~/types/app";
import { GraphContainer } from "../../styles";
import DataView from "./components/DataView";
import ViewOptions from "./components/ViewOptions";
import { DataWrapper } from "./styles";

interface Props {
  orders: Order[] | null;
  className: string;
}

export type ViewOptionsType = "requestedDate" | "deliveryDate" | "lastStatusChangeDate";

const ShippersNewRequest = ({ orders, className }: Props) => {
  const loading = useAppSelector((state) => state.orders.isLoadingOrderForThisWeek);
  const [option, setOption] = useState<ViewOptionsType>("requestedDate");

  return (
    <GraphContainer width="100%" className={className}>
      {loading ? (
        <Loading />
      ) : orders?.length === 0 ? (
        <div>Sem dados para esta data</div>
      ) : (
        <DataWrapper>
          <ViewOptions option={option} setOption={setOption} orders={orders as Order[]} />
          <DataView option={option} orders={orders as Order[]} />
        </DataWrapper>
      )}
    </GraphContainer>
  );
};

export default ShippersNewRequest;
