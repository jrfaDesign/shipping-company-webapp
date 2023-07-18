import styled from "styled-components";
import TextField from "@mui/material/TextField";

interface InputWrapperProps {
  width: string;
}

export const InputWrapper = styled.div<InputWrapperProps>`
  max-width: ${(props) => (props.width ? props.width : "100%")};

  .guideLine {
    color: ${(props) => props.theme.colors.lightBlue};
    padding-left: 14px;
    text-align: left;
    margin-top: 3px;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.66;
    letter-spacing: 0.03333em;
  }
`;

export const InputWithStyled = styled(TextField)`
  width: 100%;

  .MuiTextField-root {
    display: none;
  }

  label.Mui-focused {
    color: ${({ theme }) => theme.colors.lightBlue};
  }

  .MuiInput-underline:after {
    border-bottom-color: ${({ theme }) => theme.colors.lightBlue};
  }
  .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: ${({ theme }) => theme.colors.lightBlue};
    }
    &.Mui-focused fieldset {
      border-color: ${({ theme }) => theme.colors.lightBlue};
    }
  }
`;
