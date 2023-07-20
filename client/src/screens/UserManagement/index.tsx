import React, { useEffect } from "react";

import Table from "~/shared/components/Table";

import { useRegisteredUsersStore } from "~/hooks/stores/registeredUsers";
import Loading from "~/shared/components/Loading";
import View from "./components/View";

const UserManagement = () => {
  const registeredUsers = useRegisteredUsersStore((state) => state.registeredUsers);
  const fetchRegisteredUsers = useRegisteredUsersStore((state) => state.fetchRegisteredUsers);
  const isLoading = useRegisteredUsersStore((state) => state.isLoading);

  useEffect(() => {
    fetchRegisteredUsers();
  }, []);

  if (isLoading) {
    return <Loading />;
  } else if (!isLoading) {
    return <View data={registeredUsers} />;
  }
};

export default UserManagement;
