import { useNavigate } from "react-router-dom";

import { Container, LogoText } from "./styles";

import LogoImage from "~/assets/images/imgs/logo.png";

export default function Logo() {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate("/")}>
      {/* <img src={LogoImage} /> */}
      <LogoText>SwiftShip</LogoText>
    </Container>
  );
}
