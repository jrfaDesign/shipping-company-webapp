import React from "react";
import { RegistedShipper } from "~/types/app";

import AddIcon from "@mui/icons-material/Add";

import FullPageWhiteContainer from "~/shared/containers/FullPageWhiteContainer";

import { Wrapper } from "./styles";

interface Props {
  shipper: RegistedShipper;
}

const View = ({ shipper }: Props) => {
  const buttonAction = () => {
    console.log("buttonAction");
  };
  const header = {
    title: shipper.name,
    button: {
      icon: <AddIcon />,
      action: () => buttonAction()
    }
  };
  return (
    <Wrapper>
      <FullPageWhiteContainer header={header} margin={"0 0 20px 0"} padding>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
      </FullPageWhiteContainer>
      <FullPageWhiteContainer header={header} margin={"0 0 20px 0"} padding>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
      </FullPageWhiteContainer>
      <FullPageWhiteContainer header={header} margin={"0 0 20px 0"} padding>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
        <div>Registed shipper: {shipper._id}</div>
      </FullPageWhiteContainer>
    </Wrapper>
  );
};

export default View;
