import { Order } from "~/types/app";

import { capitalize } from "lodash";

type DeliveryStatusWeekDay =
  | "Segunda"
  | "Terça"
  | "Quarta"
  | "Quinta"
  | "Sexta"
  | "Sábado"
  | "Domingo";

const organizeData = (data: Order[] | null) => {
  //
  const filterData = (data: Order[] | null, dayOfWeek: DeliveryStatusWeekDay) => {
    const orderDayOfTheWeek = (order: Order) =>
      capitalize(
        new Date(order.requestedDate).toLocaleDateString("pt-PT", {
          weekday: "short"
        })
      ) as DeliveryStatusWeekDay;
    const newData = data?.filter((order) => orderDayOfTheWeek(order) === dayOfWeek);

    return {
      Completas: newData?.filter((order) => order.deliveryStatus === "Completed").length,
      "Em destribuição": newData?.filter((order) => order.deliveryStatus === "On the road").length,
      Canceladas: newData?.filter((order) => order.deliveryStatus === "Cancelled").length
    };
  };

  const allOrders = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];

  const allOrdersFinalData = allOrders.map((day) => ({
    name: `${day} `,
    ...filterData(data, day as DeliveryStatusWeekDay)
  }));
  return allOrdersFinalData;
};

export const fetchCurrentWeekOrdersGraph = (orders: Order[] | null, weekRange: Date[]) => {
  try {
    return organizeData(orders);
  } catch (err) {
    console.log(err);
  }
};
