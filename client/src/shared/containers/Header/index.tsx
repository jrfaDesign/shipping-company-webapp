import React from "react";

import Logo from "shared/components/Logo";
import Menu from "shared/containers/Menu";

import ButtonIcon from "~/shared/components/ButtonIcon";

import PersonIcon from "@mui/icons-material/Person";

import { Wrapper, Container, MenuAndUserContainer } from "./styles";

const Header = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollTop, setLastScrollTop] = React.useState(0);
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth > 768) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, []);

  React.useEffect(() => {
    if (!isDesktop) {
      const handleScroll = () => {
        const currentScrollTop = window.pageYOffset;
        if (currentScrollTop > lastScrollTop) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollTop(currentScrollTop);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isDesktop, lastScrollTop]);

  return (
    <Wrapper isVisible={isVisible}>
      {isVisible && (
        <Container isVisible={isVisible}>
          <Logo />
          <MenuAndUserContainer>
            <Menu />
            <ButtonIcon margin="0 0 0 20px">
              <PersonIcon />
            </ButtonIcon>
          </MenuAndUserContainer>
        </Container>
      )}
    </Wrapper>
  );
};

export default Header;
