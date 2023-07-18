import styled from "styled-components";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormControl } from "@mui/material";

export const StyledFormControl = styled(FormControl)`
  .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: ${({ theme }) => theme.colors.darkBlue} !important;
  }
  .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: ${({ theme }) => theme.colors.darkBlue} !important;
  }
  .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.colors.darkBlue};
  }
  .cJlDmk.cJlDmk {
    border-radius: none;
  }
  && {
    width: 100%;

    .css-m5hdmq-MuiInputBase-root-MuiInput-root-MuiSelect-root:after {
      border-bottom: 2px solid ${({ theme }) => theme.colors.darkBlue};
    }
  }
`;

export const StyledInputLabel = styled(InputLabel)`
  && {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-weight: 500;
  }
`;

export const StyledSelect = styled(Select)`
  && {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkBlue};
    border-radius: 8px;
    width: 100%;
    &:focus {
      background-color: red;
    }
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  && {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;

interface StyledSelectWrapperProps {
  margin?: string;
}

export const StyledSelectWrapper = styled.div<StyledSelectWrapperProps>`
  width: 100%;
  margin: ${(props) => props.margin};
`;
