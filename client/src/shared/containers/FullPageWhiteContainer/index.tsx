import React from "react";
import GoBackButton from "~/shared/components/GoBackButton";

import { Container, Header, ChildrenContainer } from "./styles";

interface Props {
  children: React.ReactNode;
  header?: HeaderProps;
  margin?: string;
}

interface HeaderProps {
  title: string;
  goBackTo: string;
}

const FullPageWhiteContainer = ({ children, header, margin }: Props) => {
  return (
    <Container margin={margin}>
      <>
        {header && (
          <div>
            <Header>
              <GoBackButton navigateLocation={header.goBackTo} />
              {header.title}
            </Header>
          </div>
        )}
        <ChildrenContainer padding={header ? true : false}>{children}</ChildrenContainer>
      </>
    </Container>
  );
};

export default FullPageWhiteContainer;
