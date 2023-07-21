import React from "react";
import { Orders } from "~/types/app";
import WeekResumeGraph from "../WeekResumeGraph";

import { Container, GraphContainer, ContentWrapper } from "./styles";

interface Props {
  orders: Orders[];
}

const View = ({ orders }: Props) => {
  return (
    <Container>
      <div>Home Client</div>

      <ContentWrapper>
        <GraphContainer width={"30%"} height={"400px"}>
          <WeekResumeGraph />
        </GraphContainer>

        <GraphContainer width={"30%"} height={"400px"}>
          <WeekResumeGraph />
        </GraphContainer>
        <GraphContainer width={"30%"} height={"400px"}>
          <WeekResumeGraph />
        </GraphContainer>

        <GraphContainer width={"30%"} height={"400px"}>
          <WeekResumeGraph />
        </GraphContainer>
      </ContentWrapper>
    </Container>
  );
};

export default View;
