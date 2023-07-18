import React from "react";
import GoBackButton from "~/shared/components/GoBackButton";

import FullPageWhiteContainer from "~/shared/containers/FullPageWhiteContainer";

import Form from "./components/Form";

import { Header } from "./styles";

const NewOrder = () => {
  return (
    <FullPageWhiteContainer>
      <Header>
        <GoBackButton navigateLocation={"/encomendas"} />
        Nova encomenda
      </Header>
      <Form />
    </FullPageWhiteContainer>
  );
};

export default NewOrder;
