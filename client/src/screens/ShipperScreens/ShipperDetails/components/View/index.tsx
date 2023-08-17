import React from "react";
import { RegistedShipper } from "~/types/app";

import AddIcon from "@mui/icons-material/Add";

import FullPageWhiteContainer from "~/shared/containers/FullPageWhiteContainer";

import { Wrapper } from "./styles";

interface Props {
  shipper: RegistedShipper;
}

const View = ({ shipper }: Props) => {
  return <Wrapper></Wrapper>;
};

export default View;
