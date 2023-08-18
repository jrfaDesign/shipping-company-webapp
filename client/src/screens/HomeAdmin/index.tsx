import View from "./components/View";

import { useEffect } from "react";

import { useUserStore } from "~/hooks/stores/user";
import { useOrdersStore } from "~/hooks/stores/orders";
import useDatePickerStore from "~/hooks/stores/datePicker";

const HomeAdmin = () => {
  const user = useUserStore((state) => state.user);

  const orders = useOrdersStore((state) => state.orders);
  const getOrders = useOrdersStore((state) => state.fetchOrders);
  const loadingOrders = useOrdersStore((state) => state.isLoading);

  const dateRange = useDatePickerStore((state) => state.dateRange);

  useEffect(() => {
    getOrders();
  }, [dateRange]);

  return <View loadingData={loadingOrders} orders={orders} />;
};

export default HomeAdmin;
