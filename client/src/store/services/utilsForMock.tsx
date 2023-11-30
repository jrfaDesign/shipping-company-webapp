import { Order } from "~/types/app";

export const modifyOrderDatesForWeekly = (orders: Order[]) => {
  const currentDate = new Date();

  // Map through the first 30 orders
  const modifiedOrders = orders.slice(0, 30).map((order) => {
    // Generate a random number of days between 0 and 10 for deliveryDate
    const deliveryDays = Math.floor(Math.random() * 11);

    // Calculate requestedDate as a random date from default up to current date
    const requestedDate = new Date(
      currentDate - Math.random() * (currentDate - new Date(order.requestedDate))
    );

    // Calculate deliveryDate as requestedDate + 3 to 10 days
    const deliveryDate = new Date(requestedDate);
    deliveryDate.setDate(requestedDate.getDate() + deliveryDays);

    // Calculate lastStatusChangeDate as the minimum of requestedDate and never more than deliveryDate
    const lastStatusChangeDate = new Date(Math.min(requestedDate, deliveryDate));

    // Convert dates to ISO string format
    const formattedRequestedDate = requestedDate.toISOString();
    const formattedDeliveryDate = deliveryDate.toISOString();
    const formattedLastStatusChangeDate = lastStatusChangeDate.toISOString();

    return {
      ...order,
      requestedDate: formattedRequestedDate,
      deliveryDate: formattedDeliveryDate,
      lastStatusChangeDate: formattedLastStatusChangeDate
    };
  });

  return modifiedOrders;
};
