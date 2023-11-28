import { useEffect } from "react";

import Loading from "~/shared/components/Loading";
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { fetchRegisteredUsers } from "~/store/services/registeredUsers";
import View from "./components/View";

const UserManagement = () => {
  const dispatch = useAppDispatch();
  const registeredUsers = useAppSelector((state) => state.registeredUsers.registeredUsers);
  const isLoading = useAppSelector((state) => state.registeredUsers.isLoading);

  useEffect(() => {
    dispatch(fetchRegisteredUsers());
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return <View data={registeredUsers} />;
  }
};

export default UserManagement;
