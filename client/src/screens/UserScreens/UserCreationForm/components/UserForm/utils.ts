import {
  validateEmail,
  validatePortugueseMobileNumber,
  validatePortugueseZipCode
} from "~/hooks/globalHooks";

export interface FormProps {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  contact: string;
  company: string;
}

export interface FormErrorsProps {
  _id?: string;
  name?: string;
  lastName?: string;
  email?: string;
  contact?: string;
  company?: string;
}

export const INITIAL_FORM_DATA: FormProps = {
  _id: "",
  name: "",
  lastName: "",
  email: "",
  contact: "",
  company: ""
};

export const getFormErrors = (formData: FormProps) => {
  const errors: FormErrorsProps = {};

  if (!formData.name) {
    errors.name = "É necessário preencher o nome do Utilizador.";
  }
  if (!formData.lastName) {
    errors.lastName = "É necessário preencher o apelido do Utilizador.";
  }

  if (!formData.email) {
    errors.email = "É necessário preencher o email do Utilizador.";
  } else if (!validateEmail(formData.email)) {
    errors.email = "É necessário que o email esteja no formato correto.";
  }

  if (!formData.contact) {
    errors.contact = "É necessário preencher o contacto do Utilizador.";
  } else if (!validatePortugueseMobileNumber(formData.contact)) {
    errors.contact = "É necessário que o contacto esteja no formato correto.";
  }

  if (!formData.company) {
    errors.name = "É necessário escolher um Expeditor.";
  }

  return errors;
};
