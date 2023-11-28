import React, { useEffect } from "react";

import Loading from "~/shared/components/Loading";
import FullPageWhiteContainer from "~/shared/containers/FullPageWhiteContainer";
import { useAppSelector } from "~/store/hooks";

import UserForm from "../../Forms/UserForm";

const UserCreationForm = () => {
  const HEADER = {
    title: "Novo utilizador",
    goBackTo: "/utilizadores"
  };

  return (
    <FullPageWhiteContainer header={HEADER}>
      <UserForm />
    </FullPageWhiteContainer>
  );
};

export default UserCreationForm;
