import { AppContainer, Container } from "./styles";

import { useUserStore } from "~/hooks/stores/user";

import View from "./View";

const App = () => {
  const user = useUserStore((state) => state.user);

  return (
    <div>
      <AppContainer>
        <Container>
          <View user={user} />
        </Container>
      </AppContainer>
    </div>
  );
};

export default App;
