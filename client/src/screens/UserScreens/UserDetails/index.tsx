import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useRegisteredUsersStore } from "~/hooks/stores/registeredUsers";

import Loading from "~/shared/components/Loading";

import View from "./components/View";

const UserDetails = () => {
  const { id } = useParams();

  if (!id) {
    return null;
  }

  const order = useRegisteredUsersStore((state) => state.registeredUser);
  const getUser = useRegisteredUsersStore((state) => state.fetchRegisteredUserById);
  const loadingUser = useRegisteredUsersStore((state) => state.isLoadingById);

  useEffect(() => {
    getUser(id);
  }, []);

  if (loadingUser || !order) {
    return <Loading />;
  } else {
    return <View user={order} />;
  }
};

export default UserDetails;
