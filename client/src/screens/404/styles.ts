import styled from "styled-components";
import { desktop } from "~/styles/theme";

export const Wrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  height: 80vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  margin-bottom: 40px;
`;

export const Subheading = styled.h2`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 40px;

  ${desktop} {
    max-width: 50%;
  }
`;
