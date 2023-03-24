import React from 'react';
import { withTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Button from './components/Button';

import Section from './containers/Section';

import {
    Container,
    BodyContainer,
    BodyFlexContainer,
    BodyAside,
    TitleText
} from './styles'

const Home = (props: any) => {

    const { t } = props

    const navigate = useNavigate()

    const handleGoToLogin = () => {
        navigate('/login')
    }

    return (
        <Container>
            <TitleText> {t('home_page')} </TitleText>
            <Button onClick={handleGoToLogin} />

            <BodyContainer>
                <BodyFlexContainer>
                    <Section />
                    <Section />
                    <Section />
                    <Section />
                </BodyFlexContainer>

                <BodyAside >
                    <h3>Mock Title Aside</h3>
                    <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
                    <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
                </BodyAside>

            </BodyContainer>
        </Container>
    )
}

export default withTranslation()(Home)