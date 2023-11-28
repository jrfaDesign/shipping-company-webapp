import React, { useEffect, useRef, useState } from "react";

import { Orders, RegisteredShipper, RegisteredUser } from "~/types/app";

import { Paginate } from "~/hooks/globalHooks";

import FullPageWhiteContainer from "~/shared/containers/FullPageWhiteContainer";

import Pagination from "@mui/material/Pagination";

import TableData from "./TableData";

import { PaginationContainer, TalbeWrapper } from "./styles";
import TableFilters from "./TableFilters";

interface Props {
  tableType: "orders" | "users" | "shippers";
  data: (Orders | RegisteredUser | RegisteredShipper)[];
  tableForAdmin?: boolean;
}

const Table = ({ tableType, data, tableForAdmin }: Props) => {
  const [selectedData, setSelectedData] = useState<(Orders | RegisteredUser | RegisteredShipper)[]>(
    []
  );

  const itemsPerPage = 40;
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

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedData]);

  if (data.length === 0) {
    return (
      <FullPageWhiteContainer>
        <span className="no-data">
          Parece que não há{" "}
          {tableType === "orders"
            ? "encomendas"
            : tableType === "users"
            ? "utilziadores"
            : "expeditores"}{" "}
          neste momento.
        </span>
      </FullPageWhiteContainer>
    );
  }

  const paginatedContent = selectedData
    ? Paginate(selectedData, currentPage, itemsPerPage)
    : undefined;

  return (
    <FullPageWhiteContainer>
      <TalbeWrapper>
        <TableFilters
          tableForAdmin={tableForAdmin}
          tableType={tableType}
          selectedData={selectedData}
          originalData={data}
          setSelectedData={setSelectedData}
        />

        {selectedData.length === 0 ? (
          <span className="no-data">
            Parece que não há{" "}
            {tableType === "orders"
              ? "encomendas"
              : tableType === "users"
              ? "utilziadores"
              : "expeditores"}{" "}
            neste momento.
          </span>
        ) : (
          <TableData
            tableType={tableType}
            data={paginatedContent as (Orders | RegisteredUser)[]}
            tableForAdmin={tableForAdmin}
          />
        )}
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
      </TalbeWrapper>
    </FullPageWhiteContainer>
  );
};

export default Table;
