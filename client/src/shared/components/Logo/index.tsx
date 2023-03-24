
import { useNavigate } from 'react-router-dom';

import { LogoIcon } from 'assets/images/svgs';

import {
    Container,
    LogoText,
    LogoIndent,
} from './styles'

export default function Logo() {

    const navigate = useNavigate()

    return (
        <Container onClick={() => navigate('/')} >
            <LogoIcon fill="#00DC82" />
            <LogoText> Starter Zustand <LogoIndent>+</LogoIndent> Rn </LogoText>
        </Container>
    )
}