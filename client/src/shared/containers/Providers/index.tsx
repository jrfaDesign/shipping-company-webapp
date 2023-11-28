import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import GlobalStyles from "styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";

import { store } from "~/store/store";

const Providers = ({ children }: any) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  </ThemeProvider>
);

export default Providers;
