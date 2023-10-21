import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedInSelector } from 'redux/selectors';

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/contacts',
}) => {
  const isLoggedIn = useSelector(isLoggedInSelector);

  const shouldRedirect = !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
