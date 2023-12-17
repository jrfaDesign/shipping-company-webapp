import { axios } from "~/config/interceptors";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import StyledButton from "~/shared/components/Button";
import Section from "~/shared/components/Section";
import StyledInput from "~/shared/components/StyledInput";

import { BASE_URL } from "~/config/variables";

import { validateEmail } from "~/hooks/globalHooks";

import { Container, FormContainer, ButtonContainer, InputContainer } from "./styles";
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { showToast } from "~/store/features/toast/module";

interface RegisterUserForm {
  name: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

interface FormErrorsProps {
  name?: string;
  lastName?: string;
  email?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
}

interface ToastOptionsProps {
  isVisible: boolean;
  message: string;
  severity: "info" | "error" | "warning" | "success";
}

const Register = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    user && navigate("/");
  }, []);

  const [registerForm, setRegisterForm] = useState<RegisterUserForm>({
    name: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  const [formErrors, setFormErrors] = useState<FormErrorsProps>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    if (id !== undefined && value !== undefined) {
      setRegisterForm((prevValues) => ({
        ...prevValues,
        [id]: value
      }));
    }
  };

  const handleRegister = async () => {
    const errors: FormErrorsProps = {};

    if (!registerForm.name) {
      errors.name = "É necessário preencher o nome.";
    }
    if (!registerForm.lastName) {
      errors.lastName = "É necessário preencher o nome.";
    }

    if (!registerForm.email) {
      errors.email = "É necessário preencher o email.";
    } else if (!validateEmail(registerForm.email)) {
      errors.email = "O email é inválido.";
    }

    if (!registerForm.username) {
      errors.username = "É necessário preencher o nome de utilizador.";
    } else if (
      registerForm.username === registerForm.password ||
      registerForm.username.includes(registerForm.name) ||
      registerForm.username.includes(registerForm.lastName)
    ) {
      errors.username = "O nome de utilizador não pode ser igual à password ou conter o seu nome.";
    }

    if (!registerForm.password) {
      errors.password = "O assunto é obrigatório.";
    } else if (registerForm.confirmPassword !== registerForm.password) {
      errors.password = "As palavras devem ser iguais.";
    }
    if (!registerForm.confirmPassword) {
      errors.confirmPassword = "É necessário preencher a mensagem.";
    } else if (registerForm.confirmPassword !== registerForm.password) {
      errors.confirmPassword = "As palavras devem ser iguais.";
    }
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      try {
        const registerData = {
          name: registerForm.name,
          lastName: registerForm.lastName,
          username: registerForm.username,
          email: registerForm.email,
          password: registerForm.password
        };
        const response = await axios.post(`${BASE_URL}auth/register`, registerData);

        if (response.status === 200) {
          if (response.data.message === "Registo realizado com sucesso!") {
            dispatch(
              showToast({
                isVisible: true,
                message: response.data.message,
                severity: response.status
              })
            );
            setRegisterForm({
              name: "",
              lastName: "",
              email: "",
              username: "",
              password: "",
              confirmPassword: ""
            });
          } else {
            setFormErrors({ ...errors, email: "Utilizador já existe" });
            dispatch(
              showToast({
                isVisible: true,
                message: response.data.message,
                severity: response.status
              })
            );
          }
          navigate("/login");
        }
      } catch (err) {
        dispatch(
          showToast({
            isVisible: true,
            message: "There was an error, try again later",
            severity: "error"
          })
        );
      }
    }
  };

  return (
    <Section>
      <Container>
        <h2>Registar</h2>

        <FormContainer>
          <InputContainer>
            <StyledInput
              id={"name"}
              type={"text"}
              label={"Nome"}
              value={registerForm.name}
              error={formErrors.name ? true : false}
              errorText={formErrors.name}
              onChange={handleInputChange}
            />
            <StyledInput
              id={"lastName"}
              type={"text"}
              label={"Último nome"}
              value={registerForm.lastName}
              error={formErrors.lastName ? true : false}
              errorText={formErrors.lastName}
              onChange={handleInputChange}
            />
            <StyledInput
              id={"email"}
              type={"email"}
              label={"Email"}
              value={registerForm.email}
              error={formErrors.email ? true : false}
              errorText={formErrors.email}
              onChange={handleInputChange}
            />
            <StyledInput
              id={"username"}
              type={"text"}
              label={"Nome de utilizador"}
              value={registerForm.username}
              error={formErrors.username ? true : false}
              errorText={formErrors.username}
              onChange={handleInputChange}
            />
            <StyledInput
              id={"password"}
              type={"password"}
              label={"Password"}
              value={registerForm.password}
              error={formErrors.password ? true : false}
              errorText={formErrors.password}
              onChange={handleInputChange}
            />
            <StyledInput
              id={"confirmPassword"}
              type={"password"}
              label={"Confirmar password"}
              value={registerForm.confirmPassword}
              error={formErrors.confirmPassword ? true : false}
              errorText={formErrors.confirmPassword}
              onChange={handleInputChange}
            />

            <p>qualquer coisa de confirmo cenas coise recolha de dados</p>
          </InputContainer>
          <ButtonContainer>
            <StyledButton text="Registar" onClick={() => handleRegister()} />
          </ButtonContainer>
        </FormContainer>
      </Container>
    </Section>
  );
};

export default Register;
