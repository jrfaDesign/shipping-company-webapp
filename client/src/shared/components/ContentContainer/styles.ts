import styled from "styled-components";

export const StyledContentContainer = styled.div`
  width: 100%;
  h5 {
    font-size: 30px;
    margin-bottom: 15px;
  }

  p {
    margin-bottom: 10px;
  }

  span {
    color: ${({ theme }) => theme.textSecondary};
  }
`;
