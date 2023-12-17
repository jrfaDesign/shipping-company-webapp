import { Alert, Snackbar } from "@mui/material";
import React from "react";

import { showToast } from "~/store/features/toast/module";
import { useAppDispatch } from "~/store/hooks";

interface Props {
  isVisible: boolean;
  message: string;
  severity: "error" | "warning" | "info" | "success";
}

const Toast = ({ isVisible, message, severity }: Props) => {
  const dispatch = useAppDispatch();
  if (!isVisible || !severity) {
    return null;
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(showToast(false));
  };

  return (
    <Snackbar
      open={isVisible}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
