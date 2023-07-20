import React, { useEffect, useRef, useState } from "react";

import { Orders, RegisteredUser } from "~/types/app";

import { Paginate } from "~/hooks/globalHooks";

import FullPageWhiteContainer from "~/shared/containers/FullPageWhiteContainer";

import Pagination from "@mui/material/Pagination";

import TableData from "./TableData";

import { PaginationContainer, TalbeWrapper } from "./styles";
import TableFilters from "./TableFilters";

interface Props {
  tableType: "orders" | "users";
  data: (Orders | RegisteredUser)[];
}

const Table = ({ tableType, data }: Props) => {
  const [selectedData, setSelectedData] = useState<(Orders | RegisteredUser)[]>([]);

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
    if (data) {
      setSelectedData(data);
    }
  }, [data]);

  if (selectedData.length === 0) {
    return <FullPageWhiteContainer>Parece que há encomendas neste momento</FullPageWhiteContainer>; // or display a loading spinner or fallback content
  }

  const paginatedContent = selectedData
    ? Paginate(selectedData, currentPage, itemsPerPage)
    : undefined;
  return (
    <FullPageWhiteContainer>
      <TalbeWrapper>
        <TableFilters data={data} setSelectedData={setSelectedData} />
        <TableData tableType={tableType} data={paginatedContent as (Orders | RegisteredUser)[]} />
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

export default Table;
