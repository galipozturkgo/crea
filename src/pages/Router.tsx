import { useRoutes } from 'react-router-dom';
import Login from './login/Login';
import Products from './products/Products';
import Product from './product/Product';
import ProtectedRoute from '@crea/shared/components/protected-route/ProtectedRoute';
import { useAuth } from '@crea/shared/contexts/auth-context/AuthContext';
import Button from '@crea/shared/components/button/Button';

const routeElements = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Products />
      </ProtectedRoute>
    ),
  },
  {
    path: '/product/:id',
    element: (
      <ProtectedRoute>
        <Product />
      </ProtectedRoute>
    ),
  },
];

const Router = () => {
  const { user, logout } = useAuth();
  const routes = useRoutes(routeElements);

  return (
    <div className="p-16 w-full relative">
      {user && (
        <Button
          className="absolute right-16 top-16"
          onClick={logout}
          label="Logout"
        />
      )}
      <div>{routes}</div>
    </div>
  );
};

export default Router;
