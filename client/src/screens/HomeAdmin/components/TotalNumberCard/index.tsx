import React from "react";
import { Orders } from "~/types/app";

import dayjs from "dayjs";

import { useNavigate } from "react-router-dom";
import useDatePickerStore from "~/hooks/stores/datePicker";

import { theme } from "~/styles/theme";
import StyledButton from "~/shared/components/Button";
import Loading from "~/shared/components/Loading";

import InfoCard from "../InfoCard";

import { GraphContainer } from "../../styles";
import { Wrapper, Container, Title, InfoWrapper, ButtonContainer } from "./styles";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BlockIcon from "@mui/icons-material/Block";

interface Props {
  orders: Orders[];
  loading: boolean;
}

const TotalNumberCard = ({ orders, loading }: Props) => {
  const navigate = useNavigate();
  const dateRange = useDatePickerStore((state) => state.dateRange);

  const [startDate, endDate] = dateRange;

  const CARD_DATA = [
    {
      label: "Completas",
      amount: orders?.filter((order) => order.deliveryStatus === "Completed").length,
      icon: <CheckCircleOutlineIcon />,
      color: theme.data.green
    },
    {
      label: "Em distribuição",
      amount: orders?.filter((order) => order.deliveryStatus === "On the road").length,
      icon: <LocalShippingIcon />,
      color: theme.data.yellow
    },
    {
      label: "Canceladas",
      amount: orders?.filter((order) => order.deliveryStatus === "Cancelled").length,
      icon: <BlockIcon />,
      color: theme.data.red
    }
  ];

  return (
    <GraphContainer width="100%">
      {loading || !startDate || !endDate ? (
        <Loading />
      ) : (
        <Wrapper>
          <Container>
            <Title>
              <p>
                Total de encomendas entre: {dayjs(startDate).format("DD-MMM-YYYY")} e{" "}
                {dayjs(endDate).format("DD-MMM-YYYY")}
              </p>
            </Title>

            <InfoWrapper>
              {CARD_DATA.map((card) => (
                <InfoCard data={card}></InfoCard>
              ))}
            </InfoWrapper>
            <ButtonContainer>
              <StyledButton text="Ver todas" onClick={() => navigate("/encomendas")} />
            </ButtonContainer>
          </Container>
        </Wrapper>
      )}
    </GraphContainer>
  );
};

export default TotalNumberCard;
