import React, { useState } from "react";
import styled from "styled-components";

import { useUserStore } from "~/hooks/stores/user";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

import PersonIcon from "@mui/icons-material/Person";

import { theme } from "styles/theme";

import DropdownMenu from "./components/DropdownMenu";

const Menu = () => {
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        className="drop-menu"
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-haspopup="true"
      >
        <Avatar style={{ cursor: "pointer" }} sx={{ bgcolor: theme.textDark }} alt="User Tag">
          {user ? user.name.charAt(0) : <PersonIcon />}
        </Avatar>
      </IconButton>

      <DropdownMenu
        user={user}
        logout={logout}
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Menu;

const DropMenu = styled.div``;
