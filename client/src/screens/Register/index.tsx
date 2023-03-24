import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { loginStore } from "../../hooks/stores/login";

import { Container, TitleText } from "./styles";

interface UserCredentials {
  username: string;
  password: string;
}

const Register = () => {
  const setIsLogedIn = loginStore((state) => state.setIsLogedIn);
  const isLogedIn = loginStore((state) => state.isLogedIn);
  const navigate = useNavigate();

  useEffect(() => {
    isLogedIn && navigate("/");
  }, []);

  const [registerInfo, setRegisterInfo] = useState<UserCredentials>({
    username: "",
    password: ""
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRegisterInfo({
      ...registerInfo,
      [event.target.name]: event.target.value
    });
  };

  const handleRegister = async () => {
    if (registerInfo.username == null || registerInfo.password == null) {
      alert("Empty");
      return;
    }
    try {
      const response = await axios.post("http://localhost:4000/auth/register", registerInfo);
      // ? add a toast library?
      console.log(response);
      alert(response.data.message);
    } catch (err) {
      console.error(err);
      alert("deu bode");
    }
    // setIsLogedIn();
    // navigate("/");
  };

  return (
    <Container>
      <TitleText>Register Page</TitleText>

      <input
        placeholder="Username"
        type="text"
        value={registerInfo.username}
        name="username"
        onChange={(e) => handleInputChange(e)}
      />
      <input
        placeholder="Password"
        type="password"
        value={registerInfo.password}
        name="password"
        onChange={(e) => handleInputChange(e)}
      />

      <div>
        <button onClick={() => handleRegister()}>Register</button>
        <button onClick={() => navigate("/login")}>Sign in</button>
      </div>
    </Container>
  );
};

export default Register;
