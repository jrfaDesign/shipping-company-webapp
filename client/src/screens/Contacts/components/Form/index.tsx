import React, { useState } from "react";

import { validateEmail } from "~/hooks/globalHooks";

import StyledInput from "~/shared/components/StyledInput";
import StyledButton from "~/shared/components/Button";

import { FormContainer, FormTitle, InlineInputContainer } from "./style";

interface FormProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrorsProps {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Form = () => {
  // https://getwaves.io/
  // https://app.haikei.app/

  const [formData, setFormData] = useState<FormProps>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [formErrors, setFormErrors] = useState<FormErrorsProps>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [id]: value
    }));
  };

  const handleSubmit = () => {
    const errors: FormErrorsProps = {};

    if (!formData.name) {
      errors.name = "É necessário preencher o nome.";
    }
    if (!formData.email) {
      errors.email = "É necessário preencher o email.";
    } else if (!validateEmail(formData.email)) {
      errors.email = "O email é inválido.";
    }
    if (!formData.subject) {
      errors.subject = "O assunto é obrigatório.";
    }
    if (!formData.message) {
      errors.message = "É necessário preencher a mensagem.";
    }
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log(formData);
    }
  };

  const form = () => {
    return (
      <>
        <FormTitle>Envie uma mensagem!</FormTitle>
        <form onSubmit={handleSubmit}>
          <FormContainer>
            <InlineInputContainer>
              <StyledInput
                id={"name"}
                type={"text"}
                label={"Nome"}
                value={formData.name}
                error={formErrors.name ? true : false}
                errorText={formErrors.name}
                onChange={handleInputChange}
              />
              <StyledInput
                id={"email"}
                type={"email"}
                label={"Email"}
                value={formData.email}
                error={formErrors.email ? true : false}
                errorText={formErrors.email}
                onChange={handleInputChange}
              />
            </InlineInputContainer>
            <StyledInput
              id={"subject"}
              type={"text"}
              label={"Assunto"}
              value={formData.subject}
              error={formErrors.subject ? true : false}
              errorText={formErrors.subject}
              onChange={handleInputChange}
            />
            <StyledInput
              id={"message"}
              type={"text"}
              label={"Mensagem"}
              value={formData.message}
              error={formErrors.message ? true : false}
              errorText={formErrors.message}
              multiline
              onChange={handleInputChange}
            />
          </FormContainer>
          <StyledButton text="Enviar" onClick={() => handleSubmit()} />
        </form>
      </>
    );
  };
  return <div>{form()}</div>;
};

export default Form;
