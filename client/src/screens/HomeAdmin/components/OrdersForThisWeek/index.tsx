import React from "react";

import { theme } from "~/styles/theme";

import { Order } from "~/types/app";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

import { GraphContainer } from "../../styles";

import { useAppSelector } from "~/store/hooks";
import Loading from "~/shared/components/Loading";
import { fetchCurrentWeekOrdersGraph } from "./utils";

interface Props {
  orders: Order[] | null;
  className?: string;
}

const OrdersForThisWeek = ({ orders, className }: Props) => {
  const loading = useAppSelector((state) => state.orders.isLoadingOrderForThisWeek);
  const weekRange = useAppSelector((state) => state.datePicker.weekRange);

  const weeklyGraphData = fetchCurrentWeekOrdersGraph(orders, weekRange);

  return (
    <GraphContainer width="100%" className={className}>
      {loading ? (
        <Loading height="450px" />
      ) : (
        <ResponsiveContainer width="95%" height={500}>
          <BarChart
            width={1000}
            height={300}
            data={weeklyGraphData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Completas" fill={theme.data.green} />
            <Bar dataKey="Em destribuição" fill={theme.data.yellow} />
            <Bar dataKey="Canceladas" fill={theme.data.red} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </GraphContainer>
  );
};

export default OrdersForThisWeek;
