import View from "./components/View";
import Loading from "~/shared/components/Loading";

import { useEffect } from "react";

import { useUserStore } from "~/hooks/stores/user";

const HomeAdmin = () => {
  const user = useUserStore((state) => state.user);

  /* if (!user) {
    return <Loading />;
  } else if (user) {
    return <View />;
  } */

  return <View />;
};

export default HomeAdmin;
