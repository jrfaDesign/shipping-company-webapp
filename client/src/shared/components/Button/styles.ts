import styled from "styled-components";
import Button from "@mui/material/Button";

interface ButtonProps {
  variant?: "text" | "contained" | "outlined";
}

export const ButtonStyled = styled(Button)<ButtonProps>`
  && {
    width: 100%;
    background: ${(props) => (props.variant === "contained" ? props.theme.colors.lightBlue : "")};
    padding: ${(props) => (props.variant === "contained" ? "10px" : "")};
    color: ${(props) =>
      props.variant === "contained" ? props.theme.colors.white : props.theme.colors.lightBlue};

    &:hover {
      background: ${(props) => (props.variant === "contained" ? props.theme.colors.darkBlue : "")};
    }
  }
`;
