import React from "react";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { IconContainer } from "./styles";

interface Props {
  icon: "delete" | "edit" | "add" | "up" | "down";
  onClick: () => void;
}

const IconButton = ({ icon, onClick }: Props) => {
  const renderedIcon = {
    delete: <DeleteOutlineIcon />,
    edit: <EditIcon />,
    add: <AddIcon />,
    up: <KeyboardArrowUpIcon />,
    down: <KeyboardArrowDownIcon />
  };
  return <IconContainer onClick={() => onClick()}>{renderedIcon[icon]}</IconContainer>;
};

export default IconButton;
