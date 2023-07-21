import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import { useScreenWidth } from "~/hooks/globalHooks";

import SearchInput from "~/shared/components/SearchInput";
import DropdownMenu from "~/shared/containers/Header/components/Menu/components/DropdownMenu";

import { Orders, RegisteredUser } from "~/types/app";
import OptionsButtons from "./components/OptionsButtons";

import { Container, TextOptionsContainer, SearchInputContainer, TotalText } from "./styles";
import { getFilterOptions } from "./utils";
interface Props {
  tableType: "orders" | "users";
  origialData: (Orders | RegisteredUser)[];
  selectedData: (Orders | RegisteredUser)[] | null;
  setSelectedData: Dispatch<SetStateAction<(Orders | RegisteredUser)[]>>;
}

const Filters = ({ tableType, origialData, selectedData, setSelectedData }: Props) => {
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
  const filterInformation = getFilterOptions(tableType, origialData);
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
    // TODO :  This handles all filters, to add new options we need to add in the getFilterOptions()
    // TODO : function the selector and the respective options and add in the filterLabelToObjectKey the key to match to object key
    const filterLabelToObjectKey = {
      Cidade: "state",
      "Estado de Entrega": "deliveryStatus"
    };

    const filteredData = origialData.filter((data: any) => {
      const lowerSearchField = searchField.toLowerCase();

      if (
        (data.name && data.lastName && data.name.toLowerCase().includes(lowerSearchField)) ||
        (data.lastName && data.lastName.toLowerCase().includes(lowerSearchField))
      ) {
        return true;
      } else if (data.company && data.company.toLowerCase().includes(lowerSearchField)) {
        return true;
      } else if (
        data.deliveryAddress &&
        data.deliveryAddress.toLowerCase().includes(lowerSearchField)
      ) {
        return true;
      } else if (
        data.requestedClient &&
        data.requestedClient.toLowerCase().includes(lowerSearchField)
      ) {
        return true;
      } else {
        return false;
      }
    });

    let filteredDataWithFilters = filteredData;

    if (filterOptions) {
      filteredDataWithFilters = filteredData.filter((data: any) =>
        Object.keys(filterOptions).every((filterOption: string) => {
          if (!filterOptions[filterOption] || filterOptions[filterOption].length === 0) {
            // If the filter option has no value, consider it a match
            return true;
          }
          return (
            data[filterLabelToObjectKey[filterOption]] &&
            filterOptions[filterOption].includes(data[filterLabelToObjectKey[filterOption]])
          );
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
            origialData={origialData}
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
          origialData={origialData}
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
