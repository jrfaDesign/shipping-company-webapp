import { useEffect, useRef, useState } from "react";
import { Orders } from "~/types/app";

import Filters from "../Filters";
import Table from "../Table";

import Pagination from "@mui/material/Pagination";
import { Paginate } from "~/hooks/globalHooks";

import { PaginationContainer, TalbeWrapper } from "./styles";
import FullPageWhiteContainer from "~/shared/containers/FullPageWhiteContainer";

interface Props {
  orders: Orders[];
}

const View = ({ orders }: Props) => {
  const [selectedData, setSelectedData] = useState<Orders[]>([]);

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  useEffect(() => {
    if (orders) {
      setSelectedData(orders);
    }
  }, [orders]);

  if (selectedData.length === 0) {
    return <FullPageWhiteContainer>Parece que há encomendas neste momento</FullPageWhiteContainer>; // or display a loading spinner or fallback content
  }

  const paginatedContent = selectedData
    ? Paginate(selectedData, currentPage, itemsPerPage)
    : undefined;

  return (
    <FullPageWhiteContainer>
      <TalbeWrapper>
        <Filters data={orders} setSelectedData={setSelectedData} />
        <Table data={paginatedContent} />
      </TalbeWrapper>

      <PaginationContainer>
        <Pagination
          count={Math.ceil(selectedData.length / itemsPerPage)}
          shape="rounded"
          page={currentPage}
          onChange={handleChange}
        />
      </PaginationContainer>
    </FullPageWhiteContainer>
  );
};

export default View;
