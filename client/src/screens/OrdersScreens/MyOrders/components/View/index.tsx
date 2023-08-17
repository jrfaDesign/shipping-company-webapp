import { Orders } from "~/types/app";

import Table from "~/shared/components/Table";

interface Props {
  orders: Orders[];
}

const View = ({ orders }: Props) => {
  return <Table tableType={"orders"} data={orders} />;
};

export default View;
