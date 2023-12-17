import React from "react";

import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Order } from "~/types/app";
import { ViewOptionsType } from "../..";

import { useTheme } from "styled-components";
import { Title } from "./styles";

interface Props {
  option: ViewOptionsType;
  setOption: any;
  orders: Order[];
}

const ViewOptions = ({ option, setOption, orders }: Props) => {
  const theme = useTheme() as any;

  const radioStyles = {
    color: theme.colors.darkblue,
    "&.Mui-checked": {
      color: theme.colors.lightBlue
    },
    "& .MuiSvgIcon-root": {
      fontSize: 15
    }
  };

  const labelStyles = {
    "& .MuiFormControlLabel-label": {
      fontSize: 12
    }
  };

  return (
    <FormControl>
      <Title>{`Novas encomendas: ${orders?.length}`} </Title>
      <RadioGroup row value={option} onChange={(e) => setOption(e.target.value)}>
        <FormControlLabel
          className="option"
          value="requestedDate"
          control={<Radio size="small" sx={radioStyles} />}
          label="Dia pedido"
          sx={labelStyles}
        />
        <FormControlLabel
          className="option"
          value="deliveryDate"
          control={<Radio size="small" sx={radioStyles} />}
          label="Dia de entrega"
          sx={labelStyles}
        />
        <FormControlLabel
          className="option"
          value="lastStatusChangeDate"
          control={<Radio size="small" sx={radioStyles} />}
          label="Última alteração"
          sx={labelStyles}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default ViewOptions;
