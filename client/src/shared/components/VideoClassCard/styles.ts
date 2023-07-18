import styled from "styled-components";

export const CardComponent = styled.div`
  cursor: pointer;

  width: 270px;
  height: 360px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

  h4 {
    font-size: 14px;
    padding: 10px 10px;
  }

  p {
    margin: 10px;
    font-size: 12px;

    padding: 0 2px;
  }

  button {
    margin: 10px;
  }
`;

export const ImageContainer = styled.div`
  margin-bottom: 15px;
  width: 270px;
  height: 200px;

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
