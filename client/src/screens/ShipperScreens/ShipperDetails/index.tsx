import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import Loading from "~/shared/components/Loading";
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { fetchShipperById } from "~/store/services/shippers";

import View from "./components/View";

const ShipperDetails = () => {
  const { id } = useParams();

  if (!id) {
    return null;
  }

  const dispatch = useAppDispatch();
  const shipper = useAppSelector((state) => state.shippers.shipper);
  const loadingOrder = useAppSelector((state) => state.shippers.isLoadingById);

  useEffect(() => {
    dispatch(fetchShipperById(id));
  }, []);

  if (loadingOrder || !shipper) {
    return <Loading />;
  } else {
    return <View shipper={shipper} />;
  }
};

export default ShipperDetails;
