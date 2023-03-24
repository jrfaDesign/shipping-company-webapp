import styled from 'styled-components'

interface ButtonProps {
    onClick: () => void
}

const Button = ({ onClick }: ButtonProps) => {
    return (
        <ButtonStyled onClick={onClick}> Navigate to login</ButtonStyled>
    )
}

export default Button

const ButtonStyled = styled.button`
`