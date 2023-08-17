import React from "react";
import Table from "~/shared/components/Table";
import { RegistedShipper } from "~/types/app";

interface Props {
  data: RegistedShipper[];
}

const View = ({ data }: Props) => {
  return <Table tableType="shippers" data={data} />;
};

export default View;
