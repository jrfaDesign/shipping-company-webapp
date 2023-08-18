import styled from "styled-components";

export const GraphContainer = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.black02};
  padding: 10px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;
