import React from "react";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useScreenWidth } from "~/hooks/globalHooks";

interface Props {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  smallModal?: boolean;
}

const styleDesktop = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: 2,
  width: 600,
  minHeight: 100,
  maxHeight: 700,
  boxShadow: 24,
  p: 4
};

const styleMobile = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: 2,
  width: 290,
  minHeight: 130,
  maxHeight: 650,
  boxShadow: 24,
  p: 4
};

const StyledModal = ({ open, handleClose, children, smallModal }: Props) => {
  const screenWidth = useScreenWidth();
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box overflow={"auto"} sx={screenWidth < 1025 || smallModal ? styleMobile : styleDesktop}>
        {children}
      </Box>
    </Modal>
  );
};

export default StyledModal;
