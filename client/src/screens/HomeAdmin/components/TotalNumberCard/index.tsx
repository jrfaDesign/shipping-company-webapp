import React from "react";
import { Order } from "~/types/app";

import dayjs from "dayjs";

import { useNavigate } from "react-router-dom";
import { useAppSelector } from "~/store/hooks";

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
  orders: Order[] | null;
}

const TotalNumberCard = ({ orders }: Props) => {
  const navigate = useNavigate();

  const loading = useAppSelector((state) => state.orders.isLoading);
  const dateRange = useAppSelector((state) => state.datePicker.dateRange);

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
      {loading && <Loading />}
      {!loading && orders && (
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
                <InfoCard data={card as any}></InfoCard>
              ))}
            </InfoWrapper>
            <ButtonContainer>
              <StyledButton text="Ver todas" onClick={() => navigate("/encomendas")} />
            </ButtonContainer>
          </Container>
        </Wrapper>
      )}
      {!loading && orders?.length === 0 && <div>no orders</div>}
    </GraphContainer>
  );
};

export default TotalNumberCard;
