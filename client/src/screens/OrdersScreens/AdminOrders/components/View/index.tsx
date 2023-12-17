import { Order } from "~/types/app";

import Table from "~/shared/components/Table";

interface Props {
  orders: Order[] | null;
}

const View = ({ orders }: Props) => {
  return <Table tableType={"orders"} data={orders} tableForAdmin={true} />;
};

export default View;
