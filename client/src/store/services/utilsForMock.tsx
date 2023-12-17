import { Order } from "~/types/app";

export const modifyOrderDatesForWeekly = (orders: Order[], weekRange: Date[]) => {
  const [start, end] = weekRange;

  const startDate = start.toISOString();
  const endDate = end.toISOString();

  const filteredOrders = orders.filter(({ requestedDate }) => {
    return (
      requestedDate === startDate ||
      requestedDate === endDate ||
      (requestedDate > startDate && requestedDate < endDate)
    );
  });

  return filteredOrders;
};
