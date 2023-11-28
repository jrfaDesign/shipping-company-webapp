import React from "react";

import { useScreenWidth } from "~/hooks/globalHooks";

import DrawerMenu from "~/shared/containers/DrawerMenu";

import { BlackSceen, ButtonsContainer } from "./styles";
import CustomDatePicker from "../CustomDatePicker";
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { toggleDrawer } from "~/store/features/drawer/module";

const HeaderInteractionsButtons = () => {
  const dispatch = useAppDispatch();
  const screenWidth = useScreenWidth();

  const drawerIsOpen = useAppSelector((state) => state.drawer.isOpen);

  return (
    <ButtonsContainer>
      <CustomDatePicker />

      {screenWidth <= 769 && <DrawerMenu />}
      {screenWidth <= 769 && drawerIsOpen && (
        <BlackSceen onClick={() => dispatch(toggleDrawer())} />
      )}
    </ButtonsContainer>
  );
};

export default HeaderInteractionsButtons;
