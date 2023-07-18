import React from "react";

import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";

import { Container, MenuIconContainer } from "./styles";

const OptionsButtons = () => {
  return (
    <Container>
      <MenuIconContainer>
        <FilterListIcon />
      </MenuIconContainer>
      <MenuIconContainer>
        <AddIcon />
      </MenuIconContainer>
    </Container>
  );
};

export default OptionsButtons;
