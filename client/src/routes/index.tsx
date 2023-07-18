import Login from "../screens/Login";

import HomeAdmin from "~/screens/HomeAdmin";

import HomeClient from "~/screens/HomeClient";
import MyOrders from "~/screens/MyOrders";

import Register from "~/screens/Register";
import Contacts from "~/screens/Contacts";
import PrivacyPolitics from "~/screens/PrivacyPolitics";
import Cookies from "~/screens/Cookies";

import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NewOrder from "~/screens/NewOrder";

export const routes = [
  // =================================================================>
  // Admin
  {
    path: "/",
    element: <HomeAdmin />,
    name: "Home",
    admin: true,
    icon: <HomeIcon />
  },

  // =================================================================>
  // Client

  {
    path: "/",
    element: <HomeClient />,
    name: "Home",
    admin: false,
    icon: <HomeIcon />
  },

  {
    path: "/encomendas",
    element: <MyOrders />,
    name: "Encomendas",
    admin: false,
    icon: <LocalShippingIcon />
  },
  {
    path: "/encomendas/nova-encomeda",
    element: <NewOrder />,
    name: "Nova Encomenda",
    admin: false
  },

  // =================================================================>
  // Legal
  {
    path: "/login",
    element: <Login />,
    name: "Login",
    noUser: true
  },

  {
    path: "/registar",
    element: <Register />,
    name: "Registar",
    noUser: true
  },

  {
    path: "/contactos",
    element: <Contacts />,
    name: "Contactos",
    noUser: true
  },

  {
    path: "/politicas-de-privacidade",
    element: <PrivacyPolitics />,
    name: "Politicas de Privacidade",
    noUser: true
  },
  {
    path: "/cookies",
    element: <Cookies />,
    name: "Cookies",
    noUser: true
  }
];
