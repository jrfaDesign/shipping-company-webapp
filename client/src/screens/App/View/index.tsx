import { useEffect, useState } from "react";

import { Route, Routes, Navigate, useNavigate } from "react-router-dom";

import useDrawerStore from "~/hooks/stores/drawer";

import Error from "~/screens/404";
import Header from "shared/containers/Header";
import Footer from "shared/containers/Footer";
import { routes } from "~/routes";

import { AppContainer, Body, ContentWrapper, ContentContainer } from "./styles";
import { User as UserProps } from "~/types/app";

import DrawerMenu from "~/shared/containers/DrawerMenu";

interface Props {
  user: UserProps | null;
}

const View = ({ user }: Props) => {
  const navigate = useNavigate();
  const [allRoutes, setAllRoutes] = useState<any>(null);

  const isDrawerOpen = useDrawerStore((state) => state.drawerIsOpen);

  useEffect(() => {
    if (!user) {
      //navigate("/login");
      setAllRoutes(null);
    }

    if (user) {
      const newRouting = routes.filter((route) => route.admin === user.admin);
      setAllRoutes(newRouting);
    }
  }, [user]);

  return (
    <div>
      <Routes>
        {!user &&
          routes.map(
            (route) =>
              route.noUser && <Route key={route.path} path={route.path} element={route.element} />
          )}
        {!user && <Route path="*" element={<Error />} />}
      </Routes>
      {user && (
        <>
          <AppContainer>
            <DrawerMenu />
            <ContentContainer open={isDrawerOpen}>
              <Header />
              <ContentWrapper>
                <Body>
                  <Routes>
                    {allRoutes &&
                      allRoutes.map((route) => (
                        <Route key={route.path} path={route.path} element={route.element} />
                      ))}
                  </Routes>
                </Body>
                <Footer />
              </ContentWrapper>
            </ContentContainer>
          </AppContainer>
        </>
      )}
    </div>
  );
};

export default View;
