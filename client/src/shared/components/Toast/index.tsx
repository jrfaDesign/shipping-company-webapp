import { Alert, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import useToastStore from "~/hooks/stores/toast";

interface Props {
  isVisible: boolean;
  message: string;
  severity: "error" | "warning" | "info" | "success";
}

const Toast = ({ isVisible, message, severity }: Props) => {
  if (!isVisible || !severity) {
    return null;
  }
  const setToastOptions = useToastStore((state) => state.setToastOptions);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setToastOptions({
      isVisible: false,
      message: "",
      severity: "info"
    });
  };

  return (
    <Snackbar
      open={isVisible}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
