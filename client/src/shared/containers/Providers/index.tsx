import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from 'styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

const Providers = ({ children }: any) => (
    <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient} >
            <GlobalStyles />
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </QueryClientProvider>
    </ThemeProvider>
)

export default Providers

