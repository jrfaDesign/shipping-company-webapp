import React from "react";
import { RegistedShipper } from "~/types/app";

interface Props {
  shipper: RegistedShipper;
}

const View = ({ shipper }: Props) => {
  return (
    <div>
      <div>Registed shipper: {shipper._id}</div>
    </div>
  );
};

export default View;
