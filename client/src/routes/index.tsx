import Login from "../screens/Login";
import Home from "../screens/Home";
import Register from "../screens/Register";

export const routes = [
  {
    path: "/login",
    element: <Login />,
    name: "Login",
  },
  {
    path: "/register",
    element: <Register />,
    name: "Register",
  },

  {
    path: "/",
    element: <Home />,
    name: "Home",
  },
];
