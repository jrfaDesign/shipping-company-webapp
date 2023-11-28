import React, { useEffect } from "react";

import { routes } from "~/routes";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "~/store/hooks";

import { useScreenWidth } from "~/hooks/globalHooks";

import { logout } from "~/store/features/auth/module";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Logout from "@mui/icons-material/Logout";

import { Container, DrawerHead, DrawerMenuContainer } from "./styles";
import { toggleDrawer } from "~/store/features/drawer/module";

const drawerWidth = "279px";

const DrawerMenu = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.auth.user);
  const drawerIsOpen = useAppSelector((state) => state.drawer.isOpen);

  const screenWidth = useScreenWidth();

  const handleNavigation = (path: string) => {
    dispatch(toggleDrawer());
    navigate(path);
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(toggleDrawer());
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
          <IconButton
            className="drawer-btn"
            color="inherit"
            aria-label="open drawer"
            onClick={() => dispatch(toggleDrawer())}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
        )}

        <Drawer
          variant="persistent"
          anchor={screenWidth <= 769 ? "right" : "left"}
          open={drawerIsOpen}
          sx={{
            width: drawerWidth,
            zIndex: 99,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box"
            }
          }}
        >
          <DrawerHead onClick={() => dispatch(toggleDrawer())}>
            {screenWidth <= 769 ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </DrawerHead>
          <DrawerMenuContainer>
            <List>
              {menuItems
                .filter((item) => item.icon)
                .map((item, idx) => (
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
