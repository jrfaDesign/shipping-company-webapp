import React from "react";

import styled from "styled-components";

import ContentContainer from "~/shared/components/ContentContainer";
import Section from "~/shared/components/Section";

const Cookies = () => {
  return (
    <Section>
      <ContentContainer>
        <PageTitle>Política de cookies</PageTitle>
        <TextContainer>
          <h5>O que são cookies?</h5>
          <p>
            Os cookies são pequenos arquivos de texto que são armazenados no seu computador ou
            dispositivo móvel quando você visita um site. Eles são amplamente utilizados para fazer
            com que os sites funcionem ou funcionem de maneira mais eficiente, além de fornecer
            informações aos proprietários do site.
          </p>
          <h5>Quais cookies usamos?</h5>
          <p>
            Usamos cookies de sessão e cookies persistentes para este site. Os cookies de sessão são
            cookies temporários que são excluídos automaticamente do seu computador ou dispositivo
            móvel quando fecha o navegador. Eles são usados para melhorar o desempenho do site e
            para armazenar informações temporárias. Já os cookies persistentes permanecem até que os
            exclua manualmente ou até que expirem. Eles são usados para melhorar a experiência do
            utilizador e para lembrar as preferências do mesmo. Também usamos cookies de terceiros
            que fornecem serviços para o nosso site, como análise da web. Esses cookies podem ser
            usados ​​para retirar informações sobre como usa o nosso site, para que possamos
            melhorar a maneira como ele funciona.
          </p>
          <h5>Controlar cookies</h5>
          <p>
            Pode controlar os cookies que são armazenados no seu computador ou dispositivo móvel por
            meio das configurações do navegador. Observe que desativar cookies pode afetar a
            funcionalidade do site e limitar sua capacidade de usar todas as características do
            site.
          </p>
          <h5>Alterações na política de cookies</h5>
          <p>
            Podemos atualizar esta política de cookies periodicamente. Quaisquer alterações que
            fizermos nesta política de cookies serão publicadas nesta página. Por favor, verifique
            esta página regularmente para garantir que esteja ciente de quaisquer atualizações ou
            alterações nesta política de cookies.
          </p>
        </TextContainer>
      </ContentContainer>
    </Section>
  );
};

export default Cookies;

const PageTitle = styled.h2`
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 30px;
`;

const TextContainer = styled.div`
  width: 100%;

  h5 {
    font-size: 30px;
    margin-bottom: 15px;
  }

  p {
    padding-bottom: 40px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.softGrey};
    margin-bottom: 40px;
  }

  p:last-child {
    border-bottom: 0px solid ${({ theme }) => theme.colors.softGrey};
  }
`;
