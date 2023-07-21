import React from "react";
import Table from "~/shared/components/Table";
import { RegisteredUser } from "~/types/app";

interface Props {
  data: RegisteredUser[];
}

const View = ({ data }: Props) => {
  return <Table tableType="users" data={data} />;
};

export default View;
