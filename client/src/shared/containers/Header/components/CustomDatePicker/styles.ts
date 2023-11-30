import styled, { createGlobalStyle } from "styled-components";

import DatePicker from "react-datepicker";
import { laptop } from "~/styles/theme";

export const DatePickerWrapperStyles = createGlobalStyle`
    .react-datepicker {
        padding: 10px;
        border: none;
        box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.3);

    }
    .react-datepicker__header {
        background: none
    }

    .react-datepicker__navigation {
        top: 17px;
        border-radius 8px;
        padding: 5px;
        margin: 0 10px;
        box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.2);
    }

    .react-datepicker__navigation-icon {
        top: 2px;
    }

    .react-datepicker__current-month{
        text-transform: capitalize;
        margin-bottom: 10px;
        padding: 5px 0px;
        font-weight: 500;
    }

    .react-datepicker__day--in-range {
        background : ${({ theme }: any) => theme.colors.lightBlue};
    }

    .react-datepicker__day--keyboard-selected{
        background: none;
        color: ${({ theme }: any) => theme.colors.lightBlue};
        font-weight: 500;
        border: 2px solid ${({ theme }: any) => theme.colors.lightBlue}
    }

`;

export const StyledDatePicker = styled(DatePicker)`
  font-size: 9.5px;
  border: 2px solid ${({ theme }) => theme.colors.lightBlue};
  border-radius: 4px;
  padding: 5px 10px;
  height: 22px;
  width: 120px;

  ${laptop} {
    font-size: 14px;
    width: 175px;
  }
`;
