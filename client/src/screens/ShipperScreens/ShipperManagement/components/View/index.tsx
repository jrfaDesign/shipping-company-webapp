import React from "react";
import Table from "~/shared/components/Table";
import { RegisteredShipper } from "~/types/app";

interface Props {
  data: RegisteredShipper[];
}

const View = ({ data }: Props) => {
  return <Table tableType="shippers" data={data} />;
};

export default View;
