import React, { useEffect } from "react";

import { useShippersStore } from "~/hooks/stores/shippers";

import Loading from "~/shared/components/Loading";

import View from "./components/View";

const ShipperManagement = () => {
  const shippers = useShippersStore((state) => state.shippers);
  const getShippers = useShippersStore((state) => state.fetchRegisteredShippers);
  const loadingShippers = useShippersStore((state) => state.isLoading);

  useEffect(() => {
    getShippers();
  }, []);

  if (loadingShippers) {
    return <Loading />;
  } else {
    return <View data={shippers} />;
  }
};

export default ShipperManagement;
