import Login from "../screens/Login";

//Admin
import HomeAdmin from "~/screens/HomeAdmin";
import UserManagement from "~/screens/UserManagement";
import ShipperManagement from "~/screens/ShipperManagement";
import AdminOrders from "~/screens/AdminOrders";

//User
import HomeClient from "~/screens/HomeClient";
import MyOrders from "~/screens/MyOrders";

//Legal
import Register from "~/screens/Register";
import Contacts from "~/screens/Contacts";
import PrivacyPolitics from "~/screens/PrivacyPolitics";
import Cookies from "~/screens/Cookies";

//Icons
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ApartmentIcon from "@mui/icons-material/Apartment";
import NewOrder from "~/screens/NewOrder";
import PersonIcon from "@mui/icons-material/Person";

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
    path: "/expeditores",
    element: <ShipperManagement />,
    name: "Expeditores",
    admin: true,
    icon: <ApartmentIcon />
  },
  {
    path: "/encomendas",
    element: <AdminOrders />,
    name: "Encomendas",
    admin: true,
    icon: <LocalShippingIcon />
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
