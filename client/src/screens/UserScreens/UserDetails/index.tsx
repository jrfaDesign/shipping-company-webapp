import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import Loading from "~/shared/components/Loading";
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { fetchRegisteredUserById } from "~/store/services/registeredUsers";

import View from "./components/View";

const UserDetails = () => {
  const { id } = useParams();

  if (!id) {
    return null;
  }

  const dispatch = useAppDispatch();
  const order = useAppSelector((state) => state.registeredUsers.registeredUser);
  const loadingUser = useAppSelector((state) => state.registeredUsers.isLoadingById);

  useEffect(() => {
    dispatch(fetchRegisteredUserById(id));
  }, []);

  if (loadingUser || !order) {
    return <Loading />;
  } else {
    return <View user={order} />;
  }
};

export default UserDetails;
