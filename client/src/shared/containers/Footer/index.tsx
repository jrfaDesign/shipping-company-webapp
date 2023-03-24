import { withTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes';

import {
    Wrapper,
    FooterText,
    FoterContainer,
    Nav
} from './styles'

const Footer = (props: any) => {

    const { t } = props

    return (
        <Wrapper>
            <FoterContainer>
                <FooterText>{t('footer.footer_title')}</FooterText>
                {window.innerWidth > 768 && <Nav>{routes.filter(route => route.name && route.name !== 'Login').map((el, idx) => <NavLink key={idx + el.path} to={el.path}>{el.name}</NavLink>)} </Nav>}
            </FoterContainer>
        </Wrapper>
    )
}

export default withTranslation()(Footer)