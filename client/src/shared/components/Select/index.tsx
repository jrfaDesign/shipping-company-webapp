import React from "react";

import {
  StyledFormControl,
  StyledInputLabel,
  StyledSelect,
  StyledMenuItem,
  StyledSelectWrapper
} from "./styles";

interface Props {
  label?: string;
  value: string | number | (string | number)[] | undefined | null;
  options: OptionsProps[];
  onChange: any;
  style?: "standard" | "outlined";
  multiple?: boolean;
  margin?: string;
}

interface OptionsProps {
  //value: string | number | ``
  label: string;
}

const StyledSelectComponent = ({
  margin,
  label,
  style,
  value,
  options,
  onChange,
  multiple
}: Props) => {
  return (
    <StyledSelectWrapper margin={margin}>
      <StyledFormControl variant={style ? style : "standard"} sx={{ color: "pink" }}>
        <StyledInputLabel id="demo-simple-select-standard-label">{label}</StyledInputLabel>
        <StyledSelect
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          onChange={onChange}
          label={label}
          multiple={multiple}
        >
          {options.map((option: any) => (
            <StyledMenuItem key={option.value} id={option.label} value={option.value}>
              {option.label}
            </StyledMenuItem>
          ))}
        </StyledSelect>
      </StyledFormControl>
    </StyledSelectWrapper>
  );
};

export default StyledSelectComponent;
