import { OptionContainer, Menu } from "./styles";
import StyledSelectComponent from "~/shared/components/Select";
import { Dispatch, SetStateAction } from "react";

interface Props {
  filterInformation: any;
  filterOptions: any;
  setFilterOptions: Dispatch<SetStateAction<undefined>>;
  anchorEl: HTMLElement | null;
  open: boolean;
  handleClose: () => void;
}

const DropdownMenu = ({
  filterOptions,
  setFilterOptions,
  filterInformation,
  anchorEl,
  open,
  handleClose
}: Props) => {
  const handleFilterPicking = (e: any, key: any) => {
    setFilterOptions((prevValues: any) => ({
      ...prevValues,
      [key]: e.target.value
    }));
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
      {filterInformation.map((filterOption: any, idx: any) => (
        <OptionContainer key={`${idx}_${filterOption.label}`}>
          <StyledSelectComponent
            style={"outlined"}
            label={filterOption.label}
            value={filterOptions[filterOption.label]}
            onChange={(e: any) => handleFilterPicking(e, filterOption.label)}
            options={filterOption.options}
            multiple={filterOption.multiple}
          />
        </OptionContainer>
      ))}
    </Menu>
  );
};
export default DropdownMenu;
