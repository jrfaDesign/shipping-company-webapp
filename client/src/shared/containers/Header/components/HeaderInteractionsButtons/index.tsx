import React, { useState } from "react";

import { useScreenWidth } from "~/hooks/globalHooks";
import useDrawerStore from "~/hooks/stores/drawer";

import DrawerMenu from "~/shared/containers/DrawerMenu";

import { BlackSceen, ButtonsContainer } from "./styles";
import CustomDatePicker from "../CustomDatePicker";

const HeaderInteractionsButtons = () => {
  const screenWidth = useScreenWidth();

  const drawerIsOpen = useDrawerStore((state) => state.drawerIsOpen);
  const toggleDrawer = useDrawerStore((state) => state.toggleDrawer);

  const [calendarIsOpen, setCalendarIsOpen] = useState(false);

  return (
    <ButtonsContainer>
      <CustomDatePicker />

      {screenWidth <= 769 && <DrawerMenu />}
      {screenWidth <= 769 && drawerIsOpen && <BlackSceen onClick={toggleDrawer} />}
    </ButtonsContainer>
  );
};

export default HeaderInteractionsButtons;
