import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import { RestrictedRoute } from 'components/RestrictedRouts';
import { PrivateRoute } from 'components/PrivateRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUserThunk } from 'redux/thunk';
import { isRefreshingSelector } from 'redux/selectors';

const Contacts = lazy(() => import('../../pages/contacts'));
const Login = lazy(() => import('../../pages/login'));
const Register = lazy(() => import('../../pages/register'));

export const App = () => {
  const isRefreshing = useSelector(isRefreshingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};
