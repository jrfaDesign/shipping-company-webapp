import { Dispatch, SetStateAction } from "react";

import { Orders, RegisteredShipper, RegisteredUser } from "~/types/app";

import { useNavigate } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";

import { Container, MenuIconContainer } from "./styles";

interface Props {
  tableType: "orders" | "users" | "shippers";
  originalData: (Orders | RegisteredUser | RegisteredShipper)[];
  setSelectedData: Dispatch<SetStateAction<(Orders | RegisteredUser | RegisteredShipper)[]>>;
  filterMenuIsOpen: boolean;
  handleClickFilterBtn: (event: React.MouseEvent<HTMLButtonElement>) => void;
  filterInformation: any;
}

const OptionsButtons = ({
  tableType,
  originalData,
  setSelectedData,
  filterMenuIsOpen,
  handleClickFilterBtn,
  filterInformation
}: Props) => {
  const navigate = useNavigate();

  const handleAddButtonAction = () => {
    switch (tableType) {
      case "orders":
        return navigate("/encomendas/nova-encomeda");
      case "users":
        return navigate("/utilizadores/novo-utilizador");
      case "shippers":
        return navigate("/expeditores/novo-expeditor");
    }
  };
  return (
    <Container>
      {filterInformation && filterInformation.length > 0 && (
        <MenuIconContainer
          onClick={handleClickFilterBtn as any}
          filterMenuIsOpen={filterMenuIsOpen}
        >
          <FilterListIcon />
        </MenuIconContainer>
      )}
      <MenuIconContainer onClick={() => handleAddButtonAction()}>
        <AddIcon />
      </MenuIconContainer>
    </Container>
  );
};

export default OptionsButtons;
