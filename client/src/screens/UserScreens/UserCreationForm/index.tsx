import React, { useEffect } from "react";

import { useShippersStore } from "~/hooks/stores/shippers";

import Loading from "~/shared/components/Loading";
import FullPageWhiteContainer from "~/shared/containers/FullPageWhiteContainer";

import UserForm from "../../Forms/UserForm";

const UserCreationForm = () => {
  const getShippers = useShippersStore((state) => state.fetchRegisteredShippers);
  const isLoading = useShippersStore((state) => state.isLoading);

  const HEADER = {
    title: "Novo utilizador",
    goBackTo: "/utilizadores"
  };

  useEffect(() => {
    getShippers();
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <FullPageWhiteContainer header={HEADER}>
        <UserForm />
      </FullPageWhiteContainer>
    );
  }
};

export default UserCreationForm;