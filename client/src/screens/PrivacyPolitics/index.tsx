import React from "react";

import styled from "styled-components";

import ContentContainer from "~/shared/components/ContentContainer";
import Section from "~/shared/components/Section";

const PrivacyPolitics = () => {
  return (
    <Section>
      <ContentContainer>
        <PageTitle>Política de Privacidade</PageTitle>
        <TextContainer>
          <p>
            Esta política de privacidade descreve como os seus dados pessoais são recolhidos,
            utilizados e partilhados quando utiliza o nosso website [inserir nome do website].
          </p>
          <h5>Recolha de Dados Pessoais</h5>
          <p>
            Quando visita o nosso website, recolhemos automaticamente determinadas informações sobre
            o seu dispositivo, incluindo informações sobre o seu navegador web, endereço IP, fuso
            horário e alguns dos cookies instalados no seu dispositivo. Além disso, quando navega no
            nosso website, recolhemos informações sobre as páginas web ou produtos que visualiza,
            quais os websites ou termos de pesquisa que lhe trouxeram ao nosso website e informações
            sobre como interage com o nosso website. Referimo-nos a estas informações
            automaticamente recolhidas como "Informações do dispositivo".
          </p>
          <h5>Recolhemos informações do dispositivo usando as seguintes tecnologias:</h5>

          <li>
            "Cookies" são ficheiros de dados que são colocados no seu dispositivo ou computador e
            muitas vezes incluem um identificador anónimo único. Para mais informações sobre os
            cookies e como desativá-los, consulte a nossa política de cookies.
          </li>
          <li>
            "Arquivos de log" rastreiam as ações que ocorrem no nosso website e recolhem dados,
            incluindo o seu endereço IP, tipo de navegador, provedor de serviços de Internet,
            páginas de referência/saída e carimbos de data/hora.
          </li>
          <li className="last-li">
            "Web beacons", "tags" e "pixels" são imagens eletrónicas usadas para registar
            informações sobre como navega no nosso website. melhorar a maneira como ele funciona.
          </li>
          <h5>Utilização de Dados Pessoais</h5>
          <p>
            Usamos as informações do dispositivo para nos ajudar a melhorar e otimizar o nosso
            website (por exemplo, ao gerar análises sobre como os nossos clientes navegam e
            interagem com o website) e para fins publicitários e de retargeting.
          </p>
          <h5>Partilha de Dados Pessoais</h5>
          <p>
            Não partilhamos os seus dados pessoais com terceiros, exceto conforme descrito acima.
            Por exemplo, usamos o Google Analytics para nos ajudar a entender como os nossos
            clientes usam o website - pode ler mais sobre como o Google usa os seus dados pessoais
            aqui: https://www.google.com/intl/pt/policies/privacy/. Também pode desativar o Google
            Analytics aqui: https://tools.google.com/dlpage/gaoptout.
          </p>
          <h5>Segurança de Dados Pessoais</h5>
          <p>
            Tomamos medidas razoáveis para proteger as suas informações pessoais contra perda, roubo
            e utilização indevida, bem como contra acesso não autorizado, divulgação, alteração e
            destruição.
          </p>
          <h5>Os seus direitos</h5>
          <p>
            Se é residente na União Europeia, tem o direito de aceder às informações pessoais que
            detemos sobre si e de solicitar que as suas informações pessoais sejam corrigidas,
            atualizadas ou apagadas. Se deseja exercer este direito, contacte-nos através do email
            [inserir endereço de email]. Além disso, se é residente na União Europeia, observamos
            que estamos a processar as suas informações para cumprir os contratos que possamos ter
            consigo (por exemplo, se fizer uma encomenda através do website) ou para prosseguir os
            nossos interesses comerciais legítimos listados acima.
          </p>
        </TextContainer>
      </ContentContainer>
    </Section>
  );
};

export default PrivacyPolitics;

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

  li {
    font-size: 16px;
    color: rgb(120, 119, 120);
    font-weight: 400;
    line-height: 24px;
    text-align: justify;
    margin-bottom: 10px;
  }

  .last-li {
    padding-bottom: 40px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.softGrey};
    margin-bottom: 40px;
  }
`;
