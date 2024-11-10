import Router from '@crea/pages/Router';
import { AuthProvider } from '@crea/shared/contexts/auth-context/AuthProvider';
import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <AuthProvider>
        <Router />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
