import React from "react";
import { Order } from "~/types/app";
import { useAppSelector } from "~/store/hooks";
import { theme } from "~/styles/theme";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Label } from "recharts";

import Loading from "~/shared/components/Loading";

import { GraphContainer } from "../../styles";
import { InformationContainer, MainContainer, LabelTextContainer, LabelText } from "./styles";

interface Props {
  orders: Order[] | null;
  className: string;
}

const PieChartData = ({ orders, className }: Props) => {
  const loading = useAppSelector((state) => state.orders.isLoadingOrderForThisWeek);

  const completed = orders?.filter((order) => order.deliveryStatus === "Completed").length;
  const distribution = orders?.filter((order) => order.deliveryStatus === "On the road").length;
  const cancelled = orders?.filter((order) => order.deliveryStatus === "Cancelled").length;

  const data = [
    {
      name: "Completas",
      value: completed,
      color: theme.data.green
    },
    {
      name: "Em destribuição",
      value: distribution,
      color: theme.data.yellow
    },
    {
      name: "Canceladas",
      value: cancelled,
      color: theme.data.red
    }
  ];

  return (
    <GraphContainer width="100%" className={className}>
      {loading ? (
        <Loading />
      ) : orders?.length === 0 ? (
        <div>Sem dados para esta data</div>
      ) : (
        <MainContainer>
          <InformationContainer>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart width={100} height={800}>
                <Pie data={data} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {data.map((entry, index) => {
                    return <Cell key={`cell-${index}`} fill={entry.color} />;
                  })}
                </Pie>
                <Label />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <LabelTextContainer>
              {data.map((entry) => {
                if (entry.value !== 0 || undefined) {
                  return (
                    <LabelText key={entry.name} color={entry.color}>
                      <div />
                      {entry.name}
                    </LabelText>
                  );
                }
              })}
            </LabelTextContainer>
          </InformationContainer>
        </MainContainer>
      )}
    </GraphContainer>
  );
};

export default PieChartData;
