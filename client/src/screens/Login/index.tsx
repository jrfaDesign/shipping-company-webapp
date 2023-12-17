import { axios } from "~/config/interceptors";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { showToast } from "~/store/features/toast/module";

import StyledButton from "~/shared/components/Button";
import Section from "~/shared/components/Section";
import StyledInput from "~/shared/components/StyledInput";

import {
  Container,
  FormContainer,
  ButtonContainer,
  InputContainer,
  ToolsContainer
} from "./styles";

import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { setUser, setAccessToken } from "~/store/features/auth/module";

interface UserCredentials {
  username: string;
  password: string;
}

const Login = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.auth.user);

  const navigate = useNavigate();

  useEffect(() => {
    user && navigate("/");
  }, []);

  const [loginInfo, setLoginInfo] = useState<UserCredentials>({
    username: "",
    password: ""
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    if (id !== undefined && value !== undefined) {
      setLoginInfo((prevValues) => ({
        ...prevValues,
        [id]: value
      }));
    }
  };

  const handleLogin = async (user: any) => {
    localStorage.removeItem("token");
    dispatch(setUser(user));

    setAccessToken("acessToken");

    const payload = {
      status: 200,
      data: {
        message: "Login successful!"
      }
    };

    dispatch(showToast(payload));

    navigate("/");

    //try {
    //  const response = await axios.post(`${BASE_URL}auth/login`, loginInfo);
    //  if (response.status === 200) {
    //    const { user, accessToken } = response.data;
    //
    //    setToastOptions({
    //      isVisible: true,
    //      message: response.data.message,
    //      severity: response.status
    //    });
    //
    //    setAccessToken(accessToken);
    //    setUser(user);
    //    navigate("/");
    //  }
    //} catch (err) {
    //  console.error(err);
    //  setToastOptions({
    //    isVisible: true,
    //    message: "Erro ao encontrar utilizador, tente novamente.",
    //    severity: "error"
    //  });
    //}
  };

  const newUser = {
    _id: "123",
    email: "email@email.com",
    name: "name",
    lastName: "lastName",
    accessToken: "string",
    admin: false
  };
  const newAdmin = {
    _id: "123",
    email: "email@email.com",
    name: "name",
    lastName: "lastName",
    accessToken: "string",
    admin: true
  };

  return (
    <Section>
      <Container>
        <h2>Iniciar Sessão </h2>
        <FormContainer>
          <InputContainer>
            <StyledInput
              id={"username"}
              type={"text"}
              label={"Email"}
              value={loginInfo.username}
              onChange={handleInputChange}
            />
            <StyledInput
              id={"password"}
              type={"password"}
              label={"Password"}
              value={loginInfo.password}
              onChange={handleInputChange}
            />
          </InputContainer>
          <ButtonContainer>
            <StyledButton text="Login Admin" onClick={() => handleLogin(newAdmin)} />
            <StyledButton text="Login User" onClick={() => handleLogin(newUser)} />
            {/* <StyledButton variant="text" text="Registar" onClick={() => navigate("/register")} /> */}
          </ButtonContainer>
          <ToolsContainer>
            {/* <span>Esqueci-me da senha</span> */}
            <span onClick={() => navigate("/registar")}>Fazer novo registo</span>
          </ToolsContainer>
        </FormContainer>
      </Container>
    </Section>
  );
};

export default Login;
