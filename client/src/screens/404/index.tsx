import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "~/hooks/stores/user";
import StyledButton from "~/shared/components/Button";

import { Wrapper, Container, Heading, Subheading } from "./styles";

const Error = () => {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <Heading>404</Heading>
        <Subheading>Uh-oh! Dead end Click here to return to the homepage</Subheading>

        <StyledButton text="Voltar" onClick={() => (user ? navigate("/") : navigate("/login"))} />
      </Container>
    </Wrapper>
  );
};

export default Error;
