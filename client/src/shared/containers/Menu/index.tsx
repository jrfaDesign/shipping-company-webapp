import { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';

import { routes } from 'routes';

import {
    Container,
    MenuContainer,
    OpenButtonContainer,
    Nav,
} from './styles'

import { HamburgerMenuIconClosed, HamburgerMenuIconOpen } from '../../../assets/images/svgs';
import { withTranslation } from 'react-i18next';

const Menu = (props: any) => {

    const { i18n } = props
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (window.innerWidth > 768) {
            setIsOpen(true);
        }
    }, []);

    function handleMenuClosing() {
        window.innerWidth < 768 ? setIsOpen(false) : setIsOpen(true)
    }

    function handleChangeLanguage() {
        const currentLanguage = i18n.language
        i18n.changeLanguage(currentLanguage === 'en' ? 'pt' : 'en')
    }

    return (
        <Container>
            <OpenButtonContainer onClick={() => setIsOpen(!isOpen)} >
                {!isOpen && <HamburgerMenuIconClosed fill='white' />}
                {isOpen && <HamburgerMenuIconOpen fill='white' />}
            </OpenButtonContainer>

            <MenuContainer isOpen={isOpen}>
                <Nav>
                    {window.innerWidth < 768 && <a onClick={handleChangeLanguage}>Change Language</a>}
                    {routes.filter(routes => routes.name && routes.name !== 'Login').map((route, idx) => <NavLink key={idx + route.path} to={route.path} onClick={() => handleMenuClosing()}>{route.name}</NavLink>)}
                </Nav>
            </MenuContainer>
            {window.innerWidth > 768 && <button onClick={handleChangeLanguage}>Change Language</button>}

        </Container>

    )
}

export default withTranslation()(Menu)