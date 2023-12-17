import React, { useEffect } from "react";

import Loading from "~/shared/components/Loading";
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { fetchShippers } from "~/store/services/shippers";

import View from "./components/View";

const ShipperManagement = () => {
  const dispatch = useAppDispatch();
  const shippers = useAppSelector((state) => state.shippers.shippers);
  const loadingShippers = useAppSelector((state) => state.shippers.isLoading);

  useEffect(() => {
    dispatch(fetchShippers());
  }, []);

  if (loadingShippers) {
    return <Loading height="70vh" />;
  } else {
    return <View data={shippers} />;
  }
};

export default ShipperManagement;
