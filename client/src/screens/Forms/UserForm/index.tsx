import { useState } from "react";
import { RegistedShipper, RegisteredUser } from "~/types/app";

import useToastStore from "~/hooks/stores/toast";
import { useShippersStore } from "~/hooks/stores/shippers";

import StyledButton from "~/shared/components/Button";
import StyledInput from "~/shared/components/StyledInput";

import { FormContainer, ButtonContainer, MultiInputContainer } from "../styles";

import { FormErrorsProps, FormProps, INITIAL_FORM_DATA, getFormErrors } from "./utils";
import StyledSelectComponent from "~/shared/components/Select";

interface Props {
  user?: RegisteredUser;
}

const UserForm = ({ user }: Props) => {
  const [formData, setFormData] = useState<FormProps>(user ? user : INITIAL_FORM_DATA);
  const [formErrors, setFormErrors] = useState<FormErrorsProps>({});

  const allShippers = useShippersStore((state) => state.shippers);
  const shippersOptions = allShippers.map((shipper) => ({
    value: shipper._id,
    label: shipper.name
  }));

  const setToastOptions = useToastStore((state) => state.setToastOptions);
  const curstomResponse = {
    isVisible: true,
    message: "Houve um erro no pedido, tenta novamente.",
    severity: "error"
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [id]: value
    }));
  };
  const handleCompanyPicking = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormData((prevValues) => ({
      ...prevValues,
      company: value
    }));
  };

  const handleSubmit = () => {
    const errors = getFormErrors(formData);

    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      if (user) {
        console.log(formData);
        setToastOptions(curstomResponse);
      } else {
        console.log(formData);
        setToastOptions(curstomResponse);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <FormContainer>
        <span>
          Depois de preencher e submeter este formulário, o utilizador vai receber no email as
          instruções para concluir o processo de registo.
        </span>

        {user && (
          <StyledInput
            id="_id"
            type="text"
            label="ID"
            value={formData._id}
            onChange={(e: any) => handleInputChange(e)}
            disabled
          />
        )}
        <MultiInputContainer>
          <StyledInput
            id="name"
            type="text"
            label="Nome"
            value={formData.name}
            error={formErrors.name ? true : false}
            errorText={formErrors.name}
            onChange={(e: any) => handleInputChange(e)}
          />
          <StyledInput
            id="lastName"
            type="text"
            label="Apelido"
            value={formData.lastName}
            error={formErrors.lastName ? true : false}
            errorText={formErrors.lastName}
            onChange={(e: any) => handleInputChange(e)}
          />
        </MultiInputContainer>

        <MultiInputContainer>
          <StyledInput
            id="contact"
            type="text"
            label="Contacto"
            placeholder={"900 000 000"}
            value={formData.contact}
            error={formErrors.contact ? true : false}
            errorText={formErrors.contact}
            onChange={(e: any) => handleInputChange(e)}
          />
          <StyledInput
            id="email"
            type="email"
            label="Email"
            value={formData.email}
            error={formErrors.email ? true : false}
            errorText={formErrors.email}
            onChange={(e: any) => handleInputChange(e)}
          />
        </MultiInputContainer>

        <StyledSelectComponent
          style={"outlined"}
          label="Empresa"
          value={formData.company}
          options={shippersOptions}
          onChange={(e: any) => handleCompanyPicking(e)}
        />
      </FormContainer>

      <ButtonContainer>
        <StyledButton text={user ? "Editar" : "Adicionar"} onClick={() => handleSubmit()} />
      </ButtonContainer>
    </form>
  );
};

export default UserForm;
