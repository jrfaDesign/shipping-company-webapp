import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import { useScreenWidth } from "~/hooks/globalHooks";

import SearchInput from "~/shared/components/SearchInput";
import DropdownMenu from "~/shared/components/Table/TableFilters/components/DropdownMenu";

import { Orders, RegistedShipper, RegisteredUser } from "~/types/app";
import OptionsButtons from "./components/OptionsButtons";

import { Container, TextOptionsContainer, SearchInputContainer, TotalText } from "./styles";
import { getFilterOptions } from "./utils";
interface Props {
  tableType: "orders" | "users" | "shippers";
  originalData: (Orders | RegisteredUser | RegistedShipper)[];
  selectedData: (Orders | RegisteredUser | RegistedShipper)[] | null;
  setSelectedData: Dispatch<SetStateAction<(Orders | RegisteredUser | RegistedShipper)[]>>;
  tableForAdmin?: boolean;
}

const Filters = ({
  tableType,
  originalData,
  selectedData,
  setSelectedData,
  tableForAdmin
}: Props) => {
  const screenWidth = useScreenWidth();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClickFilterBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [searchField, setSearchField] = useState("");
  const filterInformation = getFilterOptions(tableType, originalData, tableForAdmin);
  const [filterOptions, setFilterOptions] = useState();

  useEffect(() => {
    // set filterOptions based on the filterInformation at the start of this component
    if (filterInformation) {
      const initialStateObject = filterInformation.reduce((acc: any, current) => {
        acc[current.label] = [];
        return acc;
      }, {});

      setFilterOptions(initialStateObject as any);
    }
  }, []);

  useEffect(() => {
    // TODO :  This handles all filters, to add new options we need to add in the getFilterOptions() function
    // TODO :  the selector and the respective options and add in the filterLabelToObjectKey the key to match to object key
    const filterLabelToObjectKey = {
      Expeditor: "shipper._id",
      Cidade: "client.state",
      "Estado de Entrega": "deliveryStatus"
    };

    const filteredData = originalData.filter((data: any) => {
      const lowerSearchField = searchField.toLowerCase();
      const { shipper, client } = data;

      if (tableType === "orders") {
        if (
          client.name.toLowerCase().includes(lowerSearchField) ||
          client.lastName.toLowerCase().includes(lowerSearchField)
        ) {
          return true;
        } else if (tableForAdmin && shipper.name.toLowerCase().includes(lowerSearchField)) {
          return true;
        } else if (client.deliveryAddress.toLowerCase().includes(lowerSearchField)) {
          return true;
        } else if (client.requestedClient.toLowerCase().includes(lowerSearchField)) {
          return true;
        }
      } else if (tableType === "users") {
        if (data.name.toLowerCase().includes(lowerSearchField)) {
          return true;
        } else if (data.company.toLowerCase().includes(lowerSearchField)) {
          return true;
        }
      } else if (tableType === "shippers") {
        if (data.name.toLowerCase().includes(lowerSearchField)) {
          return true;
        } else if (data.email.toLowerCase().includes(lowerSearchField)) {
          return true;
        } else if (data.address.toLowerCase().includes(lowerSearchField)) {
          return true;
        } else if (data.state.toLowerCase().includes(lowerSearchField)) {
          return true;
        }
      }
    });

    let filteredDataWithFilters = filteredData;

    if (filterOptions) {
      filteredDataWithFilters = filteredData.filter((data: any) =>
        Object.keys(filterOptions).every((filterOption: string) => {
          const objectKey = (filterLabelToObjectKey as any)[filterOption];

          if (!filterOptions[filterOption] || (filterOptions[filterOption] as any).length === 0) {
            // If the filter option has no value, consider it a match
            return true;
          }

          const objectKeys = objectKey.split(".");
          const objectValue = objectKeys.reduce(
            (obj: any, key: any) => (obj && obj[key] !== undefined ? obj[key] : undefined),
            data
          );

          if (objectValue === undefined) {
            // If any key in the objectKeys is undefined, consider it a non-match
            return false;
          }

          return (filterOptions[filterOption] as any).includes(objectValue);
        })
      );
    }

    setSelectedData(filteredDataWithFilters);
  }, [searchField, filterOptions]);

  return (
    <Container>
      <TextOptionsContainer>
        <TotalText>Total : {selectedData?.length}</TotalText>
        {screenWidth < 769 && (
          <OptionsButtons
            tableType={tableType}
            originalData={originalData}
            setSelectedData={setSelectedData}
            filterMenuIsOpen={open}
            handleClickFilterBtn={handleClickFilterBtn}
            filterInformation={filterInformation}
          />
        )}
      </TextOptionsContainer>

      <SearchInputContainer>
        <SearchInput
          type="search"
          placeholder={
            tableType === "orders"
              ? "Procurar por morada ou cliente destino"
              : "Procurar por nome ou empresa"
          }
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
        />
      </SearchInputContainer>

      {screenWidth >= 769 && (
        <OptionsButtons
          tableType={tableType}
          originalData={originalData}
          setSelectedData={setSelectedData}
          filterMenuIsOpen={open}
          handleClickFilterBtn={handleClickFilterBtn}
          filterInformation={filterInformation}
        />
      )}
      {filterInformation && filterOptions && (
        <DropdownMenu
          filterInformation={filterInformation}
          filterOptions={filterOptions}
          setFilterOptions={setFilterOptions}
          anchorEl={anchorEl}
          open={open}
          handleClose={handleClose}
        />
      )}
    </Container>
  );
};

export default Filters;
