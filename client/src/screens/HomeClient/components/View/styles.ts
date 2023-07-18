import styled from "styled-components";

export const Container = styled.div``;

interface GraphContainerProps {
  width: string;
  height: string;
}

export const GraphContainer = styled.div<GraphContainerProps>`
    border-radius 10px;
    background: white;

    align-items: center;
    justify-content: center;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    min-width: 280px;
    display: flex;
    align-items: center;
    margin: 10px 20px;

`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
