import Header from './components/Header';
import Input from './components/Input';
import Main from './components/Main';
import GlobalStyle from './styles/GlobalStyle';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Header />
      <Input />
      <Main />
    </QueryClientProvider>
  );
}

export default App;
