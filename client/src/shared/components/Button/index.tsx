import React from "react";
import IconButton from "@mui/material/IconButton";
import { ButtonStyled } from "./styles";
import { useTheme } from "styled-components";
import { Stack } from "@mui/system";

interface Props {
  variant?: "text" | "contained" | "outlined";
  disabled?: boolean;
  onClick: () => void;
  text?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const StyledButton = ({ variant, disabled, onClick, text, startIcon, endIcon }: Props) => {
  const theme = useTheme();
  if (text) {
    return (
      <ButtonStyled
        variant={variant ?? "contained"}
        disabled={disabled}
        onClick={onClick}
        startIcon={startIcon}
        endIcon={endIcon}
      >
        {text}
      </ButtonStyled>
    );
  } else {
    return (
      <Stack sx={{ color: theme.colors.lightBlue }}>
        <IconButton color={"inherit"} onClick={onClick}>
          {startIcon ? startIcon : endIcon}
        </IconButton>
      </Stack>
    );
  }
};

export default StyledButton;
