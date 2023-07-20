import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import { useScreenWidth } from "~/hooks/globalHooks";

import SearchInput from "~/shared/components/SearchInput";
import DropdownMenu from "~/shared/containers/Header/components/Menu/components/DropdownMenu";

import { Orders, RegisteredUser } from "~/types/app";
import OptionsButtons from "./components/OptionsButtons";

import { Container, TextOptionsContainer, SearchInputContainer, TotalText } from "./styles";
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

  useEffect(() => {
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

    setSelectedData(filteredData);
  }, [searchField]);

  return (
    <Container>
      <TextOptionsContainer>
        <TotalText>Total : {selectedData.length}</TotalText>
        {screenWidth < 769 && (
          <OptionsButtons
            tableType={tableType}
            origialData={origialData}
            setSelectedData={setSelectedData}
            filterMenuIsOpen={open}
            handleClickFilterBtn={handleClickFilterBtn}
          />
        )}
      </TextOptionsContainer>

      <SearchInputContainer>
        <SearchInput
          type="search"
          placeholder={
            tableType === "orders"
              ? "Procurar por morada ou cliente destino"
              : "Procura por nome de cliente ou empresa"
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
        />
      )}
      <DropdownMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
    </Container>
  );
};

export default Filters;
