import { useNavigate } from "react-router-dom";

import { User as UserProps } from "~/types/app";

import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Logout from "@mui/icons-material/Logout";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

import { OptionContainer, Menu } from "./styles";
import StyledSelectComponent from "~/shared/components/Select";

interface Props {
  anchorEl: HTMLElement | null;
  open: boolean;
  handleClose: () => void;
}

const DropdownMenu = ({ anchorEl, open, handleClose }: Props) => {
  const navigate = useNavigate();

  const selectedOptions = {
    label: "Test Options",
    options: [
      { value: "", label: " - " },
      { value: "", label: " - " },
      { value: "", label: " - " },
      { value: "", label: " - " },
      { value: "", label: " - " },
      { value: "", label: " - " },
      { value: "", label: " - " }
    ]
  };

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
      <OptionContainer>
        <StyledSelectComponent
          style={"outlined"}
          label={selectedOptions.label}
          value={selectedOptions}
          onChange={(e) => {}}
          options={selectedOptions.options}
        />
      </OptionContainer>
      <OptionContainer>
        <StyledSelectComponent
          style={"outlined"}
          label={selectedOptions.label}
          value={selectedOptions}
          onChange={(e) => {}}
          options={selectedOptions.options}
        />
      </OptionContainer>
      <OptionContainer>
        <StyledSelectComponent
          style={"outlined"}
          label={selectedOptions.label}
          value={selectedOptions}
          onChange={(e) => {}}
          options={selectedOptions.options}
        />
      </OptionContainer>
      <OptionContainer>
        <StyledSelectComponent
          style={"outlined"}
          label={selectedOptions.label}
          value={selectedOptions}
          onChange={(e) => {}}
          options={selectedOptions.options}
        />
      </OptionContainer>
    </Menu>
  );
};
export default DropdownMenu;
