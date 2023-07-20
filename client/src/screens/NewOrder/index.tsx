import React from "react";
import GoBackButton from "~/shared/components/GoBackButton";

import FullPageWhiteContainer from "~/shared/containers/FullPageWhiteContainer";

import NewOrderForm from "./components/NewOrderForm";

import { Header } from "./styles";

const NewOrder = () => {
  return (
    <FullPageWhiteContainer>
      <Header>
        <GoBackButton navigateLocation={"/encomendas"} />
        Nova encomenda
      </Header>
      <NewOrderForm />
    </FullPageWhiteContainer>
  );
};

export default NewOrder;
