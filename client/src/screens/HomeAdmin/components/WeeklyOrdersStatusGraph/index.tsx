import React from "react";

import { theme } from "~/styles/theme";

import { Orders } from "~/types/app";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

import { GraphContainer } from "../../styles";
import dayjs from "dayjs";

interface Props {
  orders: Orders[];
  loading: boolean;
}

const WeeklyOrdersStatusGraph = ({ orders, loading }: Props) => {
  console.log(orders);

  const organizeData = (inputData: any) => {
    const dataMap = new Map();

    // Iterate through the inputData array and organize the data by date
    inputData.forEach((item: any) => {
      const date = dayjs(item.requestedDate).format("DD/MM");

      const status = item.deliveryStatus;

      if (!dataMap.has(date)) {
        dataMap.set(date, { name: date, Completas: 0, "Em destribuição": 0, Canceladas: 0 });
      }

      const statusKey =
        status === "Completed"
          ? "Completas"
          : status === "On the road"
          ? "Em destribuição"
          : "Canceladas";
      dataMap.get(date)[statusKey]++;
    });

    // Convert the Map to an array of objects
    const finalData = Array.from(dataMap.values());

    return finalData;
  };

  const newData = organizeData(orders);
  console.log(newData);

  return (
    <GraphContainer width="100%" height="300px">
      <BarChart
        width={500}
        height={300}
        data={newData}
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
    </GraphContainer>
  );
};

export default WeeklyOrdersStatusGraph;
