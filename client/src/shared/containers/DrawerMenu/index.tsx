import React, { useEffect, useState } from "react";

import { routes } from "~/routes";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "~/hooks/stores/user";
import useDrawerStore from "~/hooks/stores/drawer";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import Logout from "@mui/icons-material/Logout";

import { useScreenWidth } from "~/hooks/globalHooks";

import { Container, DrawerHead, DrawerMenuContainer } from "./styles";

const drawerWidth = "279px";

const DrawerMenu = () => {
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);
  const navigate = useNavigate();

  const screenWidth = useScreenWidth();

  const drawerIsOpen = useDrawerStore((state) => state.drawerIsOpen);
  const toggleDrawer = useDrawerStore((state) => state.toggleDrawer);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    if (screenWidth <= 769) {
      toggleDrawer;
    }
  }, []);

  const menuItems = routes.filter((route) => {
    if (user && !route.noUser) {
      if (user.admin && route.admin) {
        return route;
      } else if (!user.admin && !route.admin) {
        return route;
      }
    }
  });

  return (
    <Container open={drawerIsOpen}>
      <Box>
        {!drawerIsOpen && (
          <IconButton color="inherit" aria-label="open drawer" onClick={toggleDrawer} edge="start">
            <MenuIcon />
          </IconButton>
        )}

        <Drawer
          variant="persistent"
          anchor={screenWidth <= 769 ? "right" : "left"}
          open={drawerIsOpen}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box"
            }
          }}
        >
          <DrawerHead onClick={toggleDrawer}>
            {screenWidth <= 769 ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </DrawerHead>
          <DrawerMenuContainer>
            <List>
              {menuItems.map((item, idx) => (
                <ListItem
                  key={item.name + idx}
                  disablePadding
                  onClick={() => handleNavigation(item.path)}
                >
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <div>
              <Divider />
              <List>
                <ListItem disablePadding onClick={() => handleLogout()}>
                  <ListItemButton>
                    <ListItemIcon>{<Logout />}</ListItemIcon>
                    <ListItemText primary={"Logout"} />
                  </ListItemButton>
                </ListItem>
              </List>
            </div>
          </DrawerMenuContainer>
        </Drawer>
      </Box>
    </Container>
  );
};

export default DrawerMenu;
