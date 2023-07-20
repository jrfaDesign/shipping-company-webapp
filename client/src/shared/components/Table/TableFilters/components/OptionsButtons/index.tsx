import React from "react";

import { useNavigate } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";

import { Container, MenuIconContainer } from "./styles";

const OptionsButtons = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <MenuIconContainer>
        <FilterListIcon />
      </MenuIconContainer>
      <MenuIconContainer onClick={() => navigate("/encomendas/nova-encomeda")}>
        <AddIcon />
      </MenuIconContainer>
    </Container>
  );
};

export default OptionsButtons;
