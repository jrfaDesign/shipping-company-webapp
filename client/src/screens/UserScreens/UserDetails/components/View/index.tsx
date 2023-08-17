import React from "react";
import { RegisteredUser } from "~/types/app";

interface Props {
  user: RegisteredUser;
}

const View = ({ user }: Props) => {
  return <div>User Details: {user._id}</div>;
};

export default View;
