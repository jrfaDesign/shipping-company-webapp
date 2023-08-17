import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useShippersStore } from "~/hooks/stores/shippers";

import Loading from "~/shared/components/Loading";

import View from "./components/View";

const ShipperDetails = () => {
  const { id } = useParams();

  if (!id) {
    return null;
  }

  const shipper = useShippersStore((state) => state.shipper);
  const getOrder = useShippersStore((state) => state.fetchRegisteredShipperById);
  const loadingOrder = useShippersStore((state) => state.isLoadingById);

  useEffect(() => {
    getOrder(id);
  }, []);

  if (loadingOrder || !shipper) {
    return <Loading />;
  } else {
    return <View shipper={shipper} />;
  }
};

export default ShipperDetails;
