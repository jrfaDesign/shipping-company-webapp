import React, { useState, useRef, useEffect } from "react";

import Logo from "shared/components/Logo";
import Menu from "./components/Menu";

import Toast from "~/shared/components/Toast";

import useToastStore from "~/hooks/stores/toast";
import { useScreenWidth } from "~/hooks/globalHooks";

import { Wrapper } from "./styles";

import DrawerMenu from "../DrawerMenu";

const Header = () => {
  const toast = useToastStore((state) => state.toast);
  const screenWidth = useScreenWidth();
  return (
    <Wrapper>
      <Logo />
      {screenWidth <= 769 && <DrawerMenu />}

      <>
        <Toast isVisible={toast.isVisible} message={toast.message} severity={toast.severity} />
      </>
    </Wrapper>
  );
};

export default Header;
