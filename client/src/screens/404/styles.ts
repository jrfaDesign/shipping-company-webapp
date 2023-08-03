import { laptop } from "./../../styles/theme";
import styled from "styled-components";
import { desktop } from "~/styles/theme";

export const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

export const Container = styled.div`
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 30px;
    padding-bottom: 50px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.2);
  }

  button {
    max-width: 200px;
  }
`;

export const Heading = styled.h1`
  font-size: 7rem;
  font: 800 40px;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 4px ${({ theme }) => theme.colors.lightBlue};

  ${laptop} {
    font-size: 10rem;
  }
`;

export const Subheading = styled.h2`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 40px;

  ${desktop} {
    max-width: 50%;
  }
`;

interface BackgroundProps {
  img: any;
}

export const Background = styled.div<BackgroundProps>`
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 98;
`;
