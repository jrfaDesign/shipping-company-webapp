import { AppContainer, Container } from "./styles";

import { useUserStore } from "~/hooks/stores/user";

import View from "./View";
import { Suspense } from "react";
import Loading from "~/shared/components/Loading";

const App = () => {
  const user = useUserStore((state) => state.user);

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <AppContainer>
          <Container>
            <View user={user} />
          </Container>
        </AppContainer>
      </Suspense>
    </div>
  );
};

export default App;
