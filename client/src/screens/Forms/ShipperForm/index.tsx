import { useState } from "react";
import { RegistedShipper } from "~/types/app";
import useToastStore from "~/hooks/stores/toast";

import StyledButton from "~/shared/components/Button";
import StyledInput from "~/shared/components/StyledInput";

import { FormContainer, ButtonContainer, MultiInputContainer } from "../styles";

import { FormErrorsProps, FormProps, INITIAL_FORM_DATA, getFormErrors } from "./utils";

interface Props {
  shipper?: RegistedShipper;
}

const ShipperForm = ({ shipper }: Props) => {
  const [formData, setFormData] = useState<FormProps>(shipper ? shipper : INITIAL_FORM_DATA);
  const [formErrors, setFormErrors] = useState<FormErrorsProps>({});

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

  const handleSubmit = () => {
    const errors = getFormErrors(formData);

    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      if (shipper) {
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
        {shipper && (
          <StyledInput
            id="_id"
            type="text"
            label="ID"
            value={formData._id}
            onChange={(e: any) => handleInputChange(e)}
            disabled
          />
        )}
        <StyledInput
          id="name"
          type="text"
          label="Nome"
          value={formData.name}
          error={formErrors.name ? true : false}
          errorText={formErrors.name}
          onChange={(e: any) => handleInputChange(e)}
        />

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
        <StyledInput
          id="address"
          type="text"
          label="Morada"
          value={formData.address}
          error={formErrors.address ? true : false}
          errorText={formErrors.address}
          onChange={(e: any) => handleInputChange(e)}
        />

        <MultiInputContainer>
          <StyledInput
            id="state"
            type="text"
            label="Concelho"
            value={formData.state}
            error={formErrors.state ? true : false}
            errorText={formErrors.state}
            onChange={(e: any) => handleInputChange(e)}
          />
          <StyledInput
            id="zip"
            type="text"
            label="Código Postal"
            placeholder={"0000-000"}
            value={formData.zip}
            error={formErrors.zip ? true : false}
            errorText={formErrors.zip}
            onChange={(e: any) => handleInputChange(e)}
          />
        </MultiInputContainer>
      </FormContainer>

      <ButtonContainer>
        <StyledButton text={shipper ? "Editar" : "Adicionar"} onClick={() => handleSubmit()} />
      </ButtonContainer>
    </form>
  );
};

export default ShipperForm;
