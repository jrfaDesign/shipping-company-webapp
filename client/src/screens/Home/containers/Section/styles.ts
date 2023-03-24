import styled from "styled-components";
import { maxWidth, minWidth } from "~/styles/theme";

interface CardProps {
    marginMobile?: string;
    marginDesktop?: string;
}

export const BodySection = styled.section<CardProps>`
    margin-bottom: 20px;
    background-color: ${({ theme }) => theme.cardBackgroundColor};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;

    h3 {
        margin-bottom: 30px;
    }
    
    ${minWidth} {
        margin: ${props => props.marginDesktop ? props.marginDesktop : '30px 0px'};
    }

    ${maxWidth}{
        margin: ${props => props.marginMobile ? props.marginMobile : '20px 0px;'}
    }
`