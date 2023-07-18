import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "./styles";

const steps = ["Step 1", "Step 2"];

const Form = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [formData, setFormData] = useState({});

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setName("");
    setEmail("");
  };

  const handleSubmit = () => {
    // Perform form submission logic here
    console.log("Name:", name);
    console.log("Email:", email);
  };

  const isStepValid = () => {
    if (activeStep === 0) {
      return name !== "";
    } else if (activeStep === 1) {
      return email !== "";
    }
    return false;
  };

  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        {activeStep === 0 && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle1">Step 1: Enter your name</Typography>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </Box>
        )}

        {activeStep === 1 && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle1">Step 2: Enter your email</Typography>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Box>
        )}

        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Fazer nova encomenda</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Voltar
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext} disabled={!isStepValid()}>
                {activeStep === steps.length - 1 ? "Fazer Pedido" : "Próximo"}
              </Button>
            </Box>
          </React.Fragment>
        )}

        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={index < activeStep}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Container>
  );
};

export default Form;
