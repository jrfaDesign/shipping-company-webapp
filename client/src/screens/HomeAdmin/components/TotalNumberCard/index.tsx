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
import { InfoWrapper, ButtonContainer } from "./styles";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BlockIcon from "@mui/icons-material/Block";

interface Props {
  orders: Order[] | null;
}

const TotalNumberCard = ({ orders }: Props) => {
  const loading = useAppSelector((state) => state.orders.isLoadingOrderForThisWeek);

  const CARD_DATA = [
    {
      graph: "graph1",
      label: "Completas",
      amount: orders?.filter((order) => order.deliveryStatus === "Completed").length,
      icon: <CheckCircleOutlineIcon />,
      color: theme.data.green
    },
    {
      graph: "graph2",
      label: "Em distribuição",
      amount: orders?.filter((order) => order.deliveryStatus === "On the road").length,
      icon: <LocalShippingIcon />,
      color: theme.data.yellow
    },
    {
      graph: "graph3",
      label: "Canceladas",
      amount: orders?.filter((order) => order.deliveryStatus === "Cancelled").length,
      icon: <BlockIcon />,
      color: theme.data.red
    }
  ];

  return (
    <>
      {CARD_DATA.map((card) => {
        return (
          <GraphContainer width="100%" className={card.graph} key={card.graph}>
            {loading && <Loading height="250px" />}
            {!loading && orders && (
              <InfoWrapper>
                <InfoCard key={card.graph} data={card as any}></InfoCard>
              </InfoWrapper>
            )}
          </GraphContainer>
        );
      })}
    </>
  );
};

export default TotalNumberCard;
