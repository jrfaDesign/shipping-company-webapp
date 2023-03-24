import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginStore } from "../../hooks/stores/login";

import { Container, TitleText } from "./styles";

interface UserCredentials {
  username: string;
  password: string;
}

const Login = () => {
  const setIsLogedIn = loginStore((state) => state.setIsLogedIn);
  const isLogedIn = loginStore((state) => state.isLogedIn);
  const navigate = useNavigate();

  useEffect(() => {
    isLogedIn && navigate("/");
  }, []);

  const [loginInfo, setLoginInfo] = useState<UserCredentials>({
    username: "",
    password: ""
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginInfo({
      ...loginInfo,
      [event.target.name]: event.target.value
    });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://192.168.1.80:4000/auth/login", loginInfo);
      if (response.data.message) {
        alert(response.data.message);
      } else {
        localStorage.setItem("token", response.data.token);
        setIsLogedIn();
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <TitleText>Login Page</TitleText>

      <input
        placeholder="Username"
        type="text"
        value={loginInfo.username}
        name="username"
        onChange={(e) => handleInputChange(e)}
      />
      <input
        placeholder="Password"
        type="password"
        value={loginInfo.password}
        name="password"
        onChange={(e) => handleInputChange(e)}
      />

      <div>
        <button onClick={() => handleLogin()}>Login</button>
        <button onClick={() => navigate("/register")}>Register new user</button>
      </div>
    </Container>
  );
};

export default Login;
