import styled from "styled-components";

export const StyledLabel = styled.label`
  display: inline-block;
  padding: 8px 16px;
  color: ${({ theme }) => theme.colors.darkBlue};
  border: 2px solid ${({ theme }) => theme.colors.darkBlue};
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 10px;

  :hover {
    transition: transform 0.6s;
    color: ${({ theme }) => theme.colors.lightBlue};
    border: 2px solid ${({ theme }) => theme.colors.lightBlue};
  }
`;

export const WarningText = styled.p`
color: ${({ theme }) => theme.colors.error};
margin: 5px 0;
text-align: left;
margin-top: 3px;
font-weight: 400;
font-size: 0.75rem;
line-height: 1.66;
letter-spacing: 0.03333em;

a, span{
  text-decoration: none;
  color: ${({ theme }) => theme.colors.error};
  font-weight: 700;
}
}
`;
