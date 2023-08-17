import React from "react";

import {
  Container,
  HeaderContainer,
  HeaderWrapper,
  HeaderTitleText,
  ButtonContainer,
  ChildrenContainer
} from "./styles";

interface Props {
  children: React.ReactNode;
  header?: HeaderProps;
  margin?: string;
  padding?: boolean;
}

interface HeaderProps {
  title: string;
  button?: HeaderButtonProps;
}

interface HeaderButtonProps {
  icon: any;
  action: () => void;
}

const FullPageWhiteContainer = ({ children, header, margin, padding }: Props) => {
  return (
    <Container margin={margin}>
      <>
        {header && (
          <HeaderContainer>
            <HeaderWrapper>
              <HeaderTitleText>{header.title}</HeaderTitleText>
              {header.button && (
                <ButtonContainer onClick={header.button?.action}>
                  {header.button?.icon}
                </ButtonContainer>
              )}
            </HeaderWrapper>
          </HeaderContainer>
        )}
        <ChildrenContainer padding={padding}>{children}</ChildrenContainer>
      </>
    </Container>
  );
};

export default FullPageWhiteContainer;
