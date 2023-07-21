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

  if (data.length === 0) {
    return (
      <FullPageWhiteContainer>
        <span className="no-data">
          Parece que não há {tableType === "orders" ? "encomendas" : "utilziadores"} neste momento.
        </span>
      </FullPageWhiteContainer>
    ); // or display a loading spinner or fallback content
  }

  const paginatedContent = selectedData
    ? Paginate(selectedData, currentPage, itemsPerPage)
    : undefined;
  return (
    <FullPageWhiteContainer>
      <TalbeWrapper>
        <TableFilters
          tableType={tableType}
          selectedData={selectedData}
          origialData={data}
          setSelectedData={setSelectedData}
        />

        {selectedData.length === 0 ? (
          <span className="no-data">
            Parece que não há {tableType === "orders" ? "encomendas" : "utilziadores"} neste
            momento.
          </span>
        ) : (
          <TableData tableType={tableType} data={paginatedContent as (Orders | RegisteredUser)[]} />
        )}
      </TalbeWrapper>

      {selectedData.length > 0 && (
        <PaginationContainer>
          <Pagination
            count={Math.ceil(selectedData.length / itemsPerPage)}
            shape="rounded"
            page={currentPage}
            onChange={handleChange}
          />
        </PaginationContainer>
      )}
    </FullPageWhiteContainer>
  );
};

export default Table;
