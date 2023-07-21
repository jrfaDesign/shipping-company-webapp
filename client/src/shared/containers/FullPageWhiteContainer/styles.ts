import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .no-data {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
