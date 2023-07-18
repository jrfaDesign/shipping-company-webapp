import React from "react";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { IconContainer } from "./styles";
import { useNavigate } from "react-router-dom";

interface Props {
  navigateLocation: string;
}

const GoBackButton = ({ navigateLocation }: Props) => {
  const navigate = useNavigate();
  return (
    <IconContainer onClick={() => navigate(navigateLocation)}>
      <ChevronLeftIcon />
    </IconContainer>
  );
};

export default GoBackButton;
