import React, { useState, useRef, useEffect } from "react";

import Logo from "shared/components/Logo";
import Menu from "./components/Menu";

import Toast from "~/shared/components/Toast";

import useToastStore from "~/hooks/stores/toast";

import { Wrapper } from "./styles";

const Header = () => {
  const toast = useToastStore((state) => state.toast);
  return (
    <Wrapper>
      <Logo />
      <>
        <Toast isVisible={toast.isVisible} message={toast.message} severity={toast.severity} />
      </>
    </Wrapper>
  );
};

export default Header;
