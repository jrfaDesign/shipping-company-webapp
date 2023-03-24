import styled from 'styled-components'

interface ContainerProps {
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    width: 230px;
    gap: 15px;
    padding: 15px;
    cursor: pointer;
`

export const LogoText = styled.h2`
    font-size: 20px;
    color: ${({ theme }) => theme.text}
`

export const LogoIndent = styled.span`
    font-size: 20px;
    color: ${({ theme }) => theme.title}
    
`