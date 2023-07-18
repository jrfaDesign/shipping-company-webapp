import React, { Fragment } from "react";
import { useTheme } from "styled-components";

import { InputWrapper, InputWithStyled } from "./styles";

interface Props {
  id: string;
  type: "text" | "password" | "email" | "number" | "date" | "file";
  label: string | undefined;
  value: string | number | undefined | null;
  error?: boolean;
  errorText?: string | undefined;
  multiline?: boolean;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined;
  hasBackground?: boolean;
  margin?: string;
  maxWidth?: string;
  disabled?: boolean;
  guideLine?: string;
  width?: string;
}

const StyledInput = ({
  id,
  type,
  label,
  value,
  error,
  errorText,
  multiline,
  onChange,
  disabled,
  guideLine,
  width
}: Props) => {
  return (
    <InputWrapper width={width}>
      <InputWithStyled
        id={id}
        type={type}
        rows={5}
        label={label}
        value={value}
        error={error}
        variant={"outlined"}
        helperText={errorText}
        multiline={multiline}
        onChange={onChange}
        disabled={disabled}
      />
      {!error && !errorText && guideLine && <div className="guideLine">{guideLine}</div>}
    </InputWrapper>
  );
};

export default StyledInput;
