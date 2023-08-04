import { useMemo, useState } from "react";

import { Orders, RegisteredUser } from "~/types/app";

import HorizontalScrollContainer from "~/shared/containers/HorizontalScrollContainer";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import { Container, OrdersTable, OrderContainer, Cell, Header } from "./styles";
import {
  KEY_TO_LABEL,
  SORT_EXCEPTIONS,
  STATUS_CLASS,
  STATUS_LABEL,
  TableHeaders,
  TABLE_HEADER
} from "./utils";

interface Props {
  tableType: "orders" | "users";
  tableForAdmin?: boolean;
  data: (Orders | RegisteredUser)[];
}

const TableData = ({ tableType, tableForAdmin, data }: Props) => {
  const [sortState, setSortState] = useState<"asc" | "desc" | "unsorted">("unsorted");
  const [sortKey, setSortKey] = useState<string | null>(null);

  function formatDate(dateString: String) {
    const date = new Date(dateString as any);
    const formattedDate = date.toLocaleDateString("en-GB");
    return formattedDate;
  }

  const sortData = (key: any) => {
    const objectKey = KEY_TO_LABEL[key] as any;

    // TODO: add exception if no sort function is to be enable
    if (SORT_EXCEPTIONS.includes(objectKey)) {
      return null;
    }

    if (sortKey === objectKey) {
      setSortState(sortState === "asc" ? "desc" : "asc");
    } else {
      setSortKey(objectKey);
      setSortState("asc");
    }
  };

  /* The `sortedData` variable is using the `useMemo` hook to memoize the sorted data based on the
  current sort state and sort key. And then we will use it to display in the table */
  const getNestedValue = (obj: any, keys: string[]) => {
    return keys.reduce((acc, key) => (acc ? acc[key] : null), obj);
  };

  const sortedData = useMemo(() => {
    if (sortState === "unsorted") {
      return data;
    }

    const sortingMultiplier = sortState === "asc" ? 1 : -1;

    // Compare the values based on the sort key
    return [...data].sort((a: any, b: any) => {
      let aValue, bValue;

      if (sortKey!.includes(".")) {
        aValue = getNestedValue(a, sortKey!.split("."));
        bValue = getNestedValue(b, sortKey!.split("."));
      } else {
        aValue = a[sortKey!];
        bValue = b[sortKey!];
      }

      if (aValue < bValue) {
        return -1 * sortingMultiplier;
      }
      if (aValue > bValue) {
        return 1 * sortingMultiplier;
      }
      return 0;
    });
  }, [data, sortState, sortKey]);

  const SortIcon = (key: any) => {
    const objectKey = KEY_TO_LABEL[key] as any;

    if (SORT_EXCEPTIONS.includes(objectKey)) {
      return null;
    }
    if (sortKey === objectKey) {
      if (sortState === "asc") {
        return <ArrowDropUpIcon />;
      } else if (sortState === "desc") {
        return <ArrowDropDownIcon />;
      } else return null;
    } else return <ArrowRightIcon />;
  };

  return (
    <Container>
      <HorizontalScrollContainer width="100%" padding="0">
        <OrdersTable>
          <OrderContainer className="sticky-container">
            {(TABLE_HEADER[tableType] as any)
              .filter((header: any) => {
                if (tableForAdmin) {
                  return header.tableForAdmin || !header.tableForAdmin;
                } else if (!tableForAdmin) {
                  return !header.tableForAdmin;
                }
              })
              .map((headerText: any) => (
                <Header
                  key={headerText.label}
                  width={headerText?.width}
                  onClick={() => sortData(headerText.label)}
                >
                  {headerText.label}
                  {SortIcon(headerText.label)}
                </Header>
              ))}
          </OrderContainer>
          {tableType === "orders" && (
            <>
              {sortedData.map((data: any) => (
                <OrderContainer key={data._id}>
                  <Cell>{formatDate(data.requestedDate as any)}</Cell>
                  <Cell>
                    <span className={`status ${STATUS_CLASS[data.deliveryStatus]}`}>
                      {STATUS_LABEL[data.deliveryStatus]}
                    </span>
                  </Cell>
                  <Cell>{formatDate(data.deliveryDate as any)}</Cell>
                  {tableForAdmin && <Cell>{data.shipper._id} </Cell>}
                  {tableForAdmin && <Cell>{data.shipper.name} </Cell>}
                  <Cell>{data.weight} kg</Cell>
                  <Cell>{data.client.name} </Cell>
                  <Cell>{data.client.contact} </Cell>
                  <Cell>{data.client.email ? data.client.email : " - "} </Cell>
                  <Cell>{data.client.deliveryAddress}</Cell>
                  <Cell>{data.client.zip}</Cell>
                  <Cell>{data.client.state}</Cell>
                  <Cell>{data.client.region}</Cell>
                </OrderContainer>
              ))}
            </>
          )}
          {tableType === "users" && (
            <>
              {sortedData.map((data: any) => (
                <OrderContainer key={data._id}>
                  <Cell>{data._id}</Cell>
                  <Cell width="300px">
                    {data.name} {data.lastName}
                  </Cell>

                  <Cell>{data.contact}</Cell>
                  <Cell width="450px">{data.email ? data.email : " - "} </Cell>
                  <Cell width="300px">{data.company}</Cell>
                </OrderContainer>
              ))}
            </>
          )}
        </OrdersTable>
      </HorizontalScrollContainer>
    </Container>
  );
};

export default TableData;
