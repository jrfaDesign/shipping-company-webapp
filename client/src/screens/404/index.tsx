import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserStore } from "~/hooks/stores/user";
import StyledButton from "~/shared/components/Button";

import Background404 from "~/assets/images/svgs/404background.svg";

import { Wrapper, Container, Heading, Subheading, Background } from "./styles";

const Error = () => {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  const currentLocation = useLocation().pathname;

  useEffect(() => {
    if (currentLocation !== "/") {
      navigate("/404");
    }
  }, []);

  return (
    <Wrapper>
      <Container>
        <div>
          <Heading>404</Heading>
          <Subheading>Ooops!... Página não encontrada.</Subheading>

          <StyledButton
            text="Página Inicial"
            onClick={() => (user ? navigate("/") : navigate("/login"))}
          />
        </div>
      </Container>
      <Background img={Background404} />
    </Wrapper>
  );
};

export default Error;
