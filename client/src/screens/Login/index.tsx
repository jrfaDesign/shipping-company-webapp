import { axios } from "~/config/interceptors";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StyledButton from "~/shared/components/Button";

import Section from "~/shared/components/Section";
import StyledInput from "~/shared/components/StyledInput";

import { BASE_URL } from "~/config/variables";

import { useUserStore } from "~/hooks/stores/user";
import useToastStore from "~/hooks/stores/toast";

import {
  Container,
  FormContainer,
  ButtonContainer,
  InputContainer,
  ToolsContainer
} from "./styles";

interface UserCredentials {
  username: string;
  password: string;
}

const Login = () => {
  const user = useUserStore((state) => state.user);
  const setAccessToken = useUserStore((state) => state.setAccessToken);
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();
  const setToastOptions = useToastStore((state) => state.setToastOptions);

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

  const handleLogin = async () => {
    const newUser = {
      _id: "123",
      email: "email@email.com",
      name: "name",
      lastName: "lastName",
      accessToken: "string",
      admin: false
    };
    setUser(newUser);
    navigate("/");
    //localStorage.removeItem("token");
    //
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
            <StyledButton text="Login" onClick={() => handleLogin()} />
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
