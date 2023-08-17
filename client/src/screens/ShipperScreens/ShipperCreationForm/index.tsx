import React from "react";
import FullPageWhiteContainer from "~/shared/containers/FullPageWhiteContainer";
import ShipperForm from "../../Forms/ShipperForm";

const ShipperCreationForm = () => {
  const HEADER = {
    title: "Novo expeditor",
    goBackTo: "/expeditores"
  };

  return (
    <FullPageWhiteContainer header={HEADER}>
      <ShipperForm />
    </FullPageWhiteContainer>
  );
};

export default ShipperCreationForm;
