import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import Loading from "~/shared/components/Loading";
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { fetchOrderById } from "~/store/services/orders";

import View from "./components/View";

const OrdersDetails = () => {
  const { id } = useParams();

  if (!id) {
    return null;
  }

  const dispatch = useAppDispatch();
  const order = useAppSelector((state) => state.orders.order);
  const loadingOrder = useAppSelector((state) => state.orders.isLoadingOrder);

  useEffect(() => {
    dispatch(fetchOrderById(id));
  }, []);

  if (loadingOrder || !order) {
    return <Loading />;
  } else {
    return <View order={order} />;
  }
};

export default OrdersDetails;
