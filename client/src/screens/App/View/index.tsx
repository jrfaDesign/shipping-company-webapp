import { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

import useDrawerStore from "~/hooks/stores/drawer";

import Error from "~/screens/404";
import Header from "shared/containers/Header";
import Footer from "shared/containers/Footer";
import { routes } from "~/routes";

import { AppContainer, Body, ContentWrapper, ContentContainer } from "./styles";
import { User as UserProps } from "~/types/app";

import DrawerMenu from "~/shared/containers/DrawerMenu";
import Login from "~/screens/Login";

import { useScreenWidth } from "~/hooks/globalHooks";

interface Props {
  user: UserProps | null;
}

const View = ({ user }: Props) => {
  const [allRoutes, setAllRoutes] = useState<any>(null);
  const isDrawerOpen = useDrawerStore((state) => state.drawerIsOpen);
  const screenWidth = useScreenWidth();

  const is404 = useLocation().pathname === "/404";

  useEffect(() => {
    if (!user) {
      setAllRoutes(null);
    }

    if (user) {
      const newRouting = routes.filter((route) => {
        if (route.admin === user.admin) {
          return route;
        } else if (route.noUser) {
          return route;
        }
      });

      setAllRoutes(newRouting);
    }
  }, [user]);

  return (
    <div>
      {!user && (
        <Routes>
          <Route path={"/login"} element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      )}
      {user &&
        (!is404 ? (
          <AppContainer>
            {screenWidth > 769 && <DrawerMenu />}
            <ContentContainer open={isDrawerOpen}>
              <Header />
              <ContentWrapper>
                <Body>
                  <Routes>
                    {allRoutes &&
                      allRoutes.map((route: any) => (
                        <Route key={route.path} path={route.path} element={route.element} />
                      ))}
                    <Route path="*" element={<Error />} />
                  </Routes>
                </Body>
                <Footer />
              </ContentWrapper>
            </ContentContainer>
          </AppContainer>
        ) : (
          <Routes>
            <Route path="*" element={<Error />} />
          </Routes>
        ))}
    </div>
  );
};

export default View;
