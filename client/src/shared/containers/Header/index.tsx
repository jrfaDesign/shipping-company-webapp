import Logo from "shared/components/Logo";

import Toast from "~/shared/components/Toast";

import useToastStore from "~/hooks/stores/toast";
import { useScreenWidth } from "~/hooks/globalHooks";
import useDrawerStore from "~/hooks/stores/drawer";

import { Wrapper } from "./styles";

import DrawerMenu from "../DrawerMenu";
import styled from "styled-components";

const Header = () => {
  const toast = useToastStore((state) => state.toast);
  const screenWidth = useScreenWidth();

  const drawerIsOpen = useDrawerStore((state) => state.drawerIsOpen);
  const toggleDrawer = useDrawerStore((state) => state.toggleDrawer);
  return (
    <Wrapper>
      <Logo />
      {screenWidth <= 769 && <DrawerMenu />}
      {screenWidth <= 769 && drawerIsOpen && <BlackSceen onClick={toggleDrawer} />}

      <>
        <Toast isVisible={toast.isVisible} message={toast.message} severity={toast.severity} />
      </>
    </Wrapper>
  );
};

export default Header;

const BlackSceen = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 200vh;

  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 98;
`;
