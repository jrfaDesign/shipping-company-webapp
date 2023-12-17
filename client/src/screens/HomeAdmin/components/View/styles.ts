import styled from "styled-components";
import { mobile, tablet, desktop } from "~/styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  height: 95%;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const GridContainer = styled.div`
  width: 100%;

  ${mobile} {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .graph1 {
      order: 2;
    }
    .graph2 {
      order: 3;
    }
    .graph3 {
      order: 4;
    }
    .graph4 {
      order: 1;
    }
    .graph5 {
      order: 6;
    }
    .graph6 {
      order: 5;
    }
  }

  ${tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 200px 400px 1fr;
    gap: 10px 10px;
    grid-template-areas:
      "graph1 graph1 graph2 graph2 graph3 graph3"
      "graph4 graph4 graph4 graph6 graph6 graph6 "
      "graph5 graph5 graph5 graph5 graph5 graph5";

    .graph1 {
      grid-area: graph1;
    }
    .graph2 {
      grid-area: graph2;
    }
    .graph3 {
      grid-area: graph3;
    }
    .graph4 {
      grid-area: graph4;
    }
    .graph5 {
      grid-area: graph5;
    }
    .graph6 {
      grid-area: graph6;
    }
    .graph7 {
      grid-area: graph7;
    }
    .graph8 {
      grid-area: graph8;
    }
  }

  ${desktop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 0.5fr 1fr;
    gap: 15px 15px;
    grid-template-areas:
      "graph1 graph2 graph3 graph4"
      "graph5 graph5 graph5 graph6"
      ". . . .";

    .graph1 {
      grid-area: graph1;
    }
    .graph2 {
      grid-area: graph2;
    }
    .graph3 {
      grid-area: graph3;
    }
    .graph4 {
      grid-area: graph4;
    }
    .graph5 {
      grid-area: graph5;
    }
    .graph6 {
      grid-area: graph6;
    }
  }
`;
