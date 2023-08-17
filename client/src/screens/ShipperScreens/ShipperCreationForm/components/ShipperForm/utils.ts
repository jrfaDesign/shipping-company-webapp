import {
  validateEmail,
  validatePortugueseMobileNumber,
  validatePortugueseZipCode
} from "~/hooks/globalHooks";

export interface FormProps {
  _id: string;
  name: string;
  contact: string;
  email: string;
  address: string;
  state: string;
  zip: string;
}

export interface FormErrorsProps {
  _id?: string;
  name?: string;
  contact?: string;
  email?: string;
  address?: string;
  state?: string;
  zip?: string;
}

export const INITIAL_FORM_DATA: FormProps = {
  _id: "",
  name: "",
  contact: "",
  email: "",
  address: "",
  state: "",
  zip: ""
};

export const getFormErrors = (formData: FormProps) => {
  const errors: FormErrorsProps = {};

  if (!formData.name) {
    errors.name = "É necessário preencher o nome do Expeditor.";
  }

  if (!formData.contact) {
    errors.contact = "É necessário preencher o contacto do Expeditor.";
  } else if (!validatePortugueseMobileNumber(formData.contact)) {
    errors.contact = "É necessário que o contacto esteja no formato correto.";
  }

  if (!formData.email) {
    errors.email = "É necessário preencher o email do Expeditor.";
  } else if (!validateEmail(formData.email)) {
    errors.email = "É necessário que o email esteja no formato correto.";
  }

  if (!formData.address) {
    errors.address = "É necessário preencher a morada do Expeditor.";
  }
  if (!formData.state) {
    errors.state = "É necessário preencher o concelho do Expeditor.";
  }
  if (!formData.zip) {
    errors.zip = "É necessário preencher o código postal do Expeditor.";
  } else if (!validatePortugueseZipCode(formData.zip)) {
    errors.email = "É necessário que o ódigo postal no formato correto.";
  }

  return errors;
};
