import { AppContainer, Container } from "./styles";

import { useAppSelector } from "~/store/hooks";

import View from "./View";
import { Suspense } from "react";
import Loading from "~/shared/components/Loading";

const App = () => {
  const user = useAppSelector((state) => state.auth.user);

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
