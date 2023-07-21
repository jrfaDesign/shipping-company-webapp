import { Dispatch, SetStateAction } from "react";

import { Orders, RegisteredUser } from "~/types/app";

import { useNavigate } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";

import { Container, MenuIconContainer } from "./styles";

interface Props {
  tableType: "orders" | "users";
  origialData: (Orders | RegisteredUser)[];
  setSelectedData: Dispatch<SetStateAction<(Orders | RegisteredUser)[]>>;
  filterMenuIsOpen: boolean;
  handleClickFilterBtn: (event: React.MouseEvent<HTMLButtonElement>) => void;
  filterInformation: any;
}

const OptionsButtons = ({
  tableType,
  origialData,
  setSelectedData,
  filterMenuIsOpen,
  handleClickFilterBtn,
  filterInformation
}: Props) => {
  const navigate = useNavigate();
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
      <MenuIconContainer
        onClick={() =>
          navigate(
            tableType === "orders" ? "/encomendas/nova-encomeda" : "/utilizadores/novo-utilizador"
          )
        }
      >
        <AddIcon />
      </MenuIconContainer>
    </Container>
  );
};

export default OptionsButtons;
