import { useNavigate } from "react-router-dom";

import { User as UserProps } from "~/types/app";

import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Logout from "@mui/icons-material/Logout";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

import { MenuItemWithIcon, Menu } from "./styles";
import MobileMenu from "../MobileMenu";

interface Props {
  user: UserProps | null;
  logout: () => void;
  anchorEl: HTMLElement | null;
  open: boolean;
  handleClose: () => void;
}

const DropdownMenu = ({ user, logout, anchorEl, open, handleClose }: Props) => {
  const navigate = useNavigate();

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button"
      }}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 20,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0
          }
        }
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MobileMenu />
      {user && (
        <MenuItem
          onClick={() => {
            handleClose();
            navigate("/area-pessoal");
          }}
        >
          A minha conta
        </MenuItem>
      )}
      {user && <Divider />}
      <MenuItem
        onClick={() => {
          handleClose();
          user ? logout() : null;
          navigate("/login");
        }}
      >
        <MenuItemWithIcon>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          {user ? "Sair" : "Entrar"}
        </MenuItemWithIcon>
      </MenuItem>
      {!user && (
        <div>
          <MenuItem onClick={() => navigate("/registar")}>
            <MenuItemWithIcon>
              <ListItemIcon>
                <AppRegistrationIcon fontSize="small" />
              </ListItemIcon>
              {"Registar"}
            </MenuItemWithIcon>
          </MenuItem>
        </div>
      )}
    </Menu>
  );
};
export default DropdownMenu;
