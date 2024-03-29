import Login from "../screens/Login";

//Admin
import HomeAdmin from "~/screens/HomeAdmin";
import UserManagement from "~/screens/UserScreens/UserManagement";
import UserDetails from "~/screens/UserScreens/UserDetails";

import ShipperManagement from "~/screens/ShipperScreens/ShipperManagement";
import ShipperDetails from "~/screens/ShipperScreens/ShipperDetails";
import AdminOrders from "~/screens/OrdersScreens/AdminOrders";

//User
import HomeClient from "~/screens/HomeClient";
import MyOrders from "~/screens/OrdersScreens/MyOrders";

//Both Users
import OrdersDetails from "~/screens/OrdersScreens/OrdersDetails";

//Legal
import Register from "~/screens/Register";
import Contacts from "~/screens/Contacts";
import PrivacyPolitics from "~/screens/LegalScreens/PrivacyPolitics";
import Cookies from "~/screens/LegalScreens/Cookies";

//Icons
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ApartmentIcon from "@mui/icons-material/Apartment";
import NewOrder from "~/screens/OrdersScreens/NewOrder";
import PersonIcon from "@mui/icons-material/Person";
import ShipperCreationForm from "~/screens/ShipperScreens/ShipperCreationForm";
import UserCreationForm from "~/screens/UserScreens/UserCreationForm";

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
  {
    path: "/utilizadores",
    element: <UserManagement />,
    name: "Utilizadores",
    admin: true,
    icon: <PersonIcon />
  },
  {
    path: "/utilizadores/:id",
    element: <UserDetails />,
    name: "Utilizadores detalhes",
    admin: true
  },
  {
    path: "/utilizadores/novo-utilizador",
    element: <UserCreationForm />,
    name: "Novo Utilizador",
    admin: true
  },
  {
    path: "/expeditores",
    element: <ShipperManagement />,
    name: "Expeditores",
    admin: true,
    icon: <ApartmentIcon />
  },
  {
    path: "/expeditores/:id",
    element: <ShipperDetails />,
    name: "Expeditores detalhes",
    admin: true
  },
  {
    path: "/expeditores/novo-expeditor",
    element: <ShipperCreationForm />,
    name: "Novo Expeditor",
    admin: true
  },
  {
    path: "/encomendas",
    element: <AdminOrders />,
    name: "Encomendas",
    admin: true,
    icon: <LocalShippingIcon />
  },
  {
    path: "/encomendas/:id",
    element: <OrdersDetails />,
    name: "Encomendas",
    admin: true
  },
  {
    path: "/encomendas/nova-encomeda",
    element: <NewOrder />,
    name: "Nova Encomenda",
    admin: true
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
    path: "/encomendas/:id",
    element: <OrdersDetails />,
    name: "Encomendas",
    admin: false
  },
  {
    path: "/encomendas/nova-encomeda",
    element: <NewOrder />,
    name: "Nova Encomenda",
    admin: false
  },

  // =================================================================>
  // Both Users

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
