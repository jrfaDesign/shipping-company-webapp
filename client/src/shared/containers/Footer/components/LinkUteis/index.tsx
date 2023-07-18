import React from "react";

import { Container, NavMenu, Link } from "./styles";

const LinkUteis = () => {
  return (
    <Container>
      <h6>Links Úteis</h6>

      <NavMenu>
        <Link to="/politicas-de-privacidade">Política de Privacidade e Proteção de Dados</Link>
        <Link to="/cookies">Política de cookies</Link>
        <Link to="https://www.livroreclamacoes.pt/Inicio/" target={"_blank"}>
          Livro de Reclamações
        </Link>
      </NavMenu>
    </Container>
  );
};

export default LinkUteis;
