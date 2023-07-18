interface Props {
  type: "text" | "search" | undefined;
  placeholder?: string;
  value: string;
  onChange: (event: any) => void;
}

import { AccountCircle } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import { StyledInput } from "./styles";

const SearchInput = ({ type, placeholder, value, onChange }: Props) => {
  return <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />;
};

export default SearchInput;
