import View from "./components/View";
import Loading from "~/shared/components/Loading";

import { useEffect } from "react";

import { useOrdersStore } from "~/hooks/stores/orders";
import { useUserStore } from "~/hooks/stores/user";
import useDatePickerStore from "~/hooks/stores/datePicker";

const HomeClient = () => {
  const user = useUserStore((state) => state.user);

  const orders = useOrdersStore((state) => state.orders);
  const getOrders = useOrdersStore((state) => state.fetchOrders);
  const loadingOrders = useOrdersStore((state) => state.isLoading);

  const dateRange = useDatePickerStore((state) => state.dateRange);

  useEffect(() => {
    getOrders();
  }, [dateRange]);

  if (loadingOrders) {
    return <Loading />;
  } else {
    return <View orders={orders} />;
  }
};

export default HomeClient;
