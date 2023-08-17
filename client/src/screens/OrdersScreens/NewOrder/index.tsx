import React from "react";
import GoBackButton from "~/shared/components/GoBackButton";

import FullPageWhiteContainer from "~/shared/containers/FullPageWhiteContainer";

import NewOrderForm from "./components/NewOrderForm";

const NewOrder = () => {
  const HEADER = {
    title: "Nova encomenda",
    goBackTo: "/encomendas"
  };

  return (
    <FullPageWhiteContainer header={HEADER}>
      <NewOrderForm />
    </FullPageWhiteContainer>
  );
};

export default NewOrder;

